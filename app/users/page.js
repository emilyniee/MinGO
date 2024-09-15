import {Users, UserMingo} from "../components/card";

const minglers = [
  {
    name: "Alice Johnson",
    pronouns: "she/her",
    profilePic:"https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg",
    dateMet: "09/08/2010",
    conversationHad: "Discussed career goals and shared thoughts on software development trends.",
    about: "Alice is a software engineer specializing in frontend technologies. She's passionate about UI/UX design and accessibility.",
    linkedin: "https://www.linkedin.com/in/alicejohnson",
    currentRoom: "Apple",
    topMatch: false
  },
  {
    name: "Bob Smith",
    pronouns: "he/him",
    profilePic:"https://static.vecteezy.com/system/resources/previews/009/749/645/non_2x/teacher-avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg",
    dateMet: "05/14/2015",
    conversationHad: "Talked about DevOps practices and automation in cloud environments.",
    about: "Bob is a DevOps engineer with a deep knowledge of cloud infrastructure and continuous integration pipelines.",
    linkedin: "https://www.linkedin.com/in/bobsmith",
    currentRoom: "Apple",
    topMatch: true
  },
  {
    name: "Charlie Lee",
    pronouns: "they/them",
    profilePic:"https://static.vecteezy.com/system/resources/previews/009/749/886/non_2x/father-avatar-icon-cartoon-male-guy-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg",
    dateMet: "03/22/2018",
    conversationHad: "Explored ideas on data science and its applications in business analytics.",
    about: "Charlie is a data scientist with experience in machine learning and statistical analysis. They love working with big data and AI solutions.",
    linkedin: "https://www.linkedin.com/in/charlielee",
    currentRoom: "Apple",
    topMatch: false
  },
  {
    name: "Dana Williams",
    pronouns: "she/her",
    profilePic:"https://static.vecteezy.com/system/resources/previews/004/439/691/non_2x/avatar-doodle-profile-girl-character-vector.jpg",
    dateMet: "12/11/2020",
    conversationHad: "Chatted about the importance of cybersecurity in modern applications.",
    about: "Dana is a cybersecurity expert focused on building secure applications and ensuring data protection for organizations.",
    linkedin: "https://www.linkedin.com/in/danawilliams",
    currentRoom: "Apple",
    topMatch: false
  },
  {
    name: "Evan Brown",
    pronouns: "he/him",
    profilePic:"https://static.vecteezy.com/system/resources/previews/043/050/361/non_2x/man-with-glasses-cartoon-style-profile-avatar-picture-vector.jpg",
    dateMet: "07/06/2021",
    conversationHad: "Spoke about entrepreneurship and how to scale startups in the tech industry.",
    about: "Evan is an entrepreneur and startup founder with a background in mobile app development. He's passionate about innovation and growth.",
    linkedin: "https://www.linkedin.com/in/evanbrown",
    currentRoom: "Apple",
    topMatch: true
  },
  {
    name: "Evan Brown",
    pronouns: "he/him",
    profilePic:"https://static.vecteezy.com/system/resources/previews/043/050/361/non_2x/man-with-glasses-cartoon-style-profile-avatar-picture-vector.jpg",
    dateMet: "07/06/2021",
    conversationHad: "Spoke about entrepreneurship and how to scale startups in the tech industry.",
    about: "Evan is an entrepreneur and startup founder with a background in mobile app development. He's passionate about innovation and growth.",
    linkedin: "https://www.linkedin.com/in/evanbrown",
    currentRoom: "Apple",
    topMatch: false
  },
];


export default function UserPg() {
  return (
    <div className="h-screen pt-20 bg-green p-8">
      <h1 className="text-white text-xl">TOP MATCHES</h1>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {minglers
          .filter(mingler => mingler.topMatch === true) // Use "topMatch" // Filter by topmatch
          .map((mingler, index) => (
            <Users
              key={index} // Unique key for each child in the list
              profilePic={mingler.profilePic} // Placeholder for profile picture
              name={mingler.name} // Pass the name to generate initials
              // Add other properties if needed
            />
          ))}
      </div>

      <h1 className="text-white text-xl">MINGOERS</h1>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {minglers
          .filter(mingler => mingler.topMatch === false) // Use "topMatch" // Filter by topmatch
          .map((mingler, index) => (
            <Users
              key={index} // Unique key for each child in the list
              profilePic={mingler.profilePic} // Placeholder for profile picture
              name={mingler.name} // Pass the name to generate initials
              // Add other properties if needed
            />
          ))}
      </div>
    </div>
  );
}

