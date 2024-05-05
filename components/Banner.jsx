import Image from "next/image";
// import { useClientEffect, useClientState } from "next/client";
// import { getAllChargeStations } from "../../src/api/chargeStation";

export const Banner = () => {
  // const [chargeStations, setChargeStations] = useClientState([]);

  // useClientEffect(() => {
  //   const fetchChargeStations = async () => {
  //     try {
  //       const data = await getAllChargeStations();
  //       setChargeStations(data);
  //     } catch (error) {
  //       console.error("Error fetching charge stations:", error);
  //     }
  //   };

  //   fetchChargeStations();
  // }, []);
  return (
    <div className="bg-white pt-32">
      <div className="sm:mx-10 mt-16 sm:bg-cover sm:bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://voltron.id/_next/image?url=%2Fwebsite%2Fbackgrounds2.png&w=1920&q=90")' }}>
        <div className="flex sm:p-32 p-12 items-center ">
          <div className="flex flex-col gap-6">
            <Image src="/images/index/animasi.gif" alt="banner" width={300} height={20} />
            <h1 className="lato-font text-black font-normal sm:text-xl text-lg sm:text-left text-center">EVCuzz Charging Network is now Voltron!</h1>
          </div>
          {/* {chargeStations.map((station) => (
              <div key={station.id}>
                <h2>{station.name}</h2>
              </div>
            ))} */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

// export default Banner;
