import AboutMeBackground from "../assets/IMG/PorfolioLogo.png";
import { HiOutlineViewList } from "react-icons/hi";
import { GiSplitCross } from "react-icons/gi";
import { CiLineHeight } from "react-icons/ci";

function NavBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const HumburgNavClick = () =>{
    listUl.classList.remove("h-0");
    listUl.classList.add("pb-[45px]");
  }
  const removeHumburg = () =>{
    // let navHumCont = document.getElementById("navListCon");
    var listUl = document.getElementById("listUl");
    listUl.classList.add("h-0");
    listUl.classList.add("overflow-hidden");
    listUl.classList.remove("pb-[45px]");

  }
  
  
  return (
    <div className="relative w-1/1 bg-black text-white flex justify-between items-center px-[8%] py-[10px]">
      <div className="h-[70px] sm:h-[100px]">
        <img className="h-full w-[100%]" src={AboutMeBackground} alt="Aditya Singh Parihar"></img>
      </div>
      <div>
      <div id="navListCon" className="hidden sm:block">
        <ul className="flex justify-between items-center pr-1 font-serif">
          <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer">Home</li>
          <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
          {/* <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer" onClick={() => scrollToSection('education')}>Education</li> */}
          <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer" onClick={() => scrollToSection('skill')}>Skills</li>
          <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer" onClick={() => scrollToSection('project')}>Project</li>
          <li className="pr-5 " onClick={() => scrollToSection('footer')}>
            <button className="px-4 py-2 font-bold text-lg  hover:cursor-pointer bg-orange-500 rounded-lg hover:text-orange-400  hover:bg-white border-none">Contact</button>
          </li>
        </ul>
      </div>
      <div id="navListCon" className="">
        <ul id="listUl" className="h-0 overflow-hidden transition-all duration-500 ease-out absolute flex justify-center items-center flex-col gap-5 rounded-bl-[100px] rounded-br-[100px] bg-orange-500 text-orange-100 z-50 right-0 top-0 px-10">
          <li className="pt-[30px] pl-20 "><span className=" mx-auto font-bold text-3xl" onClick={removeHumburg}><GiSplitCross/></span></li>
          <li className=" font-bold text-lg hover:text-orange-400 hover:cursor-pointer">Home</li>
          <li className=" font-bold text-lg hover:text-orange-400 hover:cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
          {/* <li className=" font-bold text-lg hover:text-orange-400 hover:cursor-pointer" onClick={() => scrollToSection('education')}>Education</li> */}
          <li className=" font-bold text-lg hover:text-orange-400 hover:cursor-pointer" onClick={() => scrollToSection('skill')}>Skills</li>
          <li className=" font-bold text-lg hover:text-orange-400 hover:cursor-pointer" onClick={() => scrollToSection('project')}>Project</li>
          <li className=" " >
            <button className="px-4 py-2 font-bold text-lg  hover:cursor-pointer bg-white text-orange-500 rounded-lg  hover:bg-white border-none" onClick={() => scrollToSection('footer')}>Contact</button>
          </li>
        </ul>
      </div>
      <div>
        <CiLineHeight id="HumburgNav" className="h-8 w-8 sm:hidden" onClick={HumburgNavClick}/>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
