import about from "../assets/img/banner/about-us.png"
export default function About() {

    return (
        <>
            <div id='about' className="about-section__container mt-20 flex justify-between gap-10">
                <div>

                    <div className="header-section__img">
                        <img className="hidden md:flex float-left w-[130] md:w-100 "  src={about} alt="Home right" />
                    </div>

                    <div className="about-section__desc flex flex-col justify-center">
                        <h1 className="about-section__head text-6xl font-bold md:text-5xl">ABOUT ME</h1>
                        <p className="about-section__desc mt-6 text-2xl text-justify md:text-xl">I’m a passionate and detail-oriented Computer Science graduate with 2.7 years of experience as a Data Engineer and a strong foundation in web development. I bring a solid skill set in Python, PySpark, SQL, data warehousing, and data modeling, along with hands-on experience using AWS services. I'm also proficient in ReactJS and version control with GitHub, and have deployed full-stack applications using platforms like Render. I enjoy building responsive, user-friendly interfaces and writing clean, maintainable code. I'm eager to contribute to real-world projects and continuously grow as a developer and data professional.</p>
                    </div>
                </div>
            </div>
        </>
    )
}