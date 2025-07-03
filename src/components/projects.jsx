import Trip from "../assets/img/projects/tripadvisor.png";
import Green from "../assets/img/projects/Greenden.jpg";
import Udemy from "../assets/img/projects/Udemy.png";
import Python from "../assets/img/projects/Python.png";

export default function Projects() {
  return (
    <>
      <div id="projects" className="projects-section__conatiner mt-20">
        <div className="projects-section__head">
          <h1 className="text-6xl text-center mb-15 font-bold md:text-5xl">
            PROJECTS
          </h1>
        </div>

        <div className="project-section__cards__container flex flex-wrap justify-center gap-8 mt-10">
          

          <div className="w-[300px] h-[400px] perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white shadow-2xl p-6 rounded-xl">
                <div className="img-container flex items-center justify-center mb-5">
                  <img className="w-200" src={Trip} alt="Greenden Img" />
                </div>
                <h1 className="text-2xl text-center font-bold">
                  
                    TRIP ADVISOR CLONE
                  
                </h1>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 shadow-2xl p-6 rounded-xl flex flex-col items-center justify-center">
                <p className="mt-2 text-justify text-lg">
                  A travel review and booking platform inspired by TripAdvisor.
              Built with modern web technologies, it features interactive maps,
              location-based listings, user reviews, and a responsive UI to
              explore destinations, hotels, and restaurants seamlessly.
                </p>
                <p className="text-center text-sm">
                  <a
                    href="https://vasanthbalasubramaniyan.github.io/trip-advisor/"
                    target="_blank"
                    className="text-lg font-bold underline"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[400px] perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white shadow-2xl p-6 rounded-xl">
                <div className="img-container  mb-5">
                  <img className="w-200 h-60" src={Green} alt="Greenden Img" />
                </div>
                <h1 className="text-2xl text-center font-bold">
                  <a
                    href="https://vasanthbalasubramaniyan.github.io/trip-advisor/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Greenden
                  </a>
                </h1>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 shadow-2xl p-6 rounded-xl flex flex-col items-center justify-center">
                <p className="mt-2 text-justify text-lg">
                  A responsive and visually appealing plant store website built
                  with Tailwind CSS and JavaScript. It features a modern layout,
                  interactive navigation, and mobile-friendly design.
                </p>
                <p className="text-center text-sm">
                  <a
                    href="https://vasanthbalasubramaniyan.github.io/trip-advisor/"
                    target="_blank"
                    className="text-lg font-bold underline"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[400px] perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white shadow-2xl p-6 rounded-xl">
                <div className="img-container flex items-center justify-center mb-5">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
                </div>
                <h1 className="text-2xl text-center font-bold">
                  <a
                    href="https://vasanthbalasubramaniyan.github.io/trip-advisor/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nostra e-Commerce
                  </a>
                </h1>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 shadow-2xl p-6 rounded-xl flex flex-col items-center justify-center">
                <p className="mt-2 text-justify text-lg">
                  A sleek and responsive eCommerce UI built with Tailwind CSS and
              JavaScript, featuring interactive product listings, a modern
              layout, and smooth navigation optimized for all devices.
                </p>
                <p className="text-center text-sm">
                  <a
                    href="https://vasanthbalasubramaniyan.github.io/Nostra/"
                    target="_blank"
                    className="text-lg font-bold underline"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[400px] perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white shadow-2xl p-6 rounded-xl">
                <div className="img-container mt-23 mb-5">
                  <img className="w-[100%] h-40" src={Udemy} alt="Greenden Img" />
                </div>
                <h1 className="text-2xl text-center font-bold">
        
                    Udemy CLONE
                  
                </h1>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 shadow-2xl p-6 rounded-xl flex flex-col items-center justify-center">
                <p className="mt-2 text-justify text-lg">
                  A responsive online course platform UI built with ReactJS and
              Tailwind CSS, featuring dynamic components, modern design, and a
              clean layout optimized for all screen sizes.
                </p>
                <p className="text-center text-sm">
                  <a
                    href="https://udemy-react-vasanth-bs-projects.vercel.app/"
                    target="_blank"
                    className="text-lg font-bold underline"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[400px] perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white shadow-2xl p-6 rounded-xl">
                <div className="img-container flex items-center justify-center mb-5">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=" p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 
           0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 
           9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
                </div>
                <h1 className="text-2xl text-center font-bold">
                  
                    PORTFOLIO
                  
                </h1>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 shadow-2xl p-6 rounded-xl flex flex-col items-center justify-center">
                <p className="mt-2 text-justify text-lg">
                  A responsive personal portfolio built with ReactJS and Tailwind
              CSS, showcasing projects and skills using interactive UI and donut
              charts for clean visual representation.
                </p>
                <p className="text-center text-sm">
                  <a
                    href="https://github.com/VasanthBalasubramaniyan/portfolio-new"
                    target="_blank"
                    className="text-lg font-bold underline"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[400px] perspective">
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white shadow-2xl p-6 rounded-xl">
                <div className="img-container flex items-center justify-center mb-5">
                  <img className="p-2" src={Python} alt="Greenden Img" />
                </div>
                <h1 className="text-2xl text-center font-bold">
                  
                    ATM - PYTHON
                </h1>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 shadow-2xl p-6 rounded-xl flex flex-col items-center justify-center">
                <p className="mt-2 text-justify text-lg">
                  A simple ATM system with PIN verification, supporting withdrawal,
              deposit (up to ₹10,000), balance inquiry, and fast cash. Includes
              error handling, balance checks, and a restart option for repeated
              use.
                </p>
                <p className="text-center text-sm">
                  <a
                    href="https://github.com/VasanthBalasubramaniyan/ATM-Python"
                    target="_blank"
                    className="text-lg font-bold underline"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
