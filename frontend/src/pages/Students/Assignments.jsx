import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const AssignmentsContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const AssignmentCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

const AssignmentTitle = styled.h3`
  margin-bottom: 10px;
`;

const AssignmentDescription = styled.p`
  color: #555;
  margin-bottom: 15px;
`;

const AssignmentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const AssignmentDoneMessage = styled.p`
  color: #28a745;
  font-weight: bold;
`;

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Assignment 1', description: 'Write a short essay on a topic of your choice.', done: false },
    { id: 2, title: 'Assignment 2', description: 'Solve the math problems attached.', done: false },
  ]);

  const handleDoAssignment = (id) => {
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === id ? { ...assignment, done: true } : assignment
    );
    setAssignments(updatedAssignments);
  };

  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id}>
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDescription>{assignment.description}</AssignmentDescription>
            {!assignment.done ? (
              <AssignmentForm onDoAssignment={() => handleDoAssignment(assignment.id)} />
            ) : (
              <AssignmentDoneMessage>Assignment Done</AssignmentDoneMessage>
            )}
          </AssignmentCard>
        ))}
      </Content>
    </AssignmentsContainer>
  );
};

const AssignmentForm = ({ onDoAssignment }) => {
  const [opinion, setOpinion] = useState('');

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== '') {
      onDoAssignment();
    } else {
      alert("Please provide your opinion/assignment.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={opinion} onChange={handleInputChange} placeholder="Enter your opinion/assignment..." />
      <AssignmentButton type="submit">Submit</AssignmentButton>
    </form>
  );
};

export default StudentAssignments;
