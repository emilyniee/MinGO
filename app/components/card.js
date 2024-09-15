import pfp from "../images/anon.jpg"
import blankPfp from "../images/blank.jpg"
import Image from "next/image";
import MicIcon from '@mui/icons-material/Mic';

export function Users({ profilePic, initials }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="relative left-[82px] top-[139px] w-[343px] h-[159px] bg-[#E5FBEA] rounded-lg opacity-100">
        <div className="absolute top-[30px] left-[30px] flex items-center">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center">
            {profilePic ? (
              <Image
              src={pfp}
              alt="Profile"
              className="w-full h-full object-cover"
              width="100"
              height="100"
            />
            ) : (
              <Image
                src={blankPfp}
                alt="Profile"
                className="w-full h-full object-cover"
                width="100"
                height="100"
              />
            )}
          </div>
          <span className="ml-6 text-5xl font-bold text-black">{initials}</span>
          {/* <MicIcon className="ml-6 text-5xl font-bold text-black"/> */}
          <MicButton className="text-black"/>
        </div>
      </div>
    </div>
  );
}

export function UserMingo({ profilePic, initials, paragraphText, date }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="relative left-[82px] top-[139px] w-[448px] bg-[#E5FBEA] rounded-lg opacity-100">
        <div className="absolute top-[30px] left-[30px] flex flex-row items-center">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center">
            {profilePic ? (
              <Image
                src={pfp}
                alt="Profile"
                className="w-full h-full object-cover"
                width="100"
                height="100"
              />
            ) : (
              <Image
                src={blankPfp}
                alt="Profile"
                className="w-full h-full object-cover"
                width="100"
                height="100"
              />
            )}
          </div>
          <div className="relative left-[25px] ml-6 flex flex-col justify-between h-[90px]">
            <span className="text-6xl font-bold text-black">{initials}</span>
            <span className="text-xl font-bold text-black">"06/17/56</span>
          </div>
        </div>
        <div className="pt-[140px] pb-[140px] px-[30px] overflow-y-scroll">
          <p className="text-base text-black">{paragraphText}</p>
        </div>
      </div>
    </div>
  );
}
