import Image from "next/image";

export const Discover = () => {
  return (
    <div className="bg-white pb-32">
      <div className="flex sm:flex-row flex-col justify-center items-center gap-10 mx-10">
        <div className="flex flex-col gap-6 sm:w-1/2 w-full">
          <h1 className="text-black text-4xl font-semibold">Discover Chargers On-the-Go</h1>
          <h1 className="text-black text-xl font-normal">
            Open Voltron app to quickly find the nearest charging station around you. <br /> <br />
            Find the number of available chargers, types and speeds at each location. Monitor your charging session in real time and enjoy seamless contactless payment.
            <div className="flex gap-6 mt-6">
              <Image src="/images/index/play.png" alt="Logo" width={150} height={400} />
              <Image src="/images/index/appstore.png" alt="Logo" width={150} height={400} />
            </div>
          </h1>
        </div>
        <div>
          <Image src="/images/index/discover.png" alt="Logo" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};
