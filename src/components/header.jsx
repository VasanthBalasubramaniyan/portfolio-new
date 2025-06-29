import home from "../assets/img/banner/home-right.png"
export default function Header() {

    const handleDownload = () => {
        const now = new Date();
        // Format: YYYY-MM-DD_HH-MM-SS
        const timestamp = now.toISOString().replace(/T/, '_').replace(/:/g, '-').split('.')[0];
        const link = document.createElement("a");
        link.href = "/public/Vasanth B.pdf"
        link.download = `Vasanth B ${timestamp}.pdf`;
        link.click();
    }
    return (
        <>
            <div className="header-section__container mt-10 flex justify-between gap-10">
                <div className="header-section__desc flex flex-col justify-center gap-2 leading-[26px]">
                    <p className="text-6xl font-medium">HELLO!!!</p>
                    <hr />
                    <div className="text-3xl font-bold sm:text-2xl">
                        <h1>I AM VASANTH B</h1>
                    </div>
                    <div className="text-2xl font-medium sm:text-xl">
                        <h2>FRONT END DEVELOPER</h2>
                    </div>
                    <div className="flex flex-col">
                        <button className="hire-button text-white p-2 border rounded-xl bg-[#7A51EB] hover:bg-white hover:text-black hover:border-[#7A51EB]">HIRE ME</button>
                        <button onClick={handleDownload} className="get-button p-2 border border-none rounded-xl hover:bg-[#7A51EB] hover:text-white">GET CV</button>
                    </div>
                    
                </div>
                <div className="header-section__img">
                    <img className="w-130"  src={home} alt="Home right" />
                </div>
            </div>
        </>
    )
}