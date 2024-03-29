import { useState } from "react";
import WebLogo from "../assets/IMG/PorfolioLogo.png";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { TbBrandYoutube } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { TbInfoOctagon } from "react-icons/tb";
import { IoSchoolOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { FaHandSparkles } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { FaGitSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { TbBrandPython } from "react-icons/tb";

const Footer = () => {
  const [userData, setUserData] = useState("");

  const scrollToSection = (id) => {
    console.log("Clicked.....")
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  console.log("Footer Section Start ...");
  const username = "Aditya09330";

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let userData = data;
      setUserData(userData);
      console.log(userData);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  const { name, bio } = userData;

  console.log("Footer Section Start ...");


  return (
    <div id="footer">
        <div className="bg-black grid grid-cols-4 text-white px-[8%] py-[2%]">
      <div className="px-2">
        <img src={WebLogo} className="h-28 w-32"></img>
        <h2 className="text-2xl mb-2 mt-2 hover:text-orange-400 hover:cursor-pointer">
          {name === null ? name : "Aditya Singh Parihar"}
        </h2>
        <p className="tracking-wide leading-6">
          {bio === null
            ? bio
            : "|| Passionate frontend enthusiast | Dedicated to crafting seamless user experiences. Let's create something remarkable! ||"}
        </p>
        <p className="mt-2 hover:text-orange-300 cursor-pointer">
          <span>aadiofficial0933@gmail.com</span>
        </p>
        <p className="mt-2 hover:text-orange-300 cursor-pointer">
          <span>8081923437</span>
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <button className="mr-6 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 w-[95px] text-lg font-semibold hover:text-black">
            <a href="https://lively-mooncake-88c2cf.netlify.app" className=" flex my-auto gap-5">
              <IoMailUnreadOutline className="my-auto ml-4" />
              <span className="py-3 -ml-3">Mail</span>
            </a>
          </button>
          <button className="mr-6 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 w-[92px] text-lg font-semibold hover:text-black">
            <a href="https://lively-mooncake-88c2cf.netlify.app" className=" flex my-auto gap-5">
              <BsTelephoneInbound className="my-auto ml-4" />
              <span className="py-3 -ml-3">Call</span>
            </a>
          </button>
          <button className="mr-6 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 w-[145px] text-lg font-semibold hover:text-black">
            <a href="https://lively-mooncake-88c2cf.netlify.app" className=" flex my-auto gap-5">
              <FaWhatsapp className="my-auto ml-4"/>
              <span className="py-3 -ml-3">WhatsApp</span>
            </a>
          </button>
        </div>
      </div>
      <div className="mx-auto">
        <h2 className="text-2xl before:h-[2px] before:w-[50px] before:absolute hover:text-orange-300 hover:cursor-pointer before:bg-orange-500 before:mt-10 before:rounded-tr-[90px] before:rounded-br-[90px]">
          My Skills
        </h2>
        <ul className="mt-8">
          <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <FaHtml5 className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">HTML 5</span>
          </li>
          <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <FaCss3Alt className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">CSS 3</span>
          </li>
          <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <FaBootstrap className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">Bootstrap</span>
          </li>
          <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <TbBrandTailwind className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">Tailwind</span>
          </li>

          <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <TbBrandJavascript className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">JavaScript</span>
          </li>
          <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <FaReact className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">React JS</span>
          </li>
          <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <FaGitSquare className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">Git</span>
          </li>
          <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <FaSquareGithub className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">Github</span>
          </li>
          <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <TbBrandPython className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">Python</span>
          </li>
        </ul>
      </div>
      <div className="mx-auto">
        <h2 className="text-2xl before:h-[2px] before:w-[50px] before:absolute hover:text-orange-300 hover:cursor-pointer before:bg-orange-500 before:mt-10 before:rounded-tr-[90px] before:rounded-br-[90px]">
          Quick Links
        </h2>
        <ul className="mt-8">
          <li onClick={() => scrollToSection('home')} className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <FaHome className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">Home</span>
          </li>
          <li onClick={() => scrollToSection('about')} className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <TbInfoOctagon className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">About</span>
          </li>
          {/* <li onClick={() => scrollToSection('education')} className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <IoSchoolOutline className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">Education</span>
          </li> */}

          <li onClick={() => scrollToSection('skill')} className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <FaHandSparkles className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">Skills</span>
          </li>
          <li onClick={() => scrollToSection('project')} className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <GoProject className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-4">Projects</span>
          </li>
        </ul>
      </div>
      <div className="mx-auto">
        <h2 className="text-2xl before:h-[2px] before:w-[50px] before:absolute hover:text-orange-300 hover:cursor-pointer before:bg-orange-500 before:mt-10 before:rounded-tr-[90px] before:rounded-br-[90px]">
          CareerLink
        </h2>
        <ul className="mt-8">
          <li className="flex mb-4">
            <a>
              <IoLogoWhatsapp className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <span className="ml-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              Whatsapp
            </span>
          </li>
          <li className="flex mb-4">
            <a>
              <FaGithub className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <span className="ml-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              GitHub
            </span>
          </li>
          <li className="flex mb-4">
            <a>
              <FaInstagram className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <span className="ml-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              Instagram
            </span>
          </li>
          <li className="flex mb-4">
            <a>
              <TbBrandLinkedin className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <span className="ml-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              Linked In
            </span>
          </li>
          <li className="flex mb-4">
            <a>
              <TbBrandYoutube className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <span className="ml-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              You Tube
            </span>
          </li>
          <li className="flex mb-4">
            <a>
              <FaFacebook className=" h-12 w-12 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-2 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <span className="ml-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              Facebook
            </span>
          </li>
        </ul>
      </div>
      
    </div>
    <div className="flex flex-col items-center justify-center bg-black text-white pb-8">
        <div className="h-[1px] w-full bg-white mb-8 opacity-10 text-sm"></div>
        <p className="text-sm">All &copy; has been reserved.</p><p className="text-sm">This Website is made with &#10084; by Aditya Singh Parihar</p></div>
    </div>
  );
};

export default Footer;
