import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { BsPlus } from 'react-icons/bs';

const EventContainer = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const EventHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EventItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const AddEventButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const AddEventText = styled.span`
  margin-left: 5px;
`;

const EventSection = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'School Fair', date: '2024-05-10' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-05-15' },
    { id: 3, title: 'Exam Week', date: '2024-05-20' },
  ]);

  const currentDate = new Date().toLocaleString();

  const handleAddEvent = () => {
    // Implement functionality to add a new event
  };

  return (
    <EventContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <EventHeader>School Events</EventHeader>
        <AddEventButton onClick={handleAddEvent}>
          <BsPlus />
          <AddEventText>Add Event</AddEventText>
        </AddEventButton>
        <EventList>
          {events.map((event) => (
            <EventItem key={event.id}>
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
            </EventItem>
          ))}
        </EventList>
        <p>Current Time: {currentDate}</p>
        {/* Add calendar component here */}
      </Content>
    </EventContainer>
  );
};

export default EventSection;
