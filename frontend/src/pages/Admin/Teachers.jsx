import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; // Import the Sidebar component

const TeachersContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const TeachersContent = styled.div`
  padding: 20px;
`;

const TeachersHeader = styled.h2`
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

const AddTeacherForm = styled.form`
  margin-bottom: 20px;
`;

const AddTeacherInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddTeacherButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState('');
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
  ]);

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (newTeacher.trim() !== '') {
      const newTeacherObject = {
        id: Math.floor(Math.random() * 1000), // Generate a random ID for the teacher
        name: newTeacher,
      };
      setTeachers([...teachers, newTeacherObject]);
      setNewTeacher('');
    }
  };

  return (
    <TeachersContainer>
      <Sidebar /> {/* Include the Sidebar component */}
      <Content>
        <TeachersContent>
          <TeachersHeader>Teachers</TeachersHeader>
          <AddTeacherForm onSubmit={handleAddTeacher}>
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher name"
              value={newTeacher}
              onChange={(e) => setNewTeacher(e.target.value)}
            />
            <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
          </AddTeacherForm>
          <TeacherList>
            {teachers.map((teacher) => (
              <TeacherItem key={teacher.id}>{teacher.name}</TeacherItem>
            ))}
          </TeacherList>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default Teachers;
