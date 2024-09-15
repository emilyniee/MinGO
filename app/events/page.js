import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';

const events = [
  {
    title: "Tech Conference 2024",
    company: "Tech Innovators",
    date: "10/01/2024",
    location: "San Francisco, CA",
    description: "Join us for a day of tech talks, networking, and hands-on workshops. Explore the latest in tech innovations and meet industry leaders.",
    logo: "https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg"
  },
  {
    title: "Startup Summit",
    company: "Startup Hub",
    date: "11/15/2024",
    location: "New York, NY",
    description: "A gathering of startup enthusiasts and founders. Attend workshops, pitch sessions, and networking events.",
    logo: "https://static.vecteezy.com/system/resources/previews/009/749/645/non_2x/teacher-avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg"
  },
  // Add more events as needed
];

export default function EventsPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-6xl">
        <Typography variant="h4" color="text.primary" align="center" gutterBottom>
          Upcoming Events
        </Typography>
        <div className="grid gap-4">
          {events.map((event, index) => (
            <Card key={index} sx={{ maxWidth: 1200, maxHeight: 200, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="20"
                image={event.logo}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Chip label={event.company} color="primary" />
                <Typography variant="body2" color="text.secondary">
                  Date: {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {event.location}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
