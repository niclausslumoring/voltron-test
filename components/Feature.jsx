import Image from "next/image";

export const Feature = () => {
  return (
    <div className="bg-white flex flex-col gap-10 py-32">
      <div className="flex flex-col gap-6 justify-center item-center text-center px-12">
        <h1 className="text-black font-bold text-4xl">Voltron for Everyone</h1>
        <h1 className="text-black font-normal text-xl">
          As a licensed SPKLU operator, Voltron is building one ecosystem for charging networks across Indonesia. Discover into Voltron’s impact on a better environment, and we strive to build accessible and sustainable electric transportation solutions.
        </h1>
        <div className="flex sm:flex-row flex-col gap-10 w-full">
          <div className="flex flex-col gap-6">
            <Image src="/images/index/sklu.png" alt="Logo" width={1200} height={400} />
            <h1 className="text-black font-bold text-xl">Licensed SPKLU</h1>
            <h1 className="text-black font-normal text-xl">Voltron holds the authorization & permission from Indonesia’s Government to operate as licensed EV charging station operator in Indonesia.</h1>
          </div>
          <div className="flex flex-col gap-6">
            <Image src="/images/index/adtec.png" alt="Logo" width={1200} height={400} />
            <h1 className="text-black font-bold text-xl">Advanced Technology</h1>
            <h1 className="text-black font-normal text-xl">Need to fill up on the road? Enjoy a seamless charging experience through Voltron app. Everything is accessible via your smartphone.</h1>
          </div>
          <div className="flex flex-col gap-6">
            <Image src="/images/index/oneeco.png" alt="Logo" width={1200} height={400} />
            <h1 className="text-black font-bold text-xl">One Ecosystem</h1>
            <h1 className="text-black font-normal text-xl">Voltron is building one convenient ecosystem for charging network across Indonesia where you can effortlessly charge your EV at all locations.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
