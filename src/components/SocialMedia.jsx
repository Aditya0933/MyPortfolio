import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { TbBrandYoutube } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="bg-black text-zinc-100 grid place-items-center px-[8%] py-[5%]">
      <div className="">
        <ul className="flex gap-6">
          <li className="group">
            <a>
              <IoLogoWhatsapp className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -top-32 transition duration-500 opacity-0 group-hover:opacity-100">WhatsApp</span>
            </div>
          </li>
          <li className="group">
            <a>
              <FaGithub className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-3xl shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -top-32 transition duration-500 opacity-0 group-hover:opacity-100">WhatsApp</span>
            </div>
          </li>
          <li className="group">
            <a>
              <FaInstagram className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -top-32 transition duration-500 opacity-0 group-hover:opacity-100">WhatsApp</span>
            </div>
          </li>
          <li className="group">
            <a>
              <TbBrandLinkedin className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-3xl shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -top-32 transition duration-500 opacity-0 group-hover:opacity-100">WhatsApp</span>
            </div>
          </li>
          <li className="group">
            <a>
              <TbBrandYoutube className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-sm shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -top-32 transition duration-500 opacity-0 group-hover:opacity-100">WhatsApp</span>
            </div>
          </li>
          <li className="group">
            <a>
              <FaFacebook className=" h-16 w-16 border-2 border-dashed transform rotate-[0deg] hover:rotate-[360deg] hover: border-black p-3 rounded-[50px] hover:border-orange-500 hover:cursor-pointer hover:text-orange-300 transition duration-500 shadow-3xl shadow-orange-300 hover:shadow-none" />
            </a>
            <div className="relative">
                <span className="absolute m-auto -left-[30%] px-4 text-orange-200 py-2 rounded-[80px]  shadow-sm shadow-orange-300 -top-32 transition duration-500 opacity-0 group-hover:opacity-100">WhatsApp</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
