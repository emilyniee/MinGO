import {UserMingo} from "../components/card";

const FILLERTEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

export default function FriendsPg() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <UserMingo profilePic="./images/anon.jpg" initials="AB" paragraphText={FILLERTEXT} date="06/17/2024"/>
    </div>
  );
}
