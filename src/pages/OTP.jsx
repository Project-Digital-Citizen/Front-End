import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";

const OTP = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        src={ele}
        alt=""
        className="absolute top-0 right-0 z-0 object-cover object-left w-32 h-52"
      />
      <div className="flex items-center justify-center h-screen py-10 bg-background">
        <div className="relative z-10 bg-white w-5/6 rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[35%]">
          {/* Isi kotak center di sini */}
          <h1 className="p-4 px-10 pt-6 text-2xl font-black text-center text-black">
            OTP
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <input
                  type="number"
                  placeholder="OTP"
                  className="w-full mx-auto input input-bordered input-md max-w-screen md:max-w-xs"
                />
              </div>

              <div className="pt-4 pb-6">
                <button className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo">
                  OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
        src={ele}
        alt=""
        className="absolute left-0 z-0 object-cover object-right w-32 h-52 -bottom-0"
      />
    </>
  );
};
export default OTP;
