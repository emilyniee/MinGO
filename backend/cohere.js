// Define the async function and export it
export async function fetchCohereAPI(transcript, name) {
	const prompt = `summarize what i talked to name ${name} to in ONE to TWO sentences: ${transcript}`;
  
	const response = await fetch("https://api.cohere.com/v1/generate", {
	  method: "POST",
	  headers: {
		"Authorization": "Bearer XaoKXchtuyqlx18FzdYD26sglDeXp3YWBwqKnwmv",  // Update your token as needed
		"Content-Type": "application/json"
	  },
	  body: JSON.stringify({
		prompt: prompt,  // Use the dynamic prompt
		stream: false
	  }),
	});
  
	const body = await response.json();
	return body; // Return the result so it can be used elsewhere
  }
  
  // Example usage of the function in another part of the app
  // import { fetchCohereAPI } from './path-to-file'; // Import the function where needed
  
//   (async () => {
// 	const result = await fetchCohereAPI("Hi my name is Alex hi I'm Bob and I was wondering if there are any job openings for internships.");
// 	console.log(result); // Use the result wherever needed
//   })();
  