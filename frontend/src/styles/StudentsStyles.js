// StudentsStyles.js
import styled from 'styled-components';

export const StudentsContainer = styled.div`
  display: flex;
 
`;

export const Content = styled.div`
  flex: 1;
`;

export const StudentsContent = styled.div`
  padding: 20px;
`;

export const StudentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StudentItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AddStudentForm = styled.form`
  margin-bottom: 20px;
`;

export const AddStudentInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddStudentButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
