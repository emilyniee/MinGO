import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';

const events = [
  {
    title: "Voiceflow: Building AI Agents quickly with Voiceflow",
    company: "Voiceflow",
    date: "09/14/2024 @ 1:00 AM - 1:30 AM",
    location: "Workshop Room 3B",
    description: "In just 30 minutes, you'll set up your Voiceflow account, learn the basics of building AI agents, and dive into using our APIs to build anything. We'll show you how to unlock endless possibilities, from chatbots to advanced agents.",
    logo: "https://camo.githubusercontent.com/90290c16b19257f6988db6c3199a633ce05d5b7345ade6f263bbeb1779ec547e/68747470733a2f2f63646e2e766f696365666c6f772e636f6d2f6173736574732f6c6f676f2e706e67"
  },
  {
    title: "Mappedin: Make a Map, Build an App",
    company: "Mappedin",
    date: "09/14/2024 @ 2:00 AM - 2:30 AM",
    location: "Workshop Room 3B",
    description: "Join us for an interactive workshop where you will learn how to create your own map and deploy it in a local environment, all in just a few minutes. This hands-on session will provide you with the tools and knowledge needed to build and customize your maps using Mappedin’s powerful features.",
    logo: "https://www.firefighternation.com/wp-content/uploads/2022/04/mappedin.jpg"
  },
  {
    title: "Building a Fullstack Web App with Convex Backend Platform",
    company: "Convex",
    date: "09/14/2024 @ 12:00 AM - 12:30 AM",
    location: "Workshop Room 3A",
    description: "Through a demo app and hands-on exercises, you’ll learn how to write serverless functions to store & retrieve data in your Convex database and a front-end framework client library to connect your app’s UI to your Convex backend. By the end of the workshop, you’ll start prototyping your own app using Convex’s handy app templates (https://www.convex.dev/templates).", 
    logo: "https://cdn.sanity.io/images/o0o2tn5x/production/285d09c87a0afb46b81044a49932f14539eb4778-400x400.png"
  },
  {
    title: "Creation Lab: Kickstart Your Hackathon Idea",
    company: "Hack the North",
    date: "09/14/2024 @ 12:00 AM - 1:00 AM ",
    location: "Workshop Room 3B",
    description: "Creation Lab is an engaging workshop designed to help kickstart your hackathon journey. Whether you're new to hackathons or looking for inspiration, this session will help guide you through the creative process of brainstorming ideas using design thinking principles.",
    logo: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/008/880/datas/original.png"
  },
  {
    title: "RBC Avion Rewards – Making Your Point with Points",
    company: "RBC",
    date: "09/14/2024 @ 12:30 AM - 1:00 AM",
    location: "Workshop Room 5A",
    description: "Learn how to leverage RBC’s upcoming Developer Portal and APIs to create innovative solutions. We’ll guide you through the rewards business, showing you how to engage customers with offers, cashback, and points. This workshop will equip you with the skills to navigate and utilize our public-facing APIs, helping you excel in your challenge.",
    logo: "https://canadabusinesshub.com/wp-content/uploads/2020/09/rbc.jpg"
  }
];




export default function EventsPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-green p-8">
      <div className="w-full max-w-6xl pt-2">
        <Typography variant="h4" color="text.primary" align="center" gutterBottom>
          UPCOMING EVENTS
        </Typography>
        {/* Scrollable Container */}
        <div className="grid gap-4 overflow-y-scroll max-h-[75vh] p-4 bg-white rounded-lg shadow-md">
          {events.map((event, index) => (
            <Card key={index} sx={{ maxWidth: 1200, maxHeight: 200, borderRadius: 2 }}>
              <div className="grid grid-cols-6 gap-4 px-8">
                <div className="col-span-1">
                  <CardMedia
                    component="img"
                    sx={{ height: 200, width: 200, objectFit: "contain" }}
                    image={event.logo}
                    alt={event.title}
                  />
                </div>
                <div className="col-span-5 flex items-center">
                  <CardContent className="h-full">
                    <Typography variant="h6">{event.title}</Typography>
                    <Chip label={event.company} color="success" />
                    <Typography variant="body2" color="text.secondary">
                      Date: {event.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Location: {event.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.description}
                    </Typography>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
