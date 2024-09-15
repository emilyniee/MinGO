"use client";

import React, { useState, useEffect, useRef } from 'react';
import {Users, UserMingo} from "../components/card";
import users_data from '../users.json';

export default function UserPg() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the users data from the public folder
    setUsers(users_data);
  }, []);


  const filteredUsers = users.filter(user => user.talkedTo);
  console.log(filteredUsers);

  return (
    <div className="h-screen pt-20 bg-green p-8">
      <h1 className="text-white text-xl">TOP MATCHES</h1>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {filteredUsers
          .filter(user => user.topMatch === true) // Use "topMatch" // Filter by topmatch
          .map((user, index) => (
            <Users
              key={index} // Unique key for each child in the list
              profilePic={user.profilePic} // Placeholder for profile picture
              name={user.name} // Pass the name to generate initials
              // Add other properties if needed
            />
          ))}
      </div>

      <h1 className="text-white text-xl">MINGOERS</h1>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {filteredUsers
          .filter(user => user.topMatch === false) // Use "topMatch" // Filter by topmatch
          .map((user, index) => (
            <Users
              key={index} // Unique key for each child in the list
              profilePic={user.profilePic} // Placeholder for profile picture
              name={user.name} // Pass the name to generate initials
              // Add other properties if needed
            />
          ))}
      </div>
    </div>
  );
}

