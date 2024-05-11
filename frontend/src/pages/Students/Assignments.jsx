// StudentAssignments.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentButton,
  AssignmentDoneMessage,
} from '../../styles/AssignmentsStyles'; // Import styled components from AssignmentStyles.js

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/assignments/getall');
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleDoAssignment = (id) => {
    // Implement your logic for handling assignment submission
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
