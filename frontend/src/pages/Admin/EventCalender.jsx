import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const EventCalendarContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const CalendarContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const Events = styled.div`
  margin-top: 20px;
`;

const Event = styled.div`
  margin-bottom: 10px;
`;

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');

  // Function to add a new event
  const addEvent = () => {
    if (newEvent.trim() !== '') {
      setEvents([...events, newEvent]);
      setNewEvent('');
    }
  };

  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <h1>Events & Calendar</h1>
        {/* Current Time Display */}
        <div>Current Time: {new Date().toLocaleString()}</div>
        {/* Calendar */}
        <CalendarContainer>
          {/* Display Calendar Here */}
          {/* For example: <Calendar /> */}
          Calendar
        </CalendarContainer>
        {/* Add New Event */}
        <div>
          <h2>Add New Event</h2>
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter Event"
          />
          <button onClick={addEvent}>Add Event</button>
        </div>
        {/* List of Events */}
        <Events>
          <h2>Events</h2>
          {events.map((event, index) => (
            <Event key={index}>{event}</Event>
          ))}
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalendar;
