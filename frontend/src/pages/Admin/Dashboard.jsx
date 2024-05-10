import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const AdminDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '80px')}; /* Adjust margin based on sidebar state */
  transition: margin-left 0.3s ease;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333; /* Darker text color */
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px); /* Add a slight lift effect on hover */
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #007bff; /* Blue title color */
`;

const CardContent = styled.p`
  font-size: 16px;
  color: #555555;
`;

const AdminDashboard = () => {

    const isOpen = true; // Pass the sidebar state here
  
  return (
    <AdminDashboardContainer>
      <Sidebar />
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Total Students</CardTitle>
              <CardContent>500</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Teachers</CardTitle>
              <CardContent>50</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Classes</CardTitle>
              <CardContent>50</CardContent>
            </Card>
          </CardContainer>
        </Section>

        <Section>
          <SectionTitle>Recent Activity</SectionTitle>
          {/* Add a list of recent activity items */}
        </Section>

        <Section>
          <SectionTitle>Upcoming Events</SectionTitle>
          {/* Add a calendar or list of upcoming events */}
        </Section>

        {/* Add more sections for other parts of the admin dashboard */}
      </Content>
    </AdminDashboardContainer>
  );
};


export default AdminDashboard;
