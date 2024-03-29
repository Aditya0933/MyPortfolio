import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { TbBrandYoutube } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";

const SocialMedia = () => {
  return (
    <div className="bg-black text-orange-100 grid place-items-center px-[8%] py-[5%]">
      <h1 className="pb-4 text-center text-orange-500 text-4xl font-extrabold font-serif relative after:content-[''] after:h-[6px] after:w-[100px] after:absolute after:bg-slate-50 after:mt-4 after:ml-[20px] after:rounded-tr-[90px] after:rounded-br-[90px] before:h-[6px] before:w-[100px] before:absolute before:bg-slate-50 before:mt-4 before:-ml-[120px] before:rounded-tr-[90px] before:rounded-br-[90px]">Connect with Me</h1>
        <p className="m-auto text-center w-[80%] pb-12">Explore my online presence and stay updated on the latest projects, insights, and industry trends by connecting with me on social media. Follow along for valuable content and engaging discussions!</p>
      <div className="">
        <ul className="flex gap-6">
          <li className="group">
            <a>
              <IoLogoWhatsapp className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -bottom-16 transition duration-500 opacity-0 group-hover:opacity-100">WhatsApp</span>
            </div>
          </li>
          <li className="group">
            <a>
              <FaGithub className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-3xl shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -bottom-16 transition duration-500 opacity-0 group-hover:opacity-100">GitHub</span>
            </div>
          </li>
          <li className="group">
            <a>
              <FaInstagram className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -bottom-16 transition duration-500 opacity-0 group-hover:opacity-100">Instagram</span>
            </div>
          </li>
          <li className="group">
            <a>
              <TbBrandLinkedin className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-3xl shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -bottom-16 transition duration-500 opacity-0 group-hover:opacity-100">LinkedIn</span>
            </div>
          </li>
          <li className="group">
            <a>
              <IoMailUnreadOutline className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-3xl shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute mx-auto -left-[0%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -bottom-16 transition duration-500 opacity-0 group-hover:opacity-100">Mail</span>
            </div>
          </li>
          <li className="group">
            <a>
              <TbBrandYoutube className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -bottom-16 transition duration-500 opacity-0 group-hover:opacity-100">YouTube</span>
            </div>
          </li>
          <li className="group">
            <a>
              <FaFacebook className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-3xl shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -bottom-16 transition duration-500 opacity-0 group-hover:opacity-100">Facebook</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
