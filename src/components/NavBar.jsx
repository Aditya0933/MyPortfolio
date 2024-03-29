import AboutMeBackground from "../assets/IMG/PorfolioLogo.png";


function NavBar() {
  console.log("Start");
  const scrollToSection = (id) => {
    console.log("Clicked.....")
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="w-1/1 bg-black text-white flex justify-between items-center px-[8%] py-[10px]">
      <div className="h-[70px] sm:h-[100px]">
        <img className="h-full w-[100%]" src={AboutMeBackground} alt="Aditya Singh Parihar"></img>
      </div>
      <div className="hidden sm:block">
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
    </div>
  );
}

export default NavBar;
