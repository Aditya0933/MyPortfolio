import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MdFullscreenExit, MdFullscreen } from "react-icons/md";

import Project1A from "../assets/IMG/P1img1.jpg";
import Project1B from "../assets/IMG/P2img2.jpg";
import Project1C from "../assets/IMG/P1img3.jpg";
import Project1D from "../assets/IMG/P1img4.jpg";
import Project1E from "../assets/IMG/P1img5.jpg";

const Projects = () => {
  const projects = [
    {
      title: "NETFLIX GPT",
      images: [Project1A, Project1B, Project1C, Project1D, Project1E],
    },
    {
      title: "E-COMMERCE APP",
      images: [Project1A, Project1B, Project1C, Project1D, Project1E],
    },
  ];

  // Initialize refs as an empty array
  const sliderRefs = useRef([]);
  const [fullScreenIndex, setFullScreenIndex] = useState(null);

  const toggleFullScreen = (index) => {
    const slider = sliderRefs.current[index];
    if (!slider) {
      console.error(`Slider at index "${index}" not found.`);
      return;
    }

    // Toggle fullscreen for the specific slider
    if (!document.fullscreenElement) {
      slider.requestFullscreen?.();
      setFullScreenIndex(index);
    } else {
      document.exitFullscreen?.();
      setFullScreenIndex(null);
    }
  };

  return (
    <div id="project" className="sm:px-[8%] px-[5%] py-[5%] bg-black text-orange-100">
      <h1 className="pb-2 sm:pb-4 text-center text-4xl font-extrabold font-serif relative text-orange-500">
        My Projects
      </h1>

      <p className="m-auto text-center w-[100%] sm:w-[90%] md:w-[85%] lg:w-[80%] text-[14px] sm:text-[16px] pb-4 sm:pb-8">
        Check out my frontend projects! Dive in to see how I make things look
        good and work smoothly on the web.
      </p>

      {projects.map((project, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-2 bg-black text-white mb-8">
          <div
            ref={(el) => {
              // Attach the DOM element to sliderRefs at the correct index
              sliderRefs.current[index] = el;
            }}
            className={`relative ${fullScreenIndex === index ? "h-screen w-screen" : "h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] bg-slate-200 m-auto"}`}
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
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={() => toggleFullScreen(index)}
              className={`absolute top-2 right-2 z-10 bg-orange-600 text-white text-3xl rounded shadow-lg transition duration-300 ${fullScreenIndex === index ? "bg-red-700" : ""}`}
              aria-label={fullScreenIndex === index ? "Exit Full Screen" : "View Full Screen"}
            >
              {fullScreenIndex === index ? <MdFullscreenExit /> : <MdFullscreen />}
            </button>
          </div>

          <div className="flex flex-col justify-center mt-[10px] sm:pr-[20px]">
            <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-orange-300">
              {project.title}
            </h2>
            <div className="mt-3 sm:mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} Live`}
              >
                <button className="mr-6 px-4 py-2 border border-orange-500 rounded-md text-orange-400 hover:bg-orange-500 transition duration-500 font-semibold hover:text-black">
                  Live Link
                </button>
              </a>
              <a
                href="#"
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