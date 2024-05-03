import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; // Import the Sidebar component

const StudentsContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const StudentsContent = styled.div`
  padding: 20px;
`;

const StudentsHeader = styled.h2`
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

const AddStudentForm = styled.form`
  margin-bottom: 20px;
`;

const AddStudentInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddStudentButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Students = () => {
  const [newStudent, setNewStudent] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
  ]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.trim() !== '') {
      const newStudentObject = {
        id: Math.floor(Math.random() * 1000), // Generate a random ID for the student
        name: newStudent,
      };
      setStudents([...students, newStudentObject]);
      setNewStudent('');
    }
  };

  return (
    <StudentsContainer>
      <Sidebar /> {/* Include the Sidebar component */}
      <Content>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
          <AddStudentForm onSubmit={handleAddStudent}>
            <AddStudentInput
              type="text"
              placeholder="Enter student name"
              value={newStudent}
              onChange={(e) => setNewStudent(e.target.value)}
            />
            <AddStudentButton type="submit">Add Student</AddStudentButton>
          </AddStudentForm>
          <StudentList>
            {students.map((student) => (
              <StudentItem key={student.id}>{student.name}</StudentItem>
            ))}
          </StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
