import Image from "next/image";

export const Banner = () => {
  return (
    <div className="bg-white pt-32">
      <div className="mx-10 mt-16 bg-cover bg-center" style={{ backgroundImage: 'url("https://voltron.id/_next/image?url=%2Fwebsite%2Fbackgrounds2.png&w=1920&q=90")' }}>
        <div className="flex p-32 items-center ">
          <div className="flex flex-col gap-6">
            <Image src="/images/index/animasi.gif" alt="banner" width={300} height={20} />
            <h1 className="text-black font-normal text-xl">EVCuzz Charging Network is now Voltron!</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
