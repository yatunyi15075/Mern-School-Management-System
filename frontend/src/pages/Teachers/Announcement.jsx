// CheckAnnouncementSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { AnnouncementContainer, Content, Title, AnnouncementForm, FormGroup, Label, TextArea, Button, AnnouncementList, AnnouncementItem, 
  AnnouncementContent } from '../../styles/AnnouncementStyles';

const CheckAnnouncementSection = () => {
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

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
        announcement: announcement,
      });
      console.log('Announcement sent:', response.data);
      setAnnouncement('');
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

export default CheckAnnouncementSection;
