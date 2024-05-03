import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const AssignmentContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const AssignmentHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AssignmentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AssignmentItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const SetAssignmentButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AssignmentSection = () => {
  // Sample assignment data
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Assignment 1', description: 'Write a short essay on a topic of your choice.', class: 'Class A', submissions: ['Student A', 'Student B'], marks: { 'Student A': 90, 'Student B': 85 } },
    { id: 2, title: 'Assignment 2', description: 'Solve the math problems attached.', class: 'Class B', submissions: ['Student C', 'Student D'], marks: { 'Student C': 80, 'Student D': 75 } }
  ]);

  const handleSetAssignment = () => {
    // Implement set assignment functionality here
    console.log('Setting assignment...');
  };

  const handleMarkAssignment = (id, student, marks) => {
    // Implement mark assignment functionality here
    console.log(`Marking assignment ${id} for ${student} with marks: ${marks}`);
  };

  return (
    <AssignmentContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AssignmentHeader>Assignments</AssignmentHeader>
        <SetAssignmentButton onClick={handleSetAssignment}>Set Assignment</SetAssignmentButton>
        <AssignmentList>
          {assignments.map((assignment) => (
            <AssignmentItem key={assignment.id}>
              <h3>{assignment.title}</h3>
              <p>{assignment.description}</p>
              <p>Class: {assignment.class}</p>
              <p>Submissions: {assignment.submissions.join(', ')}</p>
              <p>Marks:</p>
              <ul>
                {Object.entries(assignment.marks).map(([student, marks]) => (
                  <li key={student}>{student}: {marks}</li>
                ))}
              </ul>
              <button onClick={() => handleMarkAssignment(assignment.id, 'Student A', 95)}>Mark Assignment</button>
            </AssignmentItem>
          ))}
        </AssignmentList>
      </Content>
    </AssignmentContainer>
  );
};

export default AssignmentSection;
