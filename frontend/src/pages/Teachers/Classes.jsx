import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const ClassContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const ClassHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ClassList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ClassItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const ClassLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`;

const StudentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StudentItem = styled.li`
  margin-top: 10px;
`;

const ClassSection = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: 'Class A', students: ['Student 1', 'Student 2', 'Student 3'] },
    { id: 2, name: 'Class B', students: ['Student 4', 'Student 5', 'Student 6'] },
    { id: 3, name: 'Class C', students: ['Student 7', 'Student 8', 'Student 9'] },
  ]);

  return (
    <ClassContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ClassHeader>Classes</ClassHeader>
        <ClassList>
          {classes.map((classItem) => (
            <ClassItem key={classItem.id}>
              <ClassLink to={`/classes/${classItem.id}`}>
                <h3>{classItem.name}</h3>
              </ClassLink>
              <StudentList>
                {classItem.students.map((student, index) => (
                  <StudentItem key={index}>{student}</StudentItem>
                ))}
              </StudentList>
            </ClassItem>
          ))}
        </ClassList>
      </Content>
    </ClassContainer>
  );
};

export default ClassSection;
