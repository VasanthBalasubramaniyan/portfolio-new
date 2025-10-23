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
                            I'm a passionate and detail-oriented Computer Science graduate with 2.7 years of experience as a Data Engineer and a strong foundation in web development. I bring a solid skill set in Python, PySpark, SQL, data warehousing, and data modeling, along with hands-on experience using AWS services. I'm also proficient in ReactJS and version control with GitHub, and have deployed full-stack applications using platforms like Render. I enjoy building responsive, user-friendly interfaces and writing clean, maintainable code. I'm eager to contribute to real-world projects and continuously grow as a developer and data professional.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}