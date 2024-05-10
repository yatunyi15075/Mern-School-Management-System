import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const AnnouncementContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const AnnouncementHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AnnouncementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AnnouncementItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const AddAnnouncementButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckAnnouncementSection = () => {
  // Sample announcement data
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Important Announcement', message: 'This is an important announcement from the administration.' },
    { id: 2, title: 'Class Announcement', message: 'Reminder: Tomorrow is the deadline for the assignment.' }
  ]);

  const handleAddAnnouncement = () => {
    // Implement add announcement functionality here
    console.log('Adding announcement...');
  };

  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AnnouncementHeader>Announcements</AnnouncementHeader>
        <AddAnnouncementButton onClick={handleAddAnnouncement}>Add Announcement</AddAnnouncementButton>
        <AnnouncementList>
          {announcements.map((announcement) => (
            <AnnouncementItem key={announcement.id}>
              <h3>{announcement.title}</h3>
              <p>{announcement.message}</p>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default CheckAnnouncementSection;
