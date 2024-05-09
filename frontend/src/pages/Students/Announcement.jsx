import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import axios from 'axios';

const AnnouncementContainer = styled.div`
  display: flex;
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

const AnnouncementTitle = styled.h3`
  margin-bottom: 10px;
`;

const AnnouncementContent = styled.p`
  color: #555;
`;

const AnnouncementSection = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AnnouncementHeader>Announcements</AnnouncementHeader>
        <AnnouncementList>
          {announcements.map((announcement) => (
            <AnnouncementItem key={announcement._id}>
              <AnnouncementTitle>{announcement.announcement}</AnnouncementTitle>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default AnnouncementSection;
