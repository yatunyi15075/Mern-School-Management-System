import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; // Import the Sidebar component
import axios from 'axios';


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
  const [newStudent, setNewStudent] = useState({ name: '', registrationNumber: '', grade: '' });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/students/getall');
      setStudents(response.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (newStudent.name.trim() !== '' && newStudent.registrationNumber.trim() !== '' && newStudent.grade.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/students', newStudent);
        setStudents([...students, response.data.student]);
        setNewStudent({ name: '', registrationNumber: '', grade: '' });
      } catch (error) {
        console.error('Error adding student:', error);
      }
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
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <AddStudentInput
              type="text"
              placeholder="Enter registration number"
              value={newStudent.registrationNumber}
              onChange={(e) => setNewStudent({ ...newStudent, registrationNumber: e.target.value })}
            />
            <AddStudentInput
              type="text"
              placeholder="Enter grade"
              value={newStudent.grade}
              onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
            />
            <AddStudentButton type="submit">Add Student</AddStudentButton>
          </AddStudentForm>
          <StudentList>
            {students.map((student) => (
              <StudentItem key={student.id}>{student.name} - {student.registrationNumber} - {student.grade}</StudentItem>
            ))}
          </StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
