export default function Navbar() {
    return(
        <>
            <div className="w-full mt-4 flex justify-evenly">
                <div>
                    <h1 className="text-2xl font-bold">VASANTH</h1>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 md:hidden">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                    <ul className="hidden md:flex justify-between gap-6 text-l font-medium">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
                        
        </>
    )   
}
