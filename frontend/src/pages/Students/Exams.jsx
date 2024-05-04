import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { Bar } from 'react-chartjs-2';

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

const ExamResultsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const ExamSubject = styled.h3`
  margin-bottom: 10px;
`;

const ExamResult = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

const ExamChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const ExamSection = () => {
  // Sample exam results data
  const examResultsData = {
    subjects: ['Math', 'Science', 'English', 'History'],
    results: [80, 75, 90, 85] // Sample results out of 100
  };

  // Bar chart data
  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: 'Exam Results',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1,
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#0056b3',
        data: examResultsData.results
      }
    ]
  };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {examResultsData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score: {examResultsData.results[index]}%</ExamResult>
            </div>
          ))}
          <ExamChartContainer>
            <Bar
              data={barChartData}
              options={{
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      max: 100
                    } 
                  }]
                }
              }}
            />
          </ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
};

export default ExamSection;
