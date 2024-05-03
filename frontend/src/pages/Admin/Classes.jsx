import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; // Import the Sidebar component

const ClassesContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const ClassesContent = styled.div`
  padding: 20px;
`;

const ClassesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ClassList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ClassItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AddClassForm = styled.form`
  margin-bottom: 20px;
`;

const AddClassInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddClassButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Classes = () => {
  const [newClassName, setNewClassName] = useState('');
  const [classes, setClasses] = useState(['Class A', 'Class B', 'Class C']);

  const handleAddClass = (e) => {
    e.preventDefault();
    if (newClassName.trim() !== '') {
      setClasses([...classes, newClassName]);
      setNewClassName('');
    }
  };

  return (
    <ClassesContainer>
      <Sidebar /> {/* Include the Sidebar component */}
      <Content>
        <ClassesContent>
          <ClassesHeader>Classes</ClassesHeader>
          <AddClassForm onSubmit={handleAddClass}>
            <AddClassInput
              type="text"
              placeholder="Enter class name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
            {classes.map((className, index) => (
              <ClassItem key={index}>{className}</ClassItem>
            ))}
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
};

export default Classes;
