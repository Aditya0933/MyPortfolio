import AboutMeImg from "../assets/IMG/AboutSection.png";
import AboutMeBackground from "../assets/IMG/AboutImgUpgrade1.avif";
const AboutMe = () => {
  console.log("End");
  return (
    <div
    id="about"
      className="relative bg-center bg-cover bg-no-repeat  px-[5%] sm:px-[8%] py-[5%] text-left z-10 h-full"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524169358666-79f22534bc6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <h1 className="pb-1 sm:pb-4 text-center text-orange-500 text-[25px] text-4xl font-extrabold font-serif relative after:content-[''] after:h-[6px] sm:after:w-[100px] after:absolute after:bg-slate-50 after:mt-4 after:ml-[20px] after:rounded-tr-[90px] after:rounded-br-[90px] before:h-[6px] sm:before:w-[100px] before:absolute before:bg-slate-50 before:mt-4 before:-ml-[120px] before:rounded-tr-[90px] before:rounded-br-[90px]">
        Embarking on a Journey in Tech
      </h1>
      <p className="m-auto text-[14px] sm:text-[16px] text-center sm:w-[90%] md:w-[85%] lg:w-[80%] pb-4 sm:pb-8 text-orange-100">
        Welcome to my journey in the dynamic world of technology! Fueled by
        curiosity and innovation, I'm committed to continuous learning and
        growth. Join me as I explore new technologies, hone my skills, and push
        boundaries. Let's embark on this exciting adventure together, shaping
        the future with creativity and endless possibilities.
      </p>
      <div className="text-white text-[12px] sm:text-lg font-semibold leading-7x p-[15px] sm:p-[10px] md:p-[30px] lg:p-[50px] max-w-[900px] m-auto tracking-wider border-double border-4 sm:border-8 bg-black animated-border">
        <p className="mb-2 sm:mb-4">
          Hi there! I'm Aditya Singh Parihar, currently pursuing my B.Tech in
          Computer Science at Kanpur Institute of Technology, affiliatedwith Dr.
          A.P.J. Abdul Kalam Technical University.
        </p>
        <p className="mb-2 sm:mb-4">
          I'm just getting started on my journey in the tech world, driven by a
          deep love for all things digital and a desire to make coolstuff on the
          web.I'm delving into front-end development, where I'm exploring HTML,
          CSS, and JavaScript to build the foundations of webdesign. I'm also
          checking out modern tools like React and figuring out how to manage
          data with Redux.
        </p>
        <p className="mb-2 sm:mb-4">
          When I'm not diving into code,you'll find me playing football or
          chess, or getting creative with handcrafts
        </p>
        <p className="mb-2 sm:mb-4">
          Looking ahead, my aspiration is to transition into a versatile
          full-stack developer, equipped with the proficiency to navigate
          bothfront-end and back-end technologies seamlessly. I'm enthusiastic
          about the learning journey that lies ahead and committed to
          expandingmy skill set and knowledge base to thrive in this dynamic
          industry.
        </p>
        <p>Let's connect and embark on this exciting journey together!</p>
      </div>
      <div className="absolute inset-0 bg-black opacity-80 -z-10"></div>
    </div>
  );
};

export default AboutMe;
