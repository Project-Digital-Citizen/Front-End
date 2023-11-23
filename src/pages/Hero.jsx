import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ktp from "../assets/images/ktp.png";
import domisili from "../assets/images/domisili.png";

import ilus from "../assets/images/ilustrasi01.png";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="bg-indigo ">
        <div className="px-6 max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0 lg:h-[25rem]">
          <div className="text-white py-5 md:p-12 flex-1 md:my-auto lg:mb-[34px]">
            <img
              src={ilus}
              alt="Laptop"
              className="sm:mt-6 h-full w-full object-cover object-center lg:hidden"
            />
            <h1 className="text-5xl font-bold mb-3">Let's Gooo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
              soluta. Asperiores omnis labore reiciendis possimus ab temporibus
              deserunt voluptatum cum.
            </p>
          </div>
          <div className="hidden lg:flex w-[500px] h-auto p-5 mx-auto my-auto lg:mb-1">
            <img src={ilus} alt="Laptop" className="object-cover " />
          </div>
        </div>
      </div>
      {/*  */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 250">
        <path
          fill="#83A2FF"
          fillOpacity="1"
          d="M0,128L60,149.3C120,171,240,213,360,202.7C480,192,600,128,720,117.3C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/*  */}
      <div className="bg-white">
        <div className="px-6 max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0">
          <div className="text-black py-5 md:p-12 flex-1 md:my-auto lg:hidden ">
            <img
              src={ilus}
              alt="Laptop"
              className="sm:mt-6 h-full w-full object-cover object-center "
            />
            <div className="lg:hidden">
              <h1 className="text-5xl font-bold mb-3">Let's Gooo</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus, soluta. Asperiores omnis labore reiciendis possimus ab
                temporibus deserunt voluptatum cum.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex w-[800px] h-auto p-5 mx-auto">
            <img src={ilus} alt="Laptop" className="object-cover " />
          </div>
          <div className="hidden lg:flex flex-col h-auto p-5 mx-auto my-auto mr-6 ">
            <h1 className="text-5xl font-bold mb-3">Let's Gooo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
              soluta. Asperiores omnis labore reiciendis possimus ab temporibus
              deserunt voluptatum cum.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
        <path
          fill="#83A2FF"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,128C672,160,768,224,864,224C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/*  */}
      <div className="bg-indigo ">
        <div className="px-6 max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0 lg:h-[30rem]">
          <div className="text-white py-5 md:p-12 flex-1 md:my-auto">
            <div className="flex my-10 w-[20rem] h-[25rem] bg-white rounded-xl border mx-auto md:hidden">
              <div className="space-y-6 mx-auto my-auto">
                <img src={ktp} alt="KTP" className="shadow-lg mx-auto" />
                <p className="text-center text-xl font-black text-black">KTP</p>
                <p className="text-center px-2 text-md font-medium text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam pariatur suscipit ut, expedita aspernatur autem.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex my-10 w-[20rem] h-[25rem] bg-white rounded-xl border mx-auto md:hidden">
              <div className="space-y-6 mx-auto my-auto">
                <img
                  src={domisili}
                  alt="Surat Domisili"
                  className="shadow-lg mx-auto"
                />
                <p className="text-center text-xl font-black text-black">
                  Surat Domisili
                </p>
                <p className="text-center px-2 text-md font-medium text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam pariatur suscipit ut, expedita aspernatur autem.
                </p>
              </div>
            </div>

            {/*  */}
            <h1 className="text-5xl font-bold mb-3">Let's Gooo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
              soluta. Asperiores omnis labore reiciendis possimus ab temporibus
              deserunt voluptatum cum.
            </p>
          </div>
          <div className="hidden md:flex gap-4 w-auto h-auto p-5 mx-auto my-auto lg:mr-6">
            <div className="flex w-[20rem] h-[25rem] bg-white rounded-xl border mx-auto">
              <div className="space-y-6 mx-auto my-auto">
                <img src={ktp} alt="KTP" className="shadow-lg mx-auto" />
                <p className="text-center text-xl font-black text-black">KTP</p>
                <p className="text-center px-2 text-md font-medium text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam pariatur suscipit ut, expedita aspernatur autem.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex w-[20rem] h-[25rem] bg-white rounded-xl border mx-auto">
              <div className="space-y-6 mx-auto my-auto">
                <img
                  src={domisili}
                  alt="Surat Domisili"
                  className="shadow-lg mx-auto"
                />
                <p className="text-center text-xl font-black text-black">
                  Surat Domisili
                </p>
                <p className="text-center px-2 text-md font-medium text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam pariatur suscipit ut, expedita aspernatur autem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Hero;
