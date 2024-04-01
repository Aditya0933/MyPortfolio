import Project1A from "../assets/IMG/AboutMeBG.jpg";
import Project1B from "../assets/IMG/AboutMeBackground.jpg";
import Project1C from "../assets/IMG/AboutSection.png";

import Project2A from "../assets/IMG/AboutMeBG.jpg";
import Project2B from "../assets/IMG/AboutMeBackground.jpg";
import Project2C from "../assets/IMG/AboutSection.png";

import Project3A from "../assets/IMG/AboutMeBG.jpg";
import Project3B from "../assets/IMG/AboutMeBackground.jpg";
import Project3C from "../assets/IMG/AboutSection.png";

import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";

const Projects = () => {
  /* For 1st Project  */
  const ProImgCon1 = [
    { url: Project1A, tag: "First" },
    { url: Project1B, tag: "second" },
    { url: Project1C, tag: "third" },
  ];

  const [Count1, setCount1] = useState(0);
  const ArrowFunClicked1 = () => {
    setCount1(Count1 + 1);
    if (Count1 === ProImgCon1.length - 1) {
      setCount1(0);
    }
  };

  /* For 2nd Project */
  const ProImgCon2 = [
    { url: Project2A, tag: "First" },
    { url: Project2B, tag: "second" },
    { url: Project2C, tag: "third" },
  ];

  const [Count2, setCount2] = useState(0);
  const ArrowFunClicked2 = () => {
    setCount2(Count2 + 1);
    if (Count2 === ProImgCon2.length - 1) {
      setCount2(0);
    }
  };
  /* For 3nd Project */
  const ProImgCon3 = [
    { url: Project3A, tag: "First" },
    { url: Project3B, tag: "second" },
    { url: Project3C, tag: "third" },
  ];

  const [Count3, setCount3] = useState(0);
  const ArrowFunClicked3 = () => {
    setCount3(Count3 + 1);
    if (Count3 === ProImgCon3.length - 1) {
      setCount3(0);
    }
  };

  return (
    <div
      id="project"
      className="sm:px-[8%] px-[5%] py-[5%] bg-black text-orange-100"
    >
      <h1 className="pb-2 sm:pb-4 text-center text-4xl font-extrabold font-serif relative after:content-[''] after:h-[6px] sm:after:w-[100px] after:absolute after:bg-slate-50 after:mt-4 after:ml-[20px] after:rounded-tr-[90px] after:rounded-br-[90px] before:h-[6px] sm:before:w-[100px] before:absolute before:bg-slate-50 before:mt-4 before:-ml-[120px] before:rounded-tr-[90px] before:rounded-br-[90px] text-orange-500">
        My Projects
      </h1>
      <p className="m-auto text-[14px] sm:text-[16px] text-center w-[100%] sm:w-[80%] pb-4 sm:pb-12">
        Check out my frontend projects! They're all about creating cool and
        easy-to-use websites and apps. Dive in to see how I make things look
        good and work smoothly on the web. With a focus on clean design,
        intuitive navigation, and seamless user experiences, my projects aim to
        leave a lasting impression on visitors and users alike.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-black text-white mb-4">
        <div className="flex justify-center flex-col mt-[10px] sm:pr-[20px]">
          <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-orange-300 before:h-[2px] before:w-[50px] before:absolute hover:text-orange-300 hover:cursor-pointer before:bg-orange-500 before:mt-10 before:rounded-tr-[90px] before:rounded-br-[90px]">
            NETFLIX GPT
          </h2>
          <ul>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              1. This is a frontend-focused web application using HTML, CSS,
              Tailwind, JavaScript, React, and Redux.
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              2. Integrated Firebase for real-time updates and data management
              without the need for a backend server.
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              3. Leveraged TMDB's API for comprehensive movie information and
              OpenAI's API for a unique "GPT Search" feature.
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              4. Designed a responsive and user-friendly interface using
              Tailwind CSS for consistency across devices.
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              5. Deployed on Netlify, ensuring smooth hosting, scalability.
            </li>
          </ul>
          <div className="mt-3 sm:mt-6">
            <a href="https://lively-mooncake-88c2cf.netlify.app">
              <button className="mr-6 px-4 py-2 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 font-semibold hover:text-black">
                Live Link
              </button>
            </a>
            <button className="px-4 py-2 border border-orange-500 rounded-md text-black bg-orange-500 hover:bg-black transition duration-500 font-semibold hover:text-orange-400">
              <a href="https://github.com/Aditya0933/NetflixGPT3.0">
                View Code
              </a>
            </button>
          </div>
        </div>
        <div className="h-[300px] w-[300px] bg-slate-200 m-auto relative">
          <img
            className="p-[5%] h-full w-full bg-black"
            src={ProImgCon1[Count1].url}
          ></img>
          <IoIosArrowForward
            className="h-8 w-8 absolute -right-[20px] top-[45%] hover:cursor-pointer"
            onClick={ArrowFunClicked1}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-black text-white mb-4">
        <div className="flex justify-center flex-col mt-[10px] sm:pr-[20px]">
          <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-orange-300 before:h-[2px] before:w-[50px] before:absolute hover:text-orange-300 hover:cursor-pointer before:bg-orange-500 before:mt-10 before:rounded-tr-[90px] before:rounded-br-[90px]">
            STRAY TO STAY
          </h2>
          <ul>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              1. This application gives guidelines for caring for the pets, the
              adoption procedure of a pet, and volunteering towards the pets.
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              2. Module Description — The project is divided into different
              modules: Login Page/Sign Up , Image feed ,Project SOS , About us .
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              3. Software Requirements Operating System : Windows 7 and above
              Front End: HTML 5, CSS 3, JavaScript React JS Back End:
              JavaScript, Node.js, MongoDB, Mongoose.
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              4. I'm currently working on this project with 2 team member to
              design a new website for my College Major project.
            </li>
          </ul>
          <div className="mt-3 sm:mt-6">
            <button className="mr-6 px-4 py-2 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 font-semibold hover:text-black">
              Live Link
            </button>
            <button className="px-4 py-2 border border-orange-500 rounded-md text-black bg-orange-500 hover:bg-black transition duration-500 font-semibold hover:text-orange-400">
              <a href="https://github.com/Aditya0933/StarytoStayProjectUpdated">
                View Code
              </a>
            </button>
          </div>
        </div>
        <div className="h-[300px] w-[300px] bg-slate-200 m-auto relative">
          <img
            className="p-[5%] h-full w-full bg-black"
            src={ProImgCon2[Count2].url}
          ></img>
          <IoIosArrowForward
            className="h-8 w-8 absolute -right-[20px] top-[45%] hover:cursor-pointer"
            onClick={ArrowFunClicked2}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-black text-white mb-4">
        <div className="flex justify-center flex-col mt-[10px] sm:pr-[20px]">
          <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-orange-300 before:h-[2px] before:w-[50px] before:absolute hover:text-orange-300 hover:cursor-pointer before:bg-orange-500 before:mt-10 before:rounded-tr-[90px] before:rounded-br-[90px]-">
            THE MEMORY GAME
          </h2>
          <ul>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              1. Developed using HTML , CSS and JAVASCRIPT.
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              2. Used CSS to style the webpage and JavaScript to make the page
              responsive.
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              3. Game contains different card with different images.
            </li>
            <li className="mb-1 font-medium text-pretty text-[14px] sm:text-[16px] hover:text-orange-300 cursor-zoom-in">
              4. Player's time of matching and moves displayed over the timer.
            </li>
          </ul>
          <div className="mt-3 sm:mt-6">
            <a href="https://aditya0933.github.io/MemoryGameUpdated/">
              <button className="mr-6 px-4 py-2 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 font-semibold hover:text-black">
                Live Link
              </button>
            </a>
            <button className="px-4 py-2 border border-orange-500 rounded-md text-black bg-orange-500 hover:bg-black transition duration-500 font-semibold hover:text-orange-400">
              <a href="https://github.com/Aditya0933/MemoryGameUpdated">
                View Code
              </a>
            </button>
          </div>
        </div>
        <div className="h-[300px] w-[300px] bg-slate-200 m-auto relative">
          <img
            className="p-[5%] h-full w-full bg-black"
            src={ProImgCon3[Count3].url}
          ></img>
          <IoIosArrowForward
            className="h-8 w-8 absolute -right-[20px] top-[45%] hover:cursor-pointer"
            onClick={ArrowFunClicked3}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
