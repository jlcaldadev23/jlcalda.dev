import Navbar from "../components/Navbar";
import Hello from "../components/Hello";

import myPic from "../assets/self.jpg";

const Landing = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-4/5 bg-honey-yellow">
          <Navbar />
          <div className="w-screen border-b-[1px] border-black" />

          <div className="mt-8 grid grid-cols-1 place-items-center">
            <div className="py-4 font-playfair text-6xl font-semibold text-dark-purple tracking-tighter">
              <Hello />
            </div>
            {/*PHOTO*/}
            <div className="flex justify-center items-center">
              <img src={myPic} alt="man with laptop" className="w-2/3" />
            </div>
            <div className="flex justify-end items-center">
              <p className="font-playfair text-7xl font-light mb-6 tracking-tighter">
                I'm Joey.
              </p>
            </div>
            {/*DESCRIPTION*/}
            <div className="pr-8 pb-2 mt-8 bg-black pl-2 rounded-tr-3xl w-2/3">
              <p className="text-cultured text-md font-semibold font-nunito tracking-tight">
                WEB DEVELOPER. UI DESIGNER.
              </p>
              <p className="text-cultured text-lg font-semibold font-nunito tracking tight">
                JAVASCRIPT ENGINEER
              </p>
            </div>
            {/*CTA*/}
            <div className="mt-4">
              <button className="text-md border-2 border-cultured font-bold tracking-wide px-4 py-2 rounded-tl-md rounded-bl-md bg-cultured text-dark-purple font-playfair hover:scale-105 duration-500 transition-all">
                Let's Talk
              </button>
              <button className="text-md border-2 border-dark-purple font-bold tracking-wide px-4 py-2 rounded-tr-md rounded-br-md text-dark-purple font-playfair hover:scale-105 duration-500 transition-all">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="h-1/3 bg-cultured">a</div>
      </div>
    </>
  );
};

export default Landing;
