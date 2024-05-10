import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import axios from 'axios';

const AnnouncementContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const AnnouncementForm = styled.form`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AnnouncementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AnnouncementItem = styled.li`
  margin-bottom: 10px;
`;

const AnnouncementContent = styled.p`
  font-size: 16px;
`;

const Announcement = () => {
  // State for managing announcement
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/announcements', {
        announcement: announcement, // Ensure that the key matches the backend model
      });
      console.log('Announcement sent:', response.data);
      // Clear the form
      setAnnouncement('');
      // Fetch announcements again to update the list
      fetchAnnouncements();
    } catch (error) {
      console.error('Error sending announcement:', error);
      setError('Error sending announcement');
    }
  };

  return (
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <Title>Announcement</Title>
        {/* Announcement Form */}
        <AnnouncementForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="announcement">Announcement:</Label>
            <TextArea
              id="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              required
              rows={4}
              cols={50}
            />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>

        {/* Display Announcements */}
        <h2>Announcements</h2>
        <AnnouncementList>
          {announcements.map((announcement) => (
            <AnnouncementItem key={announcement._id}>
              <AnnouncementContent>{announcement.announcement}</AnnouncementContent>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
