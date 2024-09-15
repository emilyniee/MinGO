import Link from 'next/link';
import Image from 'next/image';
import pfp from '../app/images/pfp.jpeg';
import Navbar from './components/navbar.js';
import MicButton from './components/micButton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-green text-black p-16 min-h-screen" >
      <Navbar />
      
      <div className="flex-grow grid grid-rows-3 grid-flow-col gap-4 w-3/4 mt-8">
        <div className="row-span-4 bg-lightGreen p-8 rounded-lg text-center shadow-md flex flex-col justify-center items-center text-xl">
          <h1 className="">PROFILE</h1>
          <Image 
            src={pfp}
            alt="Profile Picture"
            width={150}    
            height={150}   
            className="rounded-full my-4 mx-auto" 
          />
          <h2>Name: John Doe</h2>
          <h2>Role: Software Dev</h2>
          <h2>School: UofW</h2>
        </div>

        {/* Code Input and Go to Event Button */}
        <div className="col-span-6 bg-lightGreen p-8 rounded-lg shadow-md text-xl">
          <input 
            type="text" 
            placeholder="enter code here:" 
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link href="/map" className='flex'>
            <button className="ml-auto text-green-700 text-black text-lg hover:bg-orange-600 transition duration-300">
              go to event
            </button>
          </Link>
        </div>

        {/* Events Buttons */}
        <div className="row-span-2 col-span-2 space-x-2 text-xl">
          <Link href="/sponsors">
            <button className="text-black py-3 px-6 rounded-lg text-orange-700 text-lg hover:bg-yellow-600 transition duration-300 bg-lightGreen shadow-md">
              Explore events
            </button> 
          </Link>
          <Link href="/sponsors">
            <button className="text-black py-3 px-6 rounded-lg text-orange-700 text-lg hover:bg-yellow-600 transition duration-300 bg-lightGreen shadow-md">
              View your mingos
            </button> 
          </Link>
        </div>
      </div>
    </div>
  );
}
