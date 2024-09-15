import pfp from "../images/anon.jpg"
import blankPfp from "../images/blank.jpg"
import Image from "next/image";
import MicButton from "./MicButton";

export function Users({ profilePic, name }) {
  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-6 bg-lightGreen rounded-lg items-center p-4">
      {/* Profile Image */}
      <div className="row-span-2 col-span-2 flex justify-center items-center">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
            width="100"
            height="100"
          />
        </div>
      </div>

      {/* Initials */}
      <div className="col-span-2 row-span-1 flex items-center bg-green rounded-lg justify-center">
        <h1 className="text-xl font-bold text-black">{name}</h1>
      </div>

      {/* Mic Button */}
      <div className="col-span-2 row-span-1 flex  ">
        <MicButton fontSize="large" className="text-black" />
      </div>
    </div>
  );
}

export function UserMingo({ profilePic, name, paragraphText, date }) {
  return (
    <div class="grid grid-cols-3 gap-4 bg-lightGreen p-4 items-center">
      <div class="...">
        <Image
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
          width="100"
          height="100"
        />
      </div>

      <div class="...">
        <h1 className="text-xl font-bold text-black">{name}</h1>
        <h1 className="text-xl font-bold text-black">{date}</h1>
      </div>


      <div class="col-span-3 ...">
        <h1 className="text-black font-bold">About:</h1>
        <h4 className="text-black">{paragraphText}</h4>
      </div>
     
    </div>
  );
}
