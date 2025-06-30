import Trip from '../assets/img/projects/tripadvisor.png';

export default function Projects() {
    return (
        <>
            <div id="projects" className="projects-section__conatiner mt-20">
                <div className="projects-section__head">
                    <h1 className="text-6xl text-center mb-15 font-bold md:text-5xl">PROJECTS</h1>
                </div>

                <div className="project-section__cards__container flex flex-wrap justify-center gap-8 mt-10">

                    <div className="project-section__card shadow-2xl p-6 w-[300px]">
                        <div className="img-container flex justify-center mb-5">
                            <img className="w-20 p-2" src={Trip} alt="Trip Advisor Img" />
                        </div>
                        <h1 className="text-2xl text-center font-bold">TRIP ADVISOR CLONE</h1>
                        <p className="mt-5 text-justify text-sm">
                            A travel review and booking platform inspired by TripAdvisor. Built with modern web
                            technologies, it features interactive maps, location-based listings, user reviews, and
                            a responsive UI to explore destinations, hotels, and restaurants seamlessly.
                        </p>
                    </div>

                    <div className="project-section__card shadow-2xl p-6 w-[300px]">
                        <div className="img-container flex justify-center mb-5">
                            <img className="w-20 p-2" src={Trip} alt="Trip Advisor Img" />
                        </div>
                        <h1 className="text-2xl text-center font-bold">Greenden</h1>
                        <p className="mt-5 text-justify text-sm">
                            A responsive and visually appealing plant store website built with Tailwind CSS and JavaScript. It features a modern layout, interactive navigation, and mobile-friendly design, showcasing products and enhancing user experience.
                        </p>
                    </div>

                    <div className="project-section__card shadow-2xl p-6 w-[300px]">
                        <div className="img-container flex justify-center mb-5">
                            <img className="w-20 p-2" src={Trip} alt="Trip Advisor Img" />
                        </div>
                        <h1 className="text-2xl text-center font-bold">Nostra e-Commerce</h1>
                        <p className="mt-5 text-justify text-sm">
                            A sleek and responsive eCommerce UI built with Tailwind CSS and JavaScript, featuring interactive product listings, a modern layout, and smooth navigation optimized for all devices.
                        </p>
                    </div>

                    <div className="project-section__card shadow-2xl p-6 w-[300px]">
                        <div className="img-container flex justify-center mb-5">
                            <img className="w-20 p-2" src={Trip} alt="Trip Advisor Img" />
                        </div>
                        <h1 className="text-2xl text-center font-bold">Udemy CLONE</h1>
                        <p className="mt-5 text-justify text-sm">
                            A responsive online course platform UI built with ReactJS and Tailwind CSS, featuring dynamic components, modern design, and a clean layout optimized for all screen sizes.
                        </p>
                    </div>

                    <div className="project-section__card shadow-2xl p-6 w-[300px]">
                        <div className="img-container flex justify-center mb-5">
                            <img className="w-20 p-2" src={Trip} alt="Trip Advisor Img" />
                        </div>
                        <h1 className="text-2xl text-center font-bold">Portfolio</h1>
                        <p className="mt-5 text-justify text-sm">
                           A responsive personal portfolio built with ReactJS and Tailwind CSS, showcasing projects and skills using interactive UI and donut charts for clean visual representation.
                        </p>
                    </div>

                    <div className="project-section__card shadow-2xl p-6 w-[300px]">
                        <div className="img-container flex justify-center mb-5">
                            <img className="w-20 p-2" src={Trip} alt="Trip Advisor Img" />
                        </div>
                        <h1 className="text-2xl text-center font-bold">ATM - Python</h1>
                        <p className="mt-5 text-justify text-sm">A simple ATM system with PIN verification, supporting withdrawal, 
                            deposit (up to ₹10,000), balance inquiry, and fast cash. Includes error handling,
                             balance checks, and a restart option for repeated use.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}
