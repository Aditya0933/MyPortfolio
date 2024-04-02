import ProfilePic from "../assets/IMG/P3img4.jpg"

const MainPage = () => {
  console.log("Start Main Page");
  return (
    <div id="home" className="grid grid-cols-2 overflow-hidden lg:grid-cols-3 lg:gap-2 h-[600px] bg-black px-[5%] sm:px-[8%] pb-[3%] sm:py-[3%]">
      <div className="col-span-2 grid place-items-center bg-black text-white mx-auto">
        <div className="">
          <p className="text-[22px] sm:text-3xl text-center">
            Hello <span>👋🏻</span>
          </p>

          <h1 className="text-xl">
            <p className="mt-4 mb-4 text:[16px] sm:text-[18px]">I am ,</p>
            <span className="text-[30px] sm:text-5xl md:text-6xl font-bold italic nameContainer">
                <span>A</span>
                <span>d</span>
                <span>i</span>
                <span>t</span>
                <span>y</span>
                <span>a</span>
                <span> S</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
                <span>h</span>
                <span> P</span>
                <span>a</span>
                <span>r</span>
                <span>i</span>
                <span>h</span>
                <span>a</span>
                <span>r</span>
            </span>
            <p className="mt-4 text-[12px] sm:text-[12px] sm:tracking-widest">(  FrontEnd Developer , React JS Developer , Software Developer )</p>
          </h1>
        </div>
      </div>
      <div
        className=" relative sm:mt-6 lg:mt-0 h-[350px] w-[300px] sm:h-[400px] sm:w-[350px] lg:h-[100%] lg:w-[100%] bg-cover bg-center bg-no-repeat bg-black rounded-full"
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/D5603AQHV40gE2fbbng/profile-displayphoto-shrink_800_800/0/1702401960947?e=2147483647&v=beta&t=lnzXMXWoognHm15_W1rW46LH04NslW39188PBLLFF88')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
    </div>
  );
};

export default MainPage;
