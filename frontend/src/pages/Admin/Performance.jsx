import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; // Import the Sidebar component

const PerformanceContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

const Content = styled.div`
  flex: 1;
`;

const PerformanceContent = styled.div`
  padding: 20px;
`;

const PerformanceHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SchoolPerformance = styled.div`
  margin-bottom: 20px;
`;

const IndividualPerformance = styled.div``;

const Performance = () => {
  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };

  // Sample data for individual student performance
  const individualPerformanceData = [
    { id: 1, name: 'John Doe', score: 90 },
    { id: 2, name: 'Jane Smith', score: 85 },
    { id: 3, name: 'Michael Johnson', score: 92 },
  ];

  return (
    <PerformanceContainer>
      <Sidebar /> {/* Include the Sidebar component */}
      <Content>
        <PerformanceContent>
          <PerformanceHeader>School Performance</PerformanceHeader>
          <SchoolPerformance>
            <p>Average Score: {schoolPerformanceData.averageScore}</p>
            <p>Total Students: {schoolPerformanceData.totalStudents}</p>
          </SchoolPerformance>
          <PerformanceHeader>Individual Performance</PerformanceHeader>
          <IndividualPerformance>
            {individualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name}: {student.score}
              </p>
            ))}
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
};

export default Performance;
