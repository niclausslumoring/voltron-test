import Image from "next/image";

export const Banner2 = () => {
  return (
    <div className="bg-white sm:pb-32 pb-16">
      <div className="sm:mx-10 mx-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://voltron.id/_next/image?url=%2Fwebsite%2Fabout-us-bg.png&w=1920&q=70")' }}>
        <div className="flex sm:p-32 p-12 items-center sm:w-1/2 w-full">
          <div className="flex flex-col gap-6">
            <h1 className="lato-font text-white font-bold sm:text-4xl text-2xl">
              The fastest growing SPKLU <br /> across Indonesia
            </h1>
            <h1 className="lato-font text-white font-normal sm:text-xl text-lg">Our goal is to provide a convenient, reliable charging network across Indonesia. Available in offices, malls, highways and residential areas.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
