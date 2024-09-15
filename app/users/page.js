import {Users, UserMingo} from "../components/card";

export default function UserPg() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Users profilePic="./images/anon.jpg" initials="AB" />
    </div>
  );
}
