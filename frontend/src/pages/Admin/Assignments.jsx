import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'; // Import the Sidebar component

const AssignmentsContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const AssignmentsContent = styled.div`
  padding: 20px;
`;

const AssignmentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AssignmentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AssignmentItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AddAssignmentForm = styled.form`
  margin-bottom: 20px;
`;

const AddAssignmentInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddAssignmentButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Assignments = () => {
  const [newAssignment, setNewAssignment] = useState('');
  const [assignments, setAssignments] = useState([
    { id: 1, className: 'Class A', assignment: 'Assignment 1' },
    { id: 2, className: 'Class B', assignment: 'Assignment 2' },
    { id: 3, className: 'Class C', assignment: 'Assignment 3' },
  ]);

  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (newAssignment.trim() !== '') {
      // For demonstration purposes, let's assume the assignment is added to all classes
      const newAssignments = classes.map((classItem) => ({
        id: Math.floor(Math.random() * 1000), // Generate a random ID for the assignment
        className: classItem,
        assignment: newAssignment,
      }));
      setAssignments([...assignments, ...newAssignments]);
      setNewAssignment('');
    }
  };

  return (
    <AssignmentsContainer>
      <Sidebar /> {/* Include the Sidebar component */}
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment"
              value={newAssignment}
              onChange={(e) => setNewAssignment(e.target.value)}
            />
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            {assignments.map((assignment) => (
              <AssignmentItem key={assignment.id}>
                <strong>{assignment.className}: </strong>
                {assignment.assignment}
              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default Assignments;
