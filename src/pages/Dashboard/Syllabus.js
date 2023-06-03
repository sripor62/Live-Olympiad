import React, { useState } from 'react';
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { useStore } from "../../stores";
import "./Syllabus.css";

const AccordionItem = ({ title, content, subItems, level }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className={`accordion-item level-${level}`}>
          <div className={`accordion-header ${isOpen ? 'open' : 'closed'}`} onClick={toggleAccordion}>
        {subItems && subItems.length > 0 && <span className="arrow"></span>}
        <h3>{title}</h3>
      </div>
          {isOpen && (
            <div className="accordion-content">
              {content}
              {subItems && subItems.length > 0 && (
                <div className="sub-accordion">
                  {subItems.map((subItem, index) => (
                    <AccordionItem
                      key={index}
                      title={subItem.title}
                      content={subItem.content}
                      subItems={subItem.subItems}
                      level={level + 1} // Increase the indentation level
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );
  };

const Syllabus = () => {
  const syllabusData = [
    {
      title: 'Science',
      content: 'Content for Layer 1 - Item 1',
      subItems: [
        {
          title: 'Layer 2 - Item 1',
          content: 'Content for Layer 2 - Item 1',
          subItems: [
            {
              title: 'Layer 3 - Item 1',
              content: 'Content for Layer 3 - Item 1',
            },
            {
              title: 'Layer 3 - Item 2',
              content: 'Content for Layer 3 - Item 2',
            },
          ],
        },
        {
          title: 'Layer 2 - Item 2',
          content: 'Content for Layer 2 - Item 2',
        },
      ],
    },

    {
      title: 'Maths',
      subItems: [
        {
          title: 'Strand',
          //content: 'Content for Strand',
          subItems: [
            {
              title: 'Numbers and Algebra',
              content: ''
            },
            {
              title: 'Geometry and Measurement',
              content: ''
            },
            {
              title: 'Statistics and Probability',
              content: ''
            }
          ]
        },

        {
          title: 'Domain',
          subItems: [
            {
              title: 'Number Knowledge',
              content: ''
            },
            {
              title: 'Equations & Expressions',
              content: ''
            },
            {
              title: 'Measurement',
              content: ''
            },
            {
                title: 'Shapes',
                content: ''
            },
            {
                title: 'Statistical Investigation & Literacy',
                content: ''
            },
            {
                title: 'Probability',
                content: ''
            },
            {
                title: 'Number Knowledge',
                content: ''
            },
            {
                title: 'Equations & Expressions',
                content: ''
            },
            {
                title: 'Patterns & Relationships',
                content: ''
            },
            {
                title: 'Measurement',
                content: ''
            },
            {
                title: 'Position & Orientation',
                content: ''
            }
          ]
        },

        {
          title: 'Topic',
          subItems: [
            {
              title: 'Counting and Cardinality',
              content: ''
            },
            {
              title: 'Comparing Numbers',
              content: ''
            },
            {
              title: 'Basic Operations (Addition and Subtraction) Single Digit',
              content: ''
            },
            {
                title: 'Using addition and subtraction to solve word problems',
                content: ''
            },
            {
                title: 'Introduction to Multiplication',
                content: ''
            },
            {
                title: 'Recognizing and Continuing Simple Patterns',
                content: ''
            },
            {
                title: 'Basic Sequencing',
                content: ''
            },
            {
                title: 'Length',
                content: ''
            },
            {
                title: 'Weight',
                content: ''
            },
            {
                title: 'Capacity',
                content: ''
            },
            {
                title: 'Basic 2D Shapes: Circle, Triangle, Square, Rectangle',
                content: ''
            },
            {
                title: 'Collecting and Sorting Data',
                content: ''
            },
            {
                title: 'Identifying Simple Patterns and Trends in Data',
                content: ''
            },
            {
                title: 'Chance as Likelihood - Certain, Likely, Unlikely, Impossible',
                content: ''
            },
            {
                title: 'Identifying and Sorting Events as Likely or Unlikely',
                content: ''
            },
            {
                title: 'Place Value and Number Sense',
                content: ''
            },
          ]
        },
        {
          title: 'Concept',
          subItems: [
            {
              title: 'Numbers and Algebra',
              content: ''
            },
            {
              title: 'Geometry and Measurement',
              content: ''
            },
            {
              title: 'Statistics and Probability',
              content: ''
            }
          ]
        },
        {
          title: 'Foundation',
          subItems: [
            {
              title: 'Numbers and Algebra',
              content: ''
            },
            {
              title: 'Geometry and Measurement',
              content: ''
            },
            {
              title: 'Statistics and Probability',
              content: ''
            }
          ]
        }
      ],
    },

    {
      title: 'English',
      content: 'Content for Layer 1 - Item 1',
      subItems: [
        {
          title: 'Layer 2 - Item 1',
          content: 'Content for Layer 2 - Item 1',
          subItems: [
            {
              title: 'Layer 3 - Item 1',
              content: 'Content for Layer 3 - Item 1',
            },
            {
              title: 'Layer 3 - Item 2',
              content: 'Content for Layer 3 - Item 2',
            },
          ],
        },
        {
          title: 'Layer 2 - Item 2',
          content: 'Content for Layer 2 - Item 2',
        },
      ],
    }
  ];

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  return (
    <HomeLayout logOutHandler={clearCurrentUser}>
      <div className="syllabus">
        {syllabusData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            subItems={item.subItems}
            level={1} // Initial indentation level
          />
        ))}
      </div>
    </HomeLayout>
  );
};

export default Syllabus;
