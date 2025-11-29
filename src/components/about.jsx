import about from "../assets/img/banner/about-us.png"
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
    const [imageRef, isImageVisible] = useScrollAnimation(0.2);
    const [textRef, isTextVisible] = useScrollAnimation(0.3);

    return (
        <>
            <div id='about' className="about-section__container mt-20 flex justify-between gap-10">
                <div>

                    <div 
                        ref={imageRef}
                        className={`header-section__img fade-in-left ${isImageVisible ? 'visible' : ''}`}
                    >
                        <img 
                            className="hidden md:flex float-left w-[130] md:w-100 float-animation hover-scale"  
                            src={about} 
                            alt="Home right" 
                        />
                    </div>

                    <div 
                        ref={textRef}
                        className={`about-section__desc flex flex-col justify-center fade-in-right ${isTextVisible ? 'visible' : ''}`}
                    >
                        <h1 className="about-section__head text-6xl font-bold md:text-5xl gradient-text">ABOUT ME</h1>
                        <p className="about-section__desc mt-6 text-2xl text-justify md:text-xl leading-relaxed">
                            I'm a motivated and detail-oriented Data Engineering & Analytics enthusiast with strong skills in Python, SQL, PySpark, and AWS (S3, Glue). I enjoy building data-focused projects involving cleaning, automation, and dashboard creation, and I’m comfortable working with databases like MySQL, MS SQL, and TablePlus.Along with my data skills, I also work with ReactJS and GitHub, and I’ve deployed full-stack applications on platforms such as Render. I’m passionate about learning, experimenting, and turning data into meaningful solutions. 
                            <br/><br/>
                            As a <span className="font-bold text-[#1F3A8A]">vibe coder</span>, I thrive on creative problem-solving and intuitive development approaches. I'm well-versed in <span className="font-bold text-[#1F3A8A]">AI technologies</span> and leverage modern AI tools to enhance my development workflow and create innovative solutions. I enjoy building responsive, user-friendly interfaces and writing clean, maintainable code. I'm eager to contribute to real-world projects and continuously grow as a developer and data professional.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}