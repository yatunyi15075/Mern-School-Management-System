import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { Line } from 'react-chartjs-2';

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

const PerformanceInfo = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const PerformanceGraphContainer = styled.div`
  margin-bottom: 20px;
`;

const TotalMarks = styled.div`
  font-weight: bold;
`;

const PerformanceSection = () => {
  // Sample performance data
  const performanceData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    marks: [80, 85, 90, 88, 92, 85], // Sample marks for each month
    totalMarks: 520 // Sample total marks for the year
  };

  // Line chart data
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: 'Performance Trends',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: performanceData.marks
      }
    ]
  };

  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line
              data={lineChartData}
              options={{
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }}
            />
          </PerformanceGraphContainer>
          <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  );
};

export default PerformanceSection;
