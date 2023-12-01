import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import CONFIG from "../config";


const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        src={ele}
        alt=""
        className="absolute top-0 right-0 z-0 object-cover object-left w-32 h-52"
      />{" "}
      {/* <div className="border-2 border-black "> */}
      <div className="flex items-center justify-center h-screen py-10 bg-background">
        <div className="relative z-10 w-5/6 bg-white rounded shadow-md y-10">
          {/* Isi kotak center di sini */}
          <h1 className="p-4 px-10 pt-6 text-2xl font-black text-center text-indigo">
            Register
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label className="label">
                  <span className="font-black label-text">Full Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Full Name"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label className="label">
                  <span className="font-black label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="contoh@gmail.com"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label className="label">
                  <span className="font-black label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="08999999"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>

              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label className="label">
                  <span className="font-black label-text">NIK</span>
                </label>
                <input
                  type="text"
                  placeholder="NIK"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label className="label">
                  <span className="font-black label-text">Password</span>
                </label>
                <input
                  type="Password"
                  placeholder="********"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>

              <div className="pt-4 pb-6">
                <button className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo">
                  Register
                </button>
                <span className="text-xs -mt-[3px] ml-[2px] text-black">
                  sudah memiliki akun?
                  <a
                    className="link link-primary"
                    onClick={() => navigate("/login")}
                  >
                    login
                  </a>
                </span>
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

export default Register;
