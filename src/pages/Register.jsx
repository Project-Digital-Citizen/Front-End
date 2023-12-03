import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { regAPI } from "../data/api-digzen";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import CustomError from "../util/customError";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false)
  const handleFormValueBlur = (e, name) => {
    const formDataCopy = { ...formData };
    formDataCopy[name] = e.target.value;
    setFormData(formDataCopy);
  };

  const handleRegClick = async (e) => {
    e.preventDefault();
    setIsDisabled(true)
    const { email, nomor, nama, password, NIK } = formData;
    try {
      if (nama && email && nomor && NIK && password) {
        const response = await regAPI.post("", JSON.stringify(formData))

        if (response.status == 201) {
          Swal.fire({
            title: "Sukses", 
            icon: "success",
            text: response.data.message
          }).then(() => {
            
          })
        }
      } else {
        throw new CustomError("validationError",
          "Form tidak lengkap mohon lengkapi form terlebih dahulu"
        );
      }
    } catch (err) {
      console.log(err);
      if (err.name == "validationError") {
        toast.error(err.message);
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      setIsDisabled(false)
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
                  onBlur={(e) => handleFormValueBlur(e, "nama")}
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
                  onBlur={(e) => handleFormValueBlur(e, "nomor")}
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
                  onBlur={(e) => handleFormValueBlur(e, "password")}
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
                  disabled={isDisabled}
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
