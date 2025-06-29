import home from "../assets/img/banner/home-right.png"
export default function Header() {
    return (
        <>
            <div className="container mt-10 flex gap-10 justify-evenly">
                <div className="flex flex-col justify-center leading-[26px]">
                    <p className="text-3xl font-medium">HELLO</p>
                    <h1 className="text-3xl font-bold">I AM VASANTH B</h1>
                    <h2 className="text-2xl font-medium">FRONT END DEVELOPER</h2>
                    <button className="hire-button text-white p-2 border rounded-xl bg-[#7A51EB]">HIRE ME</button>
                    <button className="get-button p-2 border border-none rounded-xl hover:bg-[#7A51EB] hover:text-white">GET CV</button>
                </div>
                <div>
                    <img className="w-100" src={home} alt="Home right" />
                </div>
            </div>
        </>
    )
}