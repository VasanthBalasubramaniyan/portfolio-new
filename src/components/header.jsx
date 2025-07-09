import html2pdf from 'html2pdf.js';
import Me from '../assets/img/Me.JPG';
import { useRef } from 'react';

export default function Header() {
  const resumeRef = useRef();

  const handleDownload = () => {
    const now = new Date();
    const timestamp = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2,'0')}-${String(now.getSeconds()).padStart(2, '0')}`;

    const options = {
      margin: 0.3,
      filename: `Vasanth_Resume_${timestamp}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(options).from(resumeRef.current).save();
  };

  return (
    <>
      <div className="header-section__container mt-10 flex justify-between gap-10">
        <div className="header-section__desc flex flex-col justify-center gap-4 leading-[26px]">
          <p className="text-6xl font-medium">HELLO!!!</p>
          <hr />
          <div className="text-5xl font-bold flex">
            <h1>
              I'M{' '}
              <span
                style={{
                  background: 'linear-gradient(45deg, #7A51EB, #FF9A8B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                VASANTH B
              </span>
            </h1>
          </div>
          <h2 className="text-5xl font-medium">FRONT END DEVELOPER</h2>
          <div className="flex flex-col gap-4">
            <button className="hire-button text-white text-3xl p-2 border rounded-[10px] bg-[#7A51EB] hover:bg-white hover:text-black hover:border-[#7A51EB] hover:cursor-pointer">
              <a href="mailto:vasanthbalsubramaniyan08@gmail.com">HIRE ME </a>
            </button>
            {/* <button
              onClick={handleDownload}
              className="get-button text-3xl p-2 border border-[#7A51EB] rounded-[10px] hover:bg-[#7A51EB] hover:text-white hover:cursor-pointer"
            >
              GET CV
            </button> */}
          </div>
        </div>
        <div className="header-section__img">
          <img className="w-130 rounded-full shadow-2xl sm:w-100" src={Me} alt="Profile" />
        </div>
      </div>
    </>
  );
}
