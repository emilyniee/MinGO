import {UserMingo} from "../components/card";

const FILLERTEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

export default function MingosPg() {
  return (
    <div className="grid grid-cols-4 gap-4 h-screen bg-green p-8 pt-20">
      <UserMingo 
        name="suzy" profilePic="https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg" initials="AB" paragraphText={FILLERTEXT} date="06/17/2024"/>
    </div>
  );
}
