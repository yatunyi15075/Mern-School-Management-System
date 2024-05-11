// ExamStyles.js
import styled from 'styled-components';

export const ExamContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ExamHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ExamForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ExamResultsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const ExamSubject = styled.h3`
  margin-bottom: 10px;
`;

export const ExamResult = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

export const ExamChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
