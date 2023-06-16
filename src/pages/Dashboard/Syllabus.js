// import React, { useState, useEffect } from "react";
// import HomeLayout from "../../designs/Dashboard/HomeLayout";
// import { useSyllabus } from "../../hooks/useSyllabus";
// import "./Syllabus.css";

// // const studentGrade = sessionStorage.getItem('grade');
// // let numericalGrade=0;

// // if (studentGrade) {
// //   // Extract the numerical part from the grade string
// //   const numericalPart = studentGrade.match(/\d+/);

// //   if (numericalPart) {
// //     numericalGrade = parseInt(numericalPart[0], 10);
// //     console.log('Numerical Grade:', numericalGrade);
// //   } else {
// //     console.log('Numerical Grade not found');
// //   }
// // } else {
// //   console.log('Student Grade not found');
// // }

// const AccordionItem = ({ title, subItems, level, id, show, onShow }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     onShow && onShow(id);
//   };

//   return (
//     <div className={`accordion-item level-${level}`}>
//       <div
//         className={`accordion-header ${show ? "open" : "closed"}`}
//         onClick={toggleAccordion}
//       >
//         {subItems && Object.keys(subItems).length > 0 && (
//           <span className="arrow"></span>
//         )}
//         <h3>{title}</h3>
//       </div>
//       {show && (
//         <div className="accordion-content">
//           {Object.entries(subItems).map(([subItemTitle, subItemContent]) => (
//             <AccordionItem
//               key={subItemTitle}
//               title={subItemTitle}
//               subItems={subItemContent}
//               level={level + 1} // Increase the indentation level
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Syllabus = () => {
//   const { getSyllabus } = useSyllabus();
//   const [syllabusData, setSyllabusData] = useState({});
//   const [showId, setShowId] = useState();

//   useEffect(() => {
//     const fetchSyllabusData = async () => {
//       try {
//         const response = await getSyllabus();
//         setSyllabusData(response.data);
//       } catch (error) {
//         console.error("Error fetching syllabus data:", error);
//       }
//     };

//     fetchSyllabusData();
//   }, []);
//   console.log(syllabusData);
//   const handleShow = (id) => setShowId(id);

//   // const getBookletLink = (grade) => {
//   //   const bookletLinks = {
//   //     1: 'https://liveolympiad.org/grade-i/',
//   //     2: 'https://liveolympiad.org/grade-ii/',
//   //     3: 'https://liveolympiad.org/grade-iii/',
//   //     4: 'https://liveolympiad.org/grade-iv/',
//   //     5: 'https://liveolympiad.org/grade-v/',
//   //     6: 'https://liveolympiad.org/grade-vi/',
//   //     7: 'https://liveolympiad.org/grade-vii/',
//   //     8: 'https://liveolympiad.org/grade-viii/',
//   //     9: 'https://liveolympiad.org/grade-ix/',
//   //     10: 'https://liveolympiad.org/grade-x/'
//   //   };

//   //   return bookletLinks[grade];
//   // };

//   return (
   
//       <div className="syllabus">
//         <AccordionItem title="Subjects" subItems={syllabusData} level={1} />
        
//       </div>
    
//   );
// };

// export default Syllabus;



import React, { useState, useEffect } from 'react';
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { useSyllabus } from "../../hooks/useSyllabus";
import "./Syllabus.css";







const AccordionItem = ({ title, subItems, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item level-${level}`}>
      <div className={`accordion-header ${isOpen ? 'open' : 'closed'}`} onClick={toggleAccordion}>
        {subItems && Object.keys(subItems).length > 0 && <span className="arrow"></span>}
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {Object.entries(subItems).map(([subItemTitle, subItemContent]) => (
            <AccordionItem
              key={subItemTitle}
              title={subItemTitle}
              subItems={subItemContent}
              level={level + 1} // Increase the indentation level
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Syllabus = () => {
  const { getSyllabus } = useSyllabus();
  const [syllabusData, setSyllabusData] = useState({});
  

  useEffect(() => {
    const fetchSyllabusData = async () => {
      try {
        const response = await getSyllabus();
        setSyllabusData(response.data);
      } catch (error) {
        console.error("Error fetching syllabus data:", error);
      }
    };

    fetchSyllabusData();
  }, []);
  console.log(syllabusData);

  return (
    <HomeLayout>
      <div className="syllabus">
        <AccordionItem title="Subjects" subItems={syllabusData} level={1} />
        
      </div>
    </HomeLayout>
  );
};

export default Syllabus;
