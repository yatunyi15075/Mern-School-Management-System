
import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; // Import the Sidebar component

const ExamContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

const Content = styled.div`
  flex: 1;
`;

const ExamContent = styled.div`
  padding: 20px;
`;

const ExamHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ExamList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExamItem = styled.li`
  margin-bottom: 10px;
`;

const Exam = () => {
  // Sample exam results data
  const examResults = [
    { id: 1, name: 'John Doe', subject: 'Math', score: 85 },
    { id: 2, name: 'Jane Smith', subject: 'Science', score: 75 },
    { id: 3, name: 'Michael Johnson', subject: 'English', score: 90 },
  ];

  return (
    <ExamContainer>
      <Sidebar /> {/* Include the Sidebar component */}
      <Content>
        <ExamContent>
          <ExamHeader>Exam Results</ExamHeader>
          <ExamList>
            {examResults.map((result) => (
              <ExamItem key={result.id}>
                {result.name} - {result.subject}: {result.score}
              </ExamItem>
            ))}
          </ExamList>
        </ExamContent>
      </Content>
    </ExamContainer>
  );
};

export default Exam;
