// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import MicIcon from '@mui/icons-material/Mic';
// import { fetchCohereAPI } from '@/backend/cohere';
// import users from "../users.json";

// const MicButton = ({ name }) => {
//   const [isPressed, setIsPressed] = useState(false);
//   const [transcript, setTranscript] = useState(''); // Store the transcript state
//   const recognitionRef = useRef(null); // Ref for speech recognition
//   const [users, setUsers] = useState([]); // Assuming users is an array from state or props
//   const [result, setResult] = useState(null); // Store the result from Cohere API

//   useEffect(() => {
//     // Set up the speech recognition when component mounts
//     if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
//       recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//       recognitionRef.current.continuous = true;
//       recognitionRef.current.interimResults = false;
//       recognitionRef.current.lang = 'en-US';

//       recognitionRef.current.onresult = (event) => {
//         const transcriptResult = event.results[event.resultIndex][0].transcript;
//         setTranscript((prev) => prev + transcriptResult + ' '); // Append the transcript
//       };

//       recognitionRef.current.onerror = (event) => {
//         console.error('Speech recognition error:', event.error);
//       };
//     } else {
//       alert('Speech recognition is not supported in this browser.');
//     }
//   }, []);

//   const handleClick = () => {
//     setIsPressed(!isPressed); // Toggle between pressed and default states
//     if (!isPressed) {
//       // Start recognition if the button is pressed
//       recognitionRef.current.start();
//     } else {
//       // Stop recognition if the button is released
//       recognitionRef.current.stop();
//       console.log('Final Transcript:', transcript);

//       // Fetch Cohere API result with the transcript and speaker name
//       (async () => {
//         const cohereResult = await fetchCohereAPI(transcript, name.name);
//         setResult(cohereResult);
//         console.log(cohereResult.generations[0].text); // Use the result wherever needed

//         const speaker = users.find(user => user.name === name.name);
      
//         // Increment Charlie's points by 50
//         if (speaker) {
//           speaker.points += 50;
//           speaker.conversationHad = "testttt"
//           console.log(`Charlie's updated points: `);

//         }

//         fetch('/api/save', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(users), // Send the updated users array
//         })
//         .then(response => response.json())
//         .then(data => {
//           console.log('Success:', data);
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//       document.addEventListener("click", handleEvent)
//       return () => document.removeEventListener("click", handleEvent)
//       });

//     }
//   };


//   return (
//     <div className="flex flex-row items-center justify-center">
//       <MicIcon
//         onClick={handleClick}
//         className="text-black"
//         fontSize="large" 
//         style={{ color: isPressed ? 'black' : 'grey', cursor: 'pointer' }} // Change color based on isPressed
//       />
//       {isPressed && (
//         <div 
//           className={`rounded-md flex items-center bg-red-100 py-0.5 px-2.5 border border-transparent text-sm text-red-800 shadow-sm mt-0.5 ${
//             isPressed ? 'animate-glow' : ''}`} 
//           style={{ transform: 'scale(0.75)', transformOrigin: 'center' }} >
//           <div className="h-2 w-2 rounded-full bg-red-800 mr-2"></div>
//           Recording
//         </div>
//       )}
//     </div>
//   );
// };
// export default MicButton;

'use client';

import React, { useState, useEffect, useRef } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import { fetchCohereAPI } from '@/backend/cohere';
import users_data from '../users.json'

const MicButton = ({ name }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [transcript, setTranscript] = useState(''); // Store the transcript state
  const recognitionRef = useRef(null); // Ref for speech recognition
  const [users, setUsers] = useState([]); // Assuming users is an array from state or props
  const [result, setResult] = useState(null); // Store the result from Cohere API

  // Speech recognition setup
  useEffect(() => {
    setUsers(users_data);
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcriptResult = event.results[event.resultIndex][0].transcript;
        setTranscript((prev) => prev + transcriptResult + ' '); // Append the transcript
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
    } else {
      alert('Speech recognition is not supported in this browser.');
    }
  }, []);

  // Effect for handling when `result` changes
  useEffect(() => {
    if (result) {
      console.log("Cohere result received:", result);

      const speaker = users.find(user => user.name === name);
      if (speaker) {
        // Update the speaker's conversationHad field
        speaker.conversationHad = result.generations[0].text;
        speaker.points += 50;
        speaker.talkedTo = true;
        
        console.log("Speaker updated:", speaker);

        // Update users JSON after setting the speaker's conversation
        fetch('/api/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(users), // Send the updated users array
        })
          .then(response => response.json())
          .then(data => {
            console.log('Users JSON successfully updated:', data);
          })
          .catch((error) => {
            console.error('Error updating users JSON:', error);
          });
      } else {
        console.log('Speaker not found in the users array');
      }
    }
  }, [result, users, name]); // This effect runs when `result`, `users`, or `name` changes

  const handleClick = () => {
    setIsPressed(!isPressed); // Toggle between pressed and default states
    if (!isPressed) {
      // Start recognition if the button is pressed
      recognitionRef.current.start();
    } else {
      // Stop recognition if the button is released
      recognitionRef.current.stop();
      console.log('Final Transcript:', transcript);

      // Fetch Cohere API result with the transcript and speaker name
      (async () => {
        try {
          const cohereResult = await fetchCohereAPI(transcript, name);
          setResult(cohereResult); // This will trigger the effect for `result`
          console.log("Cohere API Result:", cohereResult.generations[0].text);
        } catch (error) {
          console.error("Error fetching Cohere API:", error);
        }
      })();
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <MicIcon
        onClick={handleClick}
        className="text-black"
        fontSize="large" 
        style={{ color: isPressed ? 'black' : 'grey', cursor: 'pointer' }} // Change color based on isPressed
      />
      {isPressed && (
        <div 
          className={`rounded-md flex items-center bg-red-100 py-0.5 px-2.5 border border-transparent text-sm text-red-800 shadow-sm mt-0.5 ${
            isPressed ? 'animate-glow' : ''}`} 
          style={{ transform: 'scale(0.75)', transformOrigin: 'center' }} >
          <div className="h-2 w-2 rounded-full bg-red-800 mr-2"></div>
          Recording
        </div>
      )}
    </div>
  );
};

export default MicButton;

