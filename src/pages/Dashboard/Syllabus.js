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
  }, [getSyllabus]);

  return (
    <HomeLayout>
      <div className="syllabus">
        <AccordionItem title="Syllabus" subItems={syllabusData} level={1} />
      </div>
    </HomeLayout>
  );
};

export default Syllabus;