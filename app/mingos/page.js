// import {UserMingo} from "../components/card";

// const FILLERTEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

// export default function MingosPg() {
//   return (
//     <div className="grid grid-cols-4 gap-4 h-screen bg-green p-8 pt-20">
//       <UserMingo 
//         name="suzy" profilePic="https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg" initials="AB" paragraphText={FILLERTEXT} date="06/17/2024"/>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from 'react';
import { UserMingo } from '../components/card';
import users_data from '../users.json';



export default function MingosPg() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the users data from the public folder
    setUsers(users_data);
    console.log(users);
  }, []);

  // Filter users where `talkedTo` is `true`
  const filteredUsers = users.filter(user => user.talkedTo);
  console.log(filteredUsers);

  return (
    <div className="grid grid-cols-4 gap-4 h-screen bg-green p-8 pt-20 ">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user, index) => (
          <UserMingo
            // key={index}
            name={user.name}
            profilePic={user.profilePic}
            initials={user.name.split(" ").map(n => n[0]).join("")} // Example of generating initials
            paragraphText={user.conversationHad || FILLERTEXT} // Use the conversationHad field
            date={user.dateMet}
          />
        ))
      ) : (
        <p>GET TO IT...</p>
      )}
    </div>
  );
}

