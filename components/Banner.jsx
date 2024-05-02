import Image from "next/image";

export const Banner = () => {
  return (
    <div className="bg-white pt-32">
      <div className="sm:mx-10 mt-16 sm:bg-cover sm:bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://voltron.id/_next/image?url=%2Fwebsite%2Fbackgrounds2.png&w=1920&q=90")' }}>
        <div className="flex sm:p-32 p-12 items-center ">
          <div className="flex flex-col gap-6">
            <Image src="/images/index/animasi.gif" alt="banner" width={300} height={20} />
            <h1 className="text-black font-normal sm:text-xl text-lg sm:text-left text-center">EVCuzz Charging Network is now Voltron!</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
