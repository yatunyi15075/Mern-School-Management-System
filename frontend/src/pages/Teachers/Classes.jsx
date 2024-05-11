// ClassSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { ClassContainer, SidebarContainer, Content, ClassHeader, ClassList, ClassItem } 
from '../../styles/ClassesStyles'; 


const ClassSection = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/class/getall');
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error('Error fetching classes: Invalid data format', response.data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    }
  };

  return (
    <ClassContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ClassHeader>Classes</ClassHeader>
        <ClassList>
          {classes.map((classItem, index) => (
            <ClassItem key={index}>
              <h3>{classItem.grade}</h3>
            </ClassItem>
          ))}
        </ClassList>
      </Content>
    </ClassContainer>
  );
};

export default ClassSection;
