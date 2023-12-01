import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import AuthDigZen from "../data/api-digzen";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomError from "../util/customError";

const Register = () => {
  const [formData, setFormData] = useState({ name: "name" });
  const handleFormValueBlur = (e, name) => {
    const formDataCopy = { ...formData };
    formDataCopy[name] = e.target.value;
    setFormData(formDataCopy);
  };

  const handleRegClick = async (e) => {
    e.preventDefault();
    const { name, email, phone, NIK, pw } = formData;
    try {
      if (name && email && phone && NIK && pw) {
        await AuthDigZen.registerUser(formData);
      } else {
        throw new CustomError("validationError",
          "Form tidak lengkap mohon lengkapi form terlebih dahulu"
        );
      }
    } catch (err) {
      console.log(err.message);
      if (err.name == "validationError") {
        toast.error(err.message);
      } else {
        toast.error(err);
      }
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <ToastContainer />
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
            <form name="formReg" id="formReg">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label htmlFor="name" className="label">
                  <span className="font-black label-text">Full Name</span>
                </label>
                <input
                  onBlur={(e) => handleFormValueBlur(e, "name")}
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label htmlFor="email" className="label">
                  <span className="font-black label-text">Email</span>
                </label>
                <input
                  onBlur={(e) => handleFormValueBlur(e, "email")}
                  id="email"
                  type="email"
                  placeholder="contoh@gmail.com"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label htmlFor="phone" className="label">
                  <span className="font-black label-text">Phone Number</span>
                </label>
                <input
                  onBlur={(e) => handleFormValueBlur(e, "phone")}
                  id="phone"
                  type="number"
                  placeholder="08999999"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>

              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label htmlFor="NIK" className="label">
                  <span className="font-black label-text">NIK</span>
                </label>
                <input
                  onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  id="NIK"
                  type="text"
                  placeholder="NIK"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label htmlFor="pw" className="label">
                  <span className="font-black label-text">Password</span>
                </label>
                <input
                  onBlur={(e) => handleFormValueBlur(e, "pw")}
                  id="pw"
                  type="Password"
                  placeholder="********"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>

              <div className="pt-4 pb-6">
                <button
                  onClick={handleRegClick}
                  id="tombolReg"
                  className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                >
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
