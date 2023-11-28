import NavbarADM from "../../components/NavbarADM";
import user from "../../assets/images/user.png";

const BerandaADM = () => {
  return (
    <>
      <NavbarADM />
      <div className="bg-background h-screen">
        <div className="flex justify-center py-10 ">
          <div className="bg-white w-5/6 h-auto rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[45%] relative">
            {/* Isi kotak center di sini */}
            <div className=" py-5 md:flex md:gap-3 md:justify-center xl:gap-16">
              <div className="flex justify-center pb-3 md:pb-0 md:-ml-12">
                <div className="w-32 y-2 md:w-40">
                  <img
                    src={user}
                    alt=""
                    className="border-4 border-black rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col px-10 my-auto md:px-0">
                <h1 className="text-black text-2xl text-center font-black ">
                  Westlee Tantrum
                </h1>
                <div className="flex flex-row justify-between  pt-3 items-center">
                  <span className="label-text font-black">NIP</span>
                  <span className="max-w-screen md:w-3/5">8234785634</span>
                </div>
                <div className="flex flex-row justify-between  pt-3 items-center">
                  <span className="label-text font-black">Email</span>
                  <span className="max-w-screen md:w-3/5">gmail@gmail.com</span>
                </div>
                <div className="flex flex-row justify-between  pt-3 items-center">
                  <span className="label-text font-black">D.O.B</span>
                  <span className="max-w-screen md:w-3/5">99-99-00</span>
                </div>
              </div>
            </div>

            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="text-center p-3 font-black text-lg">
              Have a good day
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BerandaADM;
