import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MdFullscreenExit, MdFullscreen } from "react-icons/md";

import Project1A from "../assets/IMG/P1img1.png";
import Project1B from "../assets/IMG/P1img2.png";
import Project1C from "../assets/IMG/P1img3.png";
import Project1D from "../assets/IMG/P1img4.png";
import Project1E from "../assets/IMG/P1img5.png";

import Project2A from "../assets/IMG/P2img1.png";
import Project2B from "../assets/IMG/P2img2.png";
import Project2C from "../assets/IMG/P2img3.png";
import Project2D from "../assets/IMG/P2img4.png";
import Project2E from "../assets/IMG/P2img5.png";
import Project2F from "../assets/IMG/P2img6.png";
import Project2G from "../assets/IMG/P2img7.png";
import Project2H from "../assets/IMG/P2img8.png";
import Project2I from "../assets/IMG/P2img9.png";

import Project4A from "../assets/IMG/P4img1.png";
import Project4B from "../assets/IMG/P4img2.png";
import Project4C from "../assets/IMG/P4img3.png";
import Project4D from "../assets/IMG/P4img4.png";
import Project4E from "../assets/IMG/P4img5.png";
import Project4F from "../assets/IMG/P4img6.png";
import Project4G from "../assets/IMG/P4img7.png";
import Project4H from "../assets/IMG/P4img8.png";
import Project4I from "../assets/IMG/P4img9.png";

import Project5A from "../assets/IMG/P5img1.jpg";
import Project5B from "../assets/IMG/P5img2.jpg";
import Project5C from "../assets/IMG/P5img3.jpg";
import Project5D from "../assets/IMG/P5img4.jpg";
import Project5E from "../assets/IMG/P5img5.jpg";
import Project5F from "../assets/IMG/P5img6.jpg";

import Project6A from "../assets/IMG/P6img1.png";
import Project6B from "../assets/IMG/P6img2.png";
import Project6C from "../assets/IMG/P6img3.png";
import Project6D from "../assets/IMG/P6img4.png";
import Project6E from "../assets/IMG/P6img5.png";
import Project6F from "../assets/IMG/P6img6.png";
import Project6G from "../assets/IMG/P6img7.png";
import Project6H from "../assets/IMG/P6img8.png";
import Project6I from "../assets/IMG/P6img9.png";
import Project6J from "../assets/IMG/P6img11.png";
import Project6K from "../assets/IMG/P6img12.png";
import Project6L from "../assets/IMG/P6img13.png";
import Project6M from "../assets/IMG/P6img16.png";
import Project6N from "../assets/IMG/P6img15.png";
import Project6O from "../assets/IMG/P6img16.png";
import Project6P from "../assets/IMG/P6img17.png";

import Project7A from "../assets/IMG/P7img1.jpg";
import Project7B from "../assets/IMG/P7img2.jpg";
import Project7C from "../assets/IMG/P7img3.jpg";
import Project7D from "../assets/IMG/P7img4.jpg";
import Project7E from "../assets/IMG/P7img5.jpg";

import Project9A from "../assets/IMG/P9img1.png";
import Project9B from "../assets/IMG/P9img2.png";

const Projects = () => {
  const projects = [
    // Stray To Stay Project 1
    {
      title: "Stray To Stay",
      images: [Project1A, Project1B, Project1C, Project1D, Project1E],
      highlights: [
        "Led front-end development, designing and implementing the user interface for animal welfare initiatives like rescue, rehoming, and adoption.",
        "Ensured full website responsiveness for optimal performance on mobile devices and desktops.",
        "Maintained a visually consistent design, presenting a modern and professional platform.",
        "Enhanced navigation and user experience for improved accessibility.",
      ],
      tecnologys: [
        "React.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "Material UI",
        "Stripe",
        "React-leaflet",
      ],
      liveLink: "https://ankitsahu640.github.io/StrayToStay-frontend/",
      githubLink: "https://github.com/Aditya0933/StarytoStayProjectUpdated",
    },

    // A & V Project... 2
    {
      title: "A&V Fashion Avenue",
      images: [
        Project2A,
        Project2B,
        Project2C,
        Project2D,
        Project2E,
        Project2F,
        Project2G,
        Project2H,
        Project2I,
      ],
      highlights: [
        "Crafted a seamless and user-friendly interface for an E-commerce clothing platform.",
        "Developed a 'Liked' section to enable users to save and revisit their favorite clothing items seamlessly.",
        "Created a cart section, streamlining the process of adding, removing, and purchasing products for an shopping experience.",
        "• Ensured full website responsiveness for flawless performance on both mobile devices and desktops.",
      ],
      tecnologys: ["HTML", "CSS", "Tailwind", "JavaScript", "React.js"],
      liveLink: "https://anv-collections.vercel.app/",
      githubLink: "https://github.com/Aditya0933/skipline",
    },

    // Amora.IA Project 4
    {
      title: "Amora.IA",
      images: [Project6A, Project6B, Project6C, Project6D, Project6E, Project6F, Project6G, Project6H, Project6I, Project6J, Project6K, Project6L, Project6M, Project6N, Project6O, Project6P],
      highlights: [
        "Built a fully responsive web application using HTML, CSS, and JavaScript to deliver an optimized user interface.",
        "Built a modular, maintainable codebase using JavaScript for enhanced functionality.",
        "Deployed the application on Netlify for smooth hosting and performance.",
      ],
      tecnologys: ["HTML", "CSS", "Tailwind", "JavaScript", "React.js"],
      liveLink: "https://comfy-cannoli-c7d5db.netlify.app/",
      githubLink: "https://github.com/Aditya0933/React-Amora-Website",
    },

    // Shopping Cart Project 3
    {
      title: "Shopping Cart",
      images: [
        Project4A,
        Project4B,
        Project4C,
        Project4D,
        Project4E,
        Project4F,
        Project4G,
        Project4H,
        Project4I,
      ],
      highlights: [
        "Designed a fully responsive shopping cart web application with a seamless and optimized UI across devices.",
        "Integrated real-time API data fetching to display up-to-date product information, enhancing the shopping experience.",
        "Implemented interactive features such as adding, removing, and updating cart items, ensuring a smooth user journey.",
        "Successfully deployed the project on Vercel, enabling fast hosting and continuous integration.",
      ],
      tecnologys: ["HTML", "CSS", "Tailwind", "JavaScript", "React.js"],
      liveLink: "https://shopping-cart-azure-five.vercel.app/",
      githubLink: "https://github.com/Aditya0933/ShoppingCart",
    },

    // Memory Game Project 5
    {
      title: "Memory Game",
      images: [
        Project5A,
        Project5B,
        Project5C,
        Project5D,
        Project5E,
        Project5F,
      ],
      highlights: [
        "Constructed a responsive memory game with four levels using HTML, CSS, and JavaScript, ensuring compatibility across all devices.",
        "Implemented card matching mechanics and a star scoring system to enhance gameplay engagement.",
        "Incorporated a timer and background music to elevate the overall gaming experience.",
      ],
      tecnologys: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://aditya0933.github.io/MemoryGameUpdated/",
      githubLink: "https://github.com/Aditya0933/Memory-game",
    },

    // NETFLIX GPT Project 6
    {
      title: "NETFLIX GPT",
      images: [Project7A, Project7B, Project7C, Project7D, Project7E],
      highlights: [
        "Created a responsive front-end web application using Tailwind CSS for an optimal user experience across devices.",
        "Implemented TMDB’s API to fetch and display detailed movie information.",
        "Developed a unique “GPT Search” feature using OpenAI’s API for advanced search capabilities.",
        "Deployed on Netlify for seamless hosting and automatic scaling.",
      ],
      tecnologys: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React.js",
        "Redux",
      ],
      liveLink: "https://lively-mooncake-88c2cf.netlify.app/",
      githubLink: "https://github.com/Aditya0933/NetflixGPT3.0",
    },

    // Doctor Dashboard Project 7
    {
      title: "Doctor Dashboard",
      images: [Project9A, Project9B],
      highlights: [
        "Designed a fully responsive web application using custom code to optimize the user interface across devices.",
        "Integrated Chart.js for dynamic medical data visualization, improving data analysis.",
        "Fetched real-time data from an API to display current patient information, enhancing user experience.",
        "Deployed on Netlify for efficient hosting and continuous integration.",
      ],
      tecnologys: ["HTML", "CSS", "JavaScript", "Chart.js"],
      liveLink: "https://aditya0933.github.io/Doctor_Dashboard/",
      githubLink: "https://github.com/Aditya0933/Doctor_Dashboard",
    },
  ];

  const sliderRefs = useRef([]);
  const [fullScreenIndex, setFullScreenIndex] = useState(null);

  const toggleFullScreen = (index) => {
    const slider = sliderRefs.current[index];
    if (!slider) {
      console.error(`Slider at index "${index}" not found.`);
      return;
    }

    if (!document.fullscreenElement) {
      slider.requestFullscreen?.();
      setFullScreenIndex(index);
    } else {
      document.exitFullscreen?.();
      setFullScreenIndex(null);
    }
  };

  return (
    <div
      id="project"
      className="px-[5%] lg:px-[8%] py-[5%] bg-black text-orange-100"
    >
      <h1 className="pb-2 sm:pb-4 text-center text-4xl font-extrabold font-serif relative text-orange-500">
        My Projects
      </h1>
      <p className="m-auto text-center w-full sm:w-[90%] md:w-[85%] lg:w-[80%] text-[14px] sm:text-[16px] pb-4 sm:pb-8">
        Check out my frontend projects! Dive in to see how I make things look
        good and work smoothly on the web.
      </p>
      {projects.map((project, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-2 bg-black text-white mb-8 sm:mb-12 lg:mb-16"
        >
          <div
            ref={(el) => {
              sliderRefs.current[index] = el;
            }}
            className={`relative ${
              fullScreenIndex === index
                ? "h-screen w-screen"
                : "h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] bg-black m-auto"
            }`}
          >
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="h-full w-full bg-black m-auto"
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="h-full w-full object-contain p-8"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={() => toggleFullScreen(index)}
              className={`absolute top-2 right-2 z-10 bg-black text-white text-3xl rounded shadow-lg transition duration-300 ${
                fullScreenIndex === index ? "bg-orange-600" : ""
              }`}
              aria-label={
                fullScreenIndex === index
                  ? "Exit Full Screen"
                  : "View Full Screen"
              }
            >
              {fullScreenIndex === index ? (
                <MdFullscreenExit />
              ) : (
                <MdFullscreen />
              )}
            </button>
          </div>
          <div className="flex flex-col justify-center mt-[10px] sm:pr-[20px]">
            <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-orange-300">
              {project.title}
            </h2>
            <div>
              {project.highlights.map((point, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-md lg:text-lg xl:text-xl"
                >
                  {idx + 1}. {point}
                </p>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-2 md:gap-4 items-center">
              <span className="text-2xl font-bold">Technology : </span>
              {project.tecnologys.map((technology, index) => (
                <span
                  key={index}
                  className="block text-orange-400 text-sm sm:text-md md:text-lg"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="mt-3 sm:mt-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} Live`}
              >
                <button className="mr-6 px-4 py-2 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 font-semibold hover:text-black">
                  Live Link
                </button>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} Code`}
              >
                <button className="px-4 py-2 border border-orange-500 rounded-md text-black bg-orange-500 hover:bg-black transition duration-500 font-semibold hover:text-orange-400">
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
