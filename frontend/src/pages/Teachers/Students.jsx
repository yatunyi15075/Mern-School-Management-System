import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const StudentContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const StudentHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StudentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StudentItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StudentName = styled.h3`
  margin-bottom: 5px;
`;

const StudentDetails = styled.div`
  margin-bottom: 10px;
`;

const StudentLabel = styled.span`
  font-weight: bold;
`;

const StudentInfo = styled.span`
  margin-left: 5px;
`;

const StudentSection = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', class: 'Class A', rollNumber: 'A001' },
    { id: 2, name: 'Jane Smith', class: 'Class B', rollNumber: 'B002' },
    { id: 3, name: 'Alice Johnson', class: 'Class C', rollNumber: 'C003' },
    // Add more student data as needed
  ]);

  return (
    <StudentContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <StudentHeader>Student List</StudentHeader>
        <StudentList>
          {students.map((student) => (
            <StudentItem key={student.id}>
              <StudentName>{student.name}</StudentName>
              <StudentDetails>
                <StudentLabel>Class:</StudentLabel>
                <StudentInfo>{student.class}</StudentInfo>
              </StudentDetails>
              <StudentDetails>
                <StudentLabel>Roll Number:</StudentLabel>
                <StudentInfo>{student.rollNumber}</StudentInfo>
              </StudentDetails>
            </StudentItem>
          ))}
        </StudentList>
      </Content>
    </StudentContainer>
  );
};

export default StudentSection;
