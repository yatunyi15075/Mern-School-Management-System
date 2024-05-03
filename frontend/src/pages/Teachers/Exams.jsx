import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const ExamContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const ExamHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ExamForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ExamSection = () => {
  const [examData, setExamData] = useState([]);
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [className, setClassName] = useState('');
  const [marks, setMarks] = useState('');

  const handleAddExam = (e) => {
    e.preventDefault();
    const newExam = { name, registrationNumber, className, marks: parseInt(marks) };
    setExamData([...examData, newExam]);
    setName('');
    setRegistrationNumber('');
    setClassName('');
    setMarks('');
  };

  const calculateTotalMarks = () => {
    let total = 0;
    for (let i = 0; i < examData.length; i++) {
      total += examData[i].marks;
    }
    return total;
  };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm onSubmit={handleAddExam}>
          <FormLabel>Name:</FormLabel>
          <FormInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormLabel>Registration Number:</FormLabel>
          <FormInput
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />
          <FormLabel>Class:</FormLabel>
          <FormInput
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
          <FormLabel>Marks:</FormLabel>
          <FormInput
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
          />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>
        <h2>Total Marks: {calculateTotalMarks()}</h2>
        <h3>Exam Details:</h3>
        <ul>
          {examData.map((exam, index) => (
            <li key={index}>
              Name: {exam.name}, Registration Number: {exam.registrationNumber}, Class: {exam.className}, Marks: {exam.marks}
            </li>
          ))}
        </ul>
      </Content>
    </ExamContainer>
  );
};

export default ExamSection;
