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
    console.log("Clicked.....");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
      <div className="sm:hidden px-[5%] py-[5%] bg-black text-white">
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
          <div className="flex gap-2 mt-4">
            <button className="mr-2 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 w-[85px] text-lg font-semibold hover:text-black">
              <a
                href="https://lively-mooncake-88c2cf.netlify.app"
                className=" flex my-auto gap-5"
              >
                <IoMailUnreadOutline className="my-auto ml-2" />
                <span className="py-2 -ml-3">Mail</span>
              </a>
            </button>
            <button className="mr-2 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 w-[80px] text-lg font-semibold hover:text-black">
              <a
                href="https://lively-mooncake-88c2cf.netlify.app"
                className=" flex my-auto gap-5"
              >
                <BsTelephoneInbound className="my-auto ml-2" />
                <span className="py-2 -ml-3">Call</span>
              </a>
            </button>
            <button className="mr-2 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 w-[130px] text-lg font-semibold hover:text-black">
              <a
                href="https://lively-mooncake-88c2cf.netlify.app"
                className=" flex my-auto gap-5"
              >
                <FaWhatsapp className="my-auto ml-2"/>
                <span className="py-2 -ml-3">WhatsApp</span>
              </a>
            </button>
          </div>
      </div>
      <div className="bg-black grid grid-cols-2 sm:grid-cols-6 text-white px-[8%] py-[5%]">
        <div className="hidden sm:block px-2 col-span-3">
          <img src={WebLogo} className="h-28 w-32"></img>
          <h2 className="text-2xl mb-2 mt-2 hover:text-orange-400 hover:cursor-pointer">
            {name === null ? name : "Aditya Singh Parihar"}
          </h2>
          <p className="tracking-wide leading-6 w-[80%]">
            {bio === null
              ? bio
              : "|| Passionate frontend enthusiast | Dedicated to crafting seamless user experiences. Let's create something remarkable! ||"}
          </p>
          <p className="mt-2 hover:text-orange-300 cursor-pointer">
            <a href="mailto:aadiofficial0933@gmail.com?subject=Subject%20of%20Email&body=Body%20of%20Email"><span>aadiofficial0933@gmail.com</span></a>
            
          </p>
          <p className="mt-2 hover:text-orange-300 cursor-pointer">
            <a href="tel:8081923437"><span>8081923437</span></a>
            
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <button className="mr-6 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 w-[95px] text-lg font-semibold hover:text-black">
              <a
                href="mailto:aadiofficial0933@gmail.com?subject=Subject%20of%20Email&body=Body%20of%20Email"
                className=" flex my-auto gap-5"
              >
                <IoMailUnreadOutline className="my-auto ml-4" />
                <span className="py-3 -ml-3">Mail</span>
              </a>
            </button>
            <button className="mr-6 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 w-[92px] text-lg font-semibold hover:text-black">
              <a
                href="tel:8081923437"
                className=" flex my-auto gap-5"
              >
                <BsTelephoneInbound className="my-auto ml-4" />
                <span className="py-3 -ml-3">Call</span>
              </a>
            </button>
            <button className="mr-6 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 w-[145px] text-lg font-semibold hover:text-black">
              <a
                href="https://wa.me/8081923437"
                className=" flex my-auto gap-5"
              >
                <FaWhatsapp className="my-auto ml-4" />
                <span className="py-3 -ml-3">WhatsApp</span>
              </a>
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <h2 className="text-xl sm:text-2xl before:h-[2px] before:w-[50px] before:absolute hover:text-orange-300 hover:cursor-pointer before:bg-orange-500 before:mt-10 before:rounded-tr-[90px] before:rounded-br-[90px]">
            My Skills
          </h2>
          <ul className="mt-8">
            <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              <FaHtml5 className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text[16px]">HTML 5</span>
            </li>
            <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              <FaCss3Alt className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text[16px]">CSS 3</span>
            </li>
            <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              <FaBootstrap className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text[16px]">Bootstrap</span>
            </li>
            <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              <TbBrandTailwind className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text[16px]">Tailwind</span>
            </li>

            <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              <TbBrandJavascript className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text[16px]">JavaScript</span>
            </li>
            <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              <FaReact className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text[16px]">React JS</span>
            </li>
            <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              <FaGitSquare className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text[16px]">Git</span>
            </li>
            <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              <FaSquareGithub className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text[16px]">Github</span>
            </li>
            <li className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
              <TbBrandPython className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text[16px]">Python</span>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <h2 className="text-xl sm:text-2xl before:h-[2px] before:w-[50px] before:absolute hover:text-orange-300 hover:cursor-pointer before:bg-orange-500 before:mt-10 before:rounded-tr-[90px] before:rounded-br-[90px]">
            Quick Links
          </h2>
          <ul className="mt-8">
            <li
              onClick={() => scrollToSection("home")}
              className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer"
            >
              <FaHome className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text-[16px]">Home</span>
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer"
            >
              <TbInfoOctagon className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text-[16px]">About</span>
            </li>
            {/* <li onClick={() => scrollToSection('education')} className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer">
            <IoSchoolOutline className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            <span className="ml-2 sm:ml-4 text-[14px] sm:text-[16px]">Education</span>
          </li> */}

            <li
              onClick={() => scrollToSection("skill")}
              className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer"
            >
              <FaHandSparkles className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text-[16px]">Skills</span>
            </li>
            <li
              onClick={() => scrollToSection("project")}
              className="flex items-center mb-4 my-auto text-lg hover:text-orange-400 cursor-pointer"
            >
              <GoProject className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              <span className="ml-2 sm:ml-4 text-[14px] sm:text-[16px]">Projects</span>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <h2 className="text-xl sm:text-2xl before:h-[2px] before:w-[50px] before:absolute hover:text-orange-300 hover:cursor-pointer before:bg-orange-500 before:mt-10 before:rounded-tr-[90px] before:rounded-br-[90px]">
            CareerLink
          </h2>
          <ul className="mt-8">
            <li className="flex mb-4">
              <a href="https://wa.me/8081923437">
                <IoLogoWhatsapp className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              </a>
              <span className="ml-2 sm:ml-4 my-auto text-[14px] sm:text-[16px] hover:text-orange-400 cursor-pointer">
                Whatsapp
              </span>
            </li>
            <li className="flex mb-4">
              <a href="https://github.com/Aditya0933">
                <FaGithub className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              </a>
              <span className="ml-2 sm:ml-4 my-auto text-[14px] sm:text-[16px] hover:text-orange-400 cursor-pointer">
                GitHub
              </span>
            </li>
            <li className="flex mb-4">
              <a href="https://www.instagram.com/iamaadi_033">
                <FaInstagram className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              </a>
              <span className="ml-2 sm:ml-4 my-auto text-[14px] sm:text-[16px] hover:text-orange-400 cursor-pointer">
                Instagram
              </span>
            </li>
            <li className="flex mb-4">
              <a href="https://www.linkedin.com/in/aditya-singh-parihar-a87aba250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <TbBrandLinkedin className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              </a>
              <span className="ml-2 sm:ml-4 my-auto text-[14px] sm:text-[16px] hover:text-orange-400 cursor-pointer">
                Linked In
              </span>
            </li>
            <li className="flex mb-4">
              <a href="https://www.youtube.com/@pes_012">
                <TbBrandYoutube className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              </a>
              <span className="ml-2 sm:ml-4 my-auto text-[14px] sm:text-[16px] hover:text-orange-400 cursor-pointer">
                You Tube
              </span>
            </li>
            <li className="flex mb-4">
              <a href="https://www.facebook.com/aadithakur.aadithakur.31">
                <FaFacebook className=" h-8 w-8 sm:h-12 p-1 sm:p-2 sm:w-12  border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black  rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
              </a>
              <span className="ml-2 sm:ml-4 my-auto text-[14px] sm:text-[16px] hover:text-orange-400 cursor-pointer">
                Facebook
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-black text-white pb-8">
        <div className="h-[1px] w-full bg-white mb-8 opacity-10 text-sm"></div>
        <p className="text-[12px] sm:text-[14px]">All &copy; has been reserved.</p>
        <p className="text-[12px] sm:text-[14px]">
          This Website is made with &#10084; by Aditya Singh Parihar
        </p>
      </div>
    </div>
  );
};

export default Footer;
