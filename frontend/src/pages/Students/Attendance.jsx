import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const AttendanceContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const AttendanceHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AttendanceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AttendanceItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const AttendanceDate = styled.span`
  font-weight: bold;
`;

const AttendanceStatus = styled.span`
  margin-left: 10px;
  color: ${({ present }) => (present ? 'green' : 'red')};
`;

const AttendanceSection = () => {
  // Sample attendance data
  const attendance = [
    { id: 1, date: '2024-05-01', present: true },
    { id: 2, date: '2024-05-02', present: false },
    { id: 3, date: '2024-05-03', present: true },
    { id: 4, date: '2024-05-04', present: true },
    { id: 5, date: '2024-05-05', present: true }
  ];

  return (
    <AttendanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AttendanceHeader>Attendance</AttendanceHeader>
        <AttendanceList>
          {attendance.map(({ id, date, present }) => (
            <AttendanceItem key={id}>
              <AttendanceDate>{date}</AttendanceDate>
              <AttendanceStatus present={present}>{present ? 'Present' : 'Absent'}</AttendanceStatus>
            </AttendanceItem>
          ))}
        </AttendanceList>
      </Content>
    </AttendanceContainer>
  );
};

export default AttendanceSection;
