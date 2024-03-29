const MainPage = () => {
  console.log("Start Main Page");
  return (
    <div id="home" className="grid grid-cols-2 lg:grid-cols-3 h-[650px] bg-black px-[8%] pb-[3%] sm:py-[3%]">
      <div className="col-span-2 grid place-items-center bg-black text-white mx-auto">
        <div className="">
          <p className="text-[22px] sm:text-3xl text-center">
            Hello <span>👋🏻</span>
          </p>

          <h1 className="text-xl">
            <p className="mt-4 mb-4 text:[16px] sm:text-[18px]">I am ,</p>
            <span className="text-[35px] sm:text-7xl font-bold italic nameContainer">
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
        className="m-auto relative h-[350px] sm:min-h-[530px] w-[300px] sm:w-[400px] bg-cover bg-center bg-no-repeat bg-black rounded-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1623685471440-5b0f9609ac23?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
      </div>
    </div>
  );
};

export default MainPage;