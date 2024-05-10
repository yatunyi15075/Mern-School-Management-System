import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const AnnouncementContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Announcement = () => {
  // State for managing announcement
  const [announcement, setAnnouncement] = useState('');
  const [sendToTeachers, setSendToTeachers] = useState(false);
  const [sendToStudents, setSendToStudents] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to send announcement based on selections
    console.log('Announcement:', announcement);
    console.log('Send to Teachers:', sendToTeachers);
    console.log('Send to Students:', sendToStudents);
    // Clear the form
    setAnnouncement('');
    setSendToTeachers(false);
    setSendToStudents(false);
  };

  return (
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <h1>Announcement</h1>
        {/* Announcement Form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="announcement">Announcement:</label>
          <textarea
            id="announcement"
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            required
            rows={4}
            cols={50}
          />
          <div>
            <input
              type="checkbox"
              id="teachers"
              checked={sendToTeachers}
              onChange={(e) => setSendToTeachers(e.target.checked)}
            />
            <label htmlFor="teachers">Send to Teachers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="students"
              checked={sendToStudents}
              onChange={(e) => setSendToStudents(e.target.checked)}
            />
            <label htmlFor="students">Send to Students</label>
          </div>
          <button type="submit">Send Announcement</button>
        </form>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
