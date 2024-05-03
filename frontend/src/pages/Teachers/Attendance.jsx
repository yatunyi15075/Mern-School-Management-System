import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

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

const AttendanceChartContainer = styled.div`
  margin-top: 20px;
`;

const data = [
  { name: 'Present', value: 20 },
  { name: 'Absent', value: 5 }
];

const COLORS = ['#0088FE', '#FF8042'];

const AttendanceSection = () => {
  const [attendance, setAttendance] = useState([
    { id: 1, student: 'Student A', present: true },
    { id: 2, student: 'Student B', present: false },
    { id: 3, student: 'Student C', present: true },
    { id: 4, student: 'Student D', present: true },
    { id: 5, student: 'Student E', present: false },
  ]);

  const handleMarkAttendance = (id, present) => {
    const updatedAttendance = attendance.map((student) =>
      student.id === id ? { ...student, present: present } : student
    );
    setAttendance(updatedAttendance);
  };

  return (
    <AttendanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AttendanceHeader>Attendance</AttendanceHeader>
        <AttendanceList>
          {attendance.map((student) => (
            <AttendanceItem key={student.id}>
              <h3>{student.student}</h3>
              <p>Present: {student.present ? 'Yes' : 'No'}</p>
              <button onClick={() => handleMarkAttendance(student.id, !student.present)}>
                {student.present ? 'Mark Absent' : 'Mark Present'}
              </button>
            </AttendanceItem>
          ))}
        </AttendanceList>
        <AttendanceChartContainer>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </AttendanceChartContainer>
      </Content>
    </AttendanceContainer>
  );
};

export default AttendanceSection;
