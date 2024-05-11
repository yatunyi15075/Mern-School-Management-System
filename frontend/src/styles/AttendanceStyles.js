// AttendanceStyles.js
import styled from 'styled-components';

export const AttendanceContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const AttendanceContent = styled.div`
  padding: 20px;
`;

export const AttendanceHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AttendanceList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AttendanceItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StudentName = styled.span`
  flex: 1;
`;

export const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

export const Divider = styled.hr`
  margin-top: 5px;
  border: 0;
  border-top: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const AttendanceDate = styled.span`
  font-weight: bold;
`;

export const AttendanceStatus = styled.span`
  margin-left: 10px;
  color: ${({ present }) => (present ? 'green' : 'red')};
`;
