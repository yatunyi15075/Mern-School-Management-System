import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const TeacherContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const TeacherHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TeacherList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TeacherItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TeacherName = styled.h3`
  margin-bottom: 5px;
`;

const TeacherDetails = styled.div`
  margin-bottom: 10px;
`;

const TeacherLabel = styled.span`
  font-weight: bold;
`;

const TeacherInfo = styled.span`
  margin-left: 5px;
`;

const TeacherSection = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Smith', subject: 'Mathematics', email: 'john.smith@example.com' },
    { id: 2, name: 'Alice Johnson', subject: 'Science', email: 'alice.johnson@example.com' },
    { id: 3, name: 'Emily Brown', subject: 'English', email: 'emily.brown@example.com' },
    // Add more teacher data as needed
  ]);

  return (
    <TeacherContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <TeacherHeader>Teacher List</TeacherHeader>
        <TeacherList>
          {teachers.map((teacher) => (
            <TeacherItem key={teacher.id}>
              <TeacherName>{teacher.name}</TeacherName>
              <TeacherDetails>
                <TeacherLabel>Subject:</TeacherLabel>
                <TeacherInfo>{teacher.subject}</TeacherInfo>
              </TeacherDetails>
              <TeacherDetails>
                <TeacherLabel>Email:</TeacherLabel>
                <TeacherInfo>{teacher.email}</TeacherInfo>
              </TeacherDetails>
            </TeacherItem>
          ))}
        </TeacherList>
      </Content>
    </TeacherContainer>
  );
};

export default TeacherSection;
