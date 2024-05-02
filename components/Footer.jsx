import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bottom-0 w-full shadow-xl z-[100] bg-dark-green py-10">
      <div className="flex justify-center items-center flex-col">
        <div>
          <Image src="/images/index/footer/logo.png" alt="banner" width={200} height={20} />
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center mt-6 sm:gap-10 gap-6">
          <a href="">
            <h1 className="sm:text-xl text-lg text-white font-normal">How It Works</h1>
          </a>
          <a href="">
            <h1 className="sm:text-xl text-lg text-white font-normal">Mobile App</h1>
          </a>
          <a href="">
            <h1 className="sm:text-xl text-lg text-white font-normal">Commercial</h1>
          </a>
          <a href="">
            <h1 className="sm:text-xl text-lg text-white font-normal">Contact Us</h1>
          </a>
          <a href="">
            <h1 className="sm:text-xl text-lg text-white font-normal">Privacy Policy</h1>
          </a>
          <a href="">
            <h1 className="sm:text-xl text-lg text-white font-normal">Terms & Condition</h1>
          </a>
        </div>
        <hr className="w-3/4 my-10" />
        <div className="">
          <h1 className="sm:text-lg text-sm text-white font-normal text-center">Copyright © 2024 Voltron - PT. Exelly Elektrik Indonesia. All Rights Reserved.</h1>
        </div>
      </div>
    </div>
  );
};
