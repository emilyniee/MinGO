"use client";

import React, { useState } from "react";
import Link from 'next/link';

const MapPage = () => {
  const [room, setRoom] = useState("");  // State to handle the input value

  const leaders = [
    { name: "Bob Smith", points: "500" },
    { name: "Charlie Lee", points: "450" },
    { name: "Dana Williams", points: "400" },
    { name: "Evan Brown", points: "350" },
    { name: "Alice Johnson", points: "300" }
  ];

  const getMedalEmoji = (index) => {
    switch (index) {
      case 0:
        return '🥇'; 
      case 1:
        return '🥈'; 
      case 2:
        return '🥉'; 
      default:
        return '👎'; 
    }
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value); // Update room state
  };

  const handleRoomSubmit = () => {
    // Perform any action with the room entered, e.g., navigating to a room
    console.log(`Entered room: ${room}`);
  };

  return (
    <div
      className="flex items-start justify-between min-h-screen bg-green p-8 text-black"
      style={{ height: "100vh" }}
    >
      {/* Left Section: Dropdown for rooms and additional features */}
      <div className="w-1/4 bg-lightGreen p-4 rounded-lg self-center"> 

        {/* Enter Room Input */}
        <div className="mb-4">
          <input
            type="text"
            value={room}
            onChange={handleRoomChange}
            placeholder="Enter room"
            className="w-full p-2 bg-lightestGreen border-b-2 border-black rounded text-center mb-2"
            style={{ outline: 'none' }}
          />
          <Link href="/users">
          <button 
            onClick={handleRoomSubmit}
            className="w-full p-2 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 transition duration-150">
            Enter Room
          </button>
          </Link>
        </div>

        {/* View Minglers Button */}
        <Link href="/users">
          <button className="w-full p-2 bg-white border rounded mb-4 flex justify-between items-center">
            View Minglers! <img></img>
          </button>
        </Link>
    
        {/* Leaderboard */}
        <p> Enter a room and mingle to earn points! </p>
        <h2 className="text-lg font-bold mb-2">Leaderboard:</h2>
        <ul className="bg-white p-4 rounded-lg">
          {leaders.length > 0 ? (
            leaders.map((leader, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{index + 1}. </span>
                {leader.name} - {leader.points} points {getMedalEmoji(index)}
              </li>
            ))
          ) : (
            <p>Loading leaderboard...</p>
          )}
        </ul>
      </div>

      {/* Right Section: Mappedin iframe */}
      <div className="w-3/4 p-4 pt-12">
        <iframe
          src="https://app.mappedin.com/map/66e5a1d7af770b000b908059?embedded=true"
          title="Mappedin Map"
          name="Mappedin Map"
          allow="clipboard-write; web-share"
          scrolling="yes"
          width="95%"
          height="500"
          frameBorder="0"
          style={{ borderRadius: "12px", border: "0" }}
        ></iframe>
      </div>
    </div>
  );
};

export default MapPage;
