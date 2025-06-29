import '../App.css'
export default function Navbar() {
  return (
    <>
      <div className="nav-container mt-4 shadow-lg">
        <div className="nav-container__desc p-6 flex sm:justify-between">
            <div>
            <h1 className="nav-container__head text-2xl font-bold hover:text-[#7A51EB] hover:cursor-pointer">VASANTH</h1>
            </div>
            <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 md:hidden"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>

            <ul className="hidden md:flex justify-between items-center gap-6 text-lg font-medium">
                <li className="hover:text-[#7A51EB] hover:cursor-pointer">HOME</li>
                <li className="hover:text-[#7A51EB] hover:cursor-pointer">ABOUT</li>
                <li className="hover:text-[#7A51EB] hover:cursor-pointer">CONTACT</li>
            </ul>
            </div>
        </div>
      </div>
    </>
  );
}
