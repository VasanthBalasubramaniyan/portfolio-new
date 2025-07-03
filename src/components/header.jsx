// import home from "../assets/img/banner/home-right.png"
import Me from '../assets/img/Me.JPG'
// import { useEffect, useRef, useState } from 'react';
// import html2pdf from 'html2pdf.js';

export default function Header({resumeLink}) {
    
    const handleDownload = () => {
        const now = new Date();
        // Format date to DD-MM-YYYY
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = now.getFullYear();

        // Format time to HH-MM-SS
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        // const timestamp = `${day}-${month}-${year}_${hours}-${minutes}-${seconds}`;

    }
    return (
        <>
            <div id="home" className="header-section__container mt-10 flex justify-between gap-10">
                <div className="header-section__desc flex flex-col justify-center gap-4 leading-[26px]">
                    <p className="header-section__head text-6xl font-medium">HELLO!!!</p>
                    <hr />
                    <div className="text-5xl font-bold flex">
                        <h1 className="header-section__name">I'M <span style={{background: "linear-gradient(45deg, #7A51EB, #FF9A8B)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",fontWeight: "bold"}}>VASANTH B</span></h1>
                    </div>
                    <div className="text-5xl font-medium">
                        <h2 className="header-section__description">FRONT END DEVELOPER</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="hire-button text-white text-3xl p-2 border rounded-[10px] bg-[#7A51EB] hover:bg-white hover:text-black hover:border-[#7A51EB] hover:cursor-pointer">HIRE ME</button>
                        <button onClick={handleDownload} className="get-button text-3xl p-2 border border-[#7A51EB] rounded-[10px] hover:bg-[#7A51EB] hover:text-white hover:cursor-pointer">GET CV</button>
                    </div>
                    
                </div>
                <div className="header-section__img">
                    <img className="w-130 rounded-full shadow-2xl sm:w-100"  src={Me} alt="Home right" />
                </div>
            </div>
        </>
    )
}