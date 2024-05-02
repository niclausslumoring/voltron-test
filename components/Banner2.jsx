import Image from "next/image";

export const Banner2 = () => {
  return (
    <div className="bg-white pb-32">
      <div className="mx-10  bg-cover bg-center" style={{ backgroundImage: 'url("https://voltron.id/_next/image?url=%2Fwebsite%2Fabout-us-bg.png&w=1920&q=70")' }}>
        <div className="flex p-32 items-center w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="text-white font-bold text-4xl">
              The fastest growing SPKLU <br /> across Indonesia
            </h1>
            <h1 className="text-white font-normal text-xl">Our goal is to provide a convenient, reliable charging network across Indonesia. Available in offices, malls, highways and residential areas.</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
