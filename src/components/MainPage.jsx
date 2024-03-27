const MainPage = () => {
  console.log("Start Main Page");
  return (
    <div className="grid grid-cols-3 h-[700px]  overflow-hidden bg-black px-[8%] py-[2%]">
      <div className="col-span-2 grid place-items-center bg-black text-white">
        <div className="">
          <p className="text-3xl text-center">
            Hello <span>👋🏻</span>
          </p>

          <h1 className="text-xl">
            <p className="mt-6 mb-4 text-sm">I am ,</p>
            <span className="text-7xl font-bold italic pt-[100px] nameContainer">
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
            <p className="mt-8 text-sm tracking-widest">(  FrontEnd Developer , React JS Developer , Software Developer )</p>
          </h1>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center bg-no-repeat bg-black rounded-full"
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
