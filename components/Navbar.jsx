import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full shadow-xl bg-dark-green">
      <div className="flex justify-between items-center py-4 sm:mx-10 mx-4">
        <div className="flex gap-14 items-center">
          <Image src="/images/index/logo.png" alt="Logo" width={150} height={150} />
          <a href="/how-it-works">
            <h1 className="uppercase font-normal text-white text-xl sm:block hidden">how it works</h1>
          </a>
          <a href="/mobile-app">
            <h1 className="uppercase font-normal text-white text-xl sm:block hidden">mobile app</h1>
          </a>
        </div>
        <div className="sm:flex hidden gap-14 items-center ">
          <a href="/comercial-solutions">
            <h1 className="uppercase font-normal text-white text-xl">
              comercial <br /> solutions
            </h1>
          </a>
          <a href="/contact-us">
            <h1 className="uppercase font-normal text-white text-xl">contact us</h1>
          </a>
          <div className="flex items-center gap-2">
            <Image src="/images/index/eng.png" alt="English" width={50} height={20} />
            <h1 className="uppercase font-normal text-white text-xl">en</h1>
          </div>
        </div>
        <button id="burgerButton" class="sm:hidden flex flex-col gap-1 items-center justify-center burger-menu-button cursor-pointer" onclick="toggleBurgerPopup()">
          <span class="w-9 h-1 rounded-full bg-white transition-all origin-top-right ease-in-out duration-300"></span>
          <span class="w-9 h-1 rounded-full bg-white transition-all ease-in-out duration-300"></span>
          <span class="w-9 h-1 rounded-full bg-white transition-all origin-bottom-right ease-in-out duration-300"></span>
        </button>
      </div>
    </div>
  );
};
