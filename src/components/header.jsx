import Me from '../assets/img/Me.JPG';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Header() {
  const [textRef, isTextVisible] = useScrollAnimation(0.2);
  const [imageRef, isImageVisible] = useScrollAnimation(0.3);

  const handleDownload = () => {
    const now = new Date();
    const timestamp = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
    const link = document.createElement('a');
    link.href = '/resume/Vasanth-Resume.pdf';
    link.download = `Vasanth_Resume_${timestamp}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="header-section__container mt-10 flex justify-between gap-10">
        <div 
          ref={textRef}
          className={`header-section__desc flex flex-col justify-center gap-4 leading-[26px] fade-in-left ${isTextVisible ? 'visible' : ''}`}
        >
          <p className="text-6xl font-medium gradient-text">HELLO!!!</p>
          <hr className="border-2 border-[#7A51EB] w-20" />
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
          <h2 className="text-5xl font-medium">DATA ENGINEER and FRONT END DEVELOPER</h2>
          <p className="text-2xl font-medium text-gray-600 mt-2">
            <span className="text-[#7A51EB] font-bold">Vibe Coder</span> 
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleDownload}
              className="hire-button text-white text-3xl p-2 border rounded-[10px] bg-[#7A51EB] hover:bg-white hover:text-black hover:border-[#7A51EB] hover:cursor-pointer btn-animated hover-lift"
            >
              HIRE ME
            </button>
          </div>
        </div>
        <div 
          ref={imageRef}
          className={`header-section__img fade-in-right ${isImageVisible ? 'visible' : ''}`}
        >
          <img 
            className="w-130 rounded-full shadow-2xl sm:w-100 float-animation hover-scale" 
            src={Me} 
            alt="Profile" 
          />
        </div>
      </div>
    </>
  );
}
