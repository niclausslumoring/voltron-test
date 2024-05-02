import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full shadow-xl bg-dark-green">
      <div className="flex justify-between items-center py-4 mx-10">
        <div className="flex gap-14 items-center">
          <Image src="/images/index/logo.png" alt="Logo" width={150} height={150} />
          <a href="/how-it-works">
            <h1 className="uppercase font-normal text-white text-xl">how it works</h1>
          </a>
          <a href="/mobile-app">
            <h1 className="uppercase font-normal text-white text-xl">mobile app</h1>
          </a>
        </div>
        <div className="flex gap-14 items-center ">
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
      </div>
    </div>
  );
};
