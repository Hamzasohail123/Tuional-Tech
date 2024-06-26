import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaLightbulb, FaUserFriends, FaHandsHelping } from 'react-icons/fa';
import { GiTeamIdea, GiAchievement } from 'react-icons/gi';

const cardData = [
  {
    id: 1,
    icon: <AiFillHeart className="mx-[0px] text-4xl text-[#41d2f7]" />,
    title: "Succeed Together",
    description: "We build on each other's strengths to make every project awesome",
  },
  {
    id: 2,
    icon: <FaLightbulb className="mx-[0px] text-4xl text-[#41d2f7]" />,
    title: "Innovate",
    description: "We encourage creativity and innovation to stay ahead",
  },
  {
    id: 3,
    icon: <FaUserFriends className="mx-[0px] text-4xl text-[#41d2f7]" />,
    title: "Customer Focus",
    description: "Our customers are at the center of everything we do",
  },
  {
    id: 4,
    icon: <FaHandsHelping className="mx-[0px] text-4xl text-[#41d2f7]" />,
    title: "Integrity",
    description: "We act with integrity and honesty in all we do",
  },
  {
    id: 5,
    icon: <GiTeamIdea className="mx-[0px] text-4xl text-[#41d2f7]" />,
    title: "Team Work",
    description: "Teamwork makes the dream work",
  },
  {
    id: 6,
    icon: <GiAchievement className="mx-[0px] text-4xl text-[#41d2f7]" />,
    title: "Passion",
    description: "We are passionate about what we do",
  },
];

const TeamValues = () => {

  const gradientStyle = {
    background: 'linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(116, 203, 254,1) 100%)',
    // height: '100vh', 
    // width: '100%' 
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pb-10 bg-[#D3EFFF]" >
      <div className="mb-16 mt-10 text-2xl md:text-4xl font-bold">Our Team Values</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-[4rem]">
        {cardData.map(card => (
          <div key={card.id} className="bg-[#F2FAFF] p-10 lg:px-24 rounded-lg shadow-lg max-w-sm text-center">
            <div className="mb-4 p-4 bg-white flex items-center justify-center rounded-full shadow-lg ">
              {card.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2 ">{card.title}</h2>
            <p className="text-gray-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamValues;
