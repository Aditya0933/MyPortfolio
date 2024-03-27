import AboutMeBackground from "../assets/IMG/PorfolioLogo.png";


function NavBar() {
  console.log("Start");
  return (
    <div className="w-1/1 bg-black text-white flex justify-between items-center px-[8%] py-[10px]">
      <div className="h-[100px]">
        <img className="h-full w-[100%]" src={AboutMeBackground} alt="Aditya Singh Parihar"></img>
      </div>
      <div>
        <ul className="flex justify-between items-center pr-1">
          <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer">Home</li>
          <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer">About</li>
          <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer">Education</li>
          <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer">Skills</li>
          <li className="pr-5 font-bold text-lg hover:text-orange-400 hover:cursor-pointer">Project</li>
          <li className="pr-5 ">
            <button className="px-4 py-2 font-bold text-lg  hover:cursor-pointer bg-orange-500 rounded-lg hover:text-orange-400  hover:bg-white border-none">Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
