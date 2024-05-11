// StudentSection.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { StudentsContainer, Content, StudentsContent, StudentsHeader, StudentList, StudentItem, AddStudentForm, AddStudentInput, 
  AddStudentButton } from '../../styles/StudentsStyles';

const StudentSection = () => {
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

  return (
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
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

export default StudentSection;
