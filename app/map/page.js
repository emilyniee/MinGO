import React from "react";

const MapPage = () => {
  const leaders = [
    { name: "Michelle", points: "500" },
    { name: "eteirj", points: "450" },
    { name: "Annrtea", points: "400" },
    { name: "eritj", points: "350" },
    { name: "wpoetk", points: "300" }
  ];

  const getMedalEmoji = (index) => {
    switch (index) {
      case 0:
        return '🥇'; 
      case 1:
        return '🥈'; 
      case 2:
        return '🥉'; 
      default:
        return '👎'; 
    }
  };

  return (
    <div
      className="flex items-start justify-between min-h-screen bg-orange p-8"
      style={{ height: "100vh" }}
    >
      {/* Left Section: Dropdown for rooms and additional features */}
      <div className="w-1/4 bg-lightGreen p-4 rounded-lg self-center"> 

        {/* New Button */}
        <button className="w-full p-2 bg-white border rounded mb-4 flex justify-between items-center">
          View Minglers! <img></img>
        </button>

        {/* Leaderboard */}
        <p> Enter a room and mingle to earn points! </p>
        <h2 className="text-lg font-bold mb-2">Leaderboard:</h2>
        <ul className="bg-white p-4 rounded-lg">
          {leaders.length > 0 ? (
            leaders.map((leader, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{index + 1}. </span>
                {leader.name} - {leader.points} points {getMedalEmoji(index)}
              </li>
            ))
          ) : (
            <p>Loading leaderboard...</p>
          )}
        </ul>
      </div>

      {/* Right Section: Mappedin iframe */}
      <div className="w-3/4 p-4">
        <iframe
          src="https://app.mappedin.com/map/66e5a1d7af770b000b908059?embedded=true"
          title="Mappedin Map"
          name="Mappedin Map"
          allow="clipboard-write; web-share"
          scrolling="yes"
          width="95%"
          height="500"
          frameBorder="0"
          style={{ borderRadius: "12px", border: "0" }}
        ></iframe>
      </div>
    </div>
  );
};

export default MapPage;
