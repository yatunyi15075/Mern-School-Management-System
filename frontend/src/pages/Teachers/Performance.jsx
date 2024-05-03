import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { Bar } from 'react-chartjs-2';

const PerformanceContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const PerformanceHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ClassPerformance = styled.div`
  margin-bottom: 40px;
`;

const ClassTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const PerformanceGraph = styled.div`
  max-width: 800px;
`;

const PerformanceSection = () => {
  // Dummy data for performance
  const [classPerformances, setClassPerformances] = useState([
    { className: 'Class A', averageScore: 75 },
    { className: 'Class B', averageScore: 80 },
    { className: 'Class C', averageScore: 70 },
  ]);

  const classNames = classPerformances.map((classPerformance) => classPerformance.className);
  const averageScores = classPerformances.map((classPerformance) => classPerformance.averageScore);

  const data = {
    labels: classNames,
    datasets: [
      {
        label: 'Average Score',
        data: averageScores,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance Overview</PerformanceHeader>
        {classPerformances.map((classPerformance, index) => (
          <ClassPerformance key={index}>
            <ClassTitle>{classPerformance.className}</ClassTitle>
            <PerformanceGraph>
              <Bar
                data={data}
                options={{
                  scales: {
                    yAxes: [{ ticks: { beginAtZero: true } }],
                  },
                }}
              />
            </PerformanceGraph>
          </ClassPerformance>
        ))}
      </Content>
    </PerformanceContainer>
  );
};

export default PerformanceSection;
