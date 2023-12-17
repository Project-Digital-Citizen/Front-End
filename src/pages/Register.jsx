import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { regAPI } from "../data/api-digzen";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import CustomError from "../util/customError";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Cookies } from "react-cookie";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState("password");

  const handleFormValueBlur = (e, name) => {
    const formDataCopy = { ...formData };
    let inputValue = e.target.value;
    if (name === "NIK") {
      inputValue = inputValue.replace(/\D/g, "").slice(0, 16);
    }
    formDataCopy[name] = inputValue;
    setFormData(formDataCopy);
  };
  //   formDataCopy[name] = e.target.value;
  //   setFormData(formDataCopy);
  // };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) =>
      prevShowPassword === "password" ? "text" : "password"
    );
  };

  const handleRegClick = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const { email, nomor, nama, password, NIK } = formData;

    try {
      // Validasi form
      if (!nama || !email || !nomor || !NIK || !password) {
        throw new CustomError(
          "validationError",
          "Form tidak lengkap, mohon lengkapi form terlebih dahulu"
        );
      }

      // Validasi NIK
      if (NIK.length !== 16) {
        throw new CustomError(
          "validationError",
          "NIK harus terdiri dari 16 digit"
        );
      }

      // Validasi password
      if (password.length < 8) {
        throw new CustomError(
          "validationError",
          "Password harus minimal 8 karakter"
        );
      }

      // Lakukan registrasi jika semua validasi berhasil
      const response = await regAPI.post("", JSON.stringify(formData));

      // try {
      //   if (nama && email && nomor && NIK && password) {
      //     const response = await regAPI.post("", JSON.stringify(formData));

      if (response.status == 201) {
        Swal.fire({
          title: "Sukses",
          icon: "success",
          text: response.data.message,
        }).then(() => {
          navigate("/otp", { state: { email } });
        });
      }
      // } else {
      //   throw new CustomError(
      //     "validationError",
      //     "Form tidak lengkap mohon lengkapi form terlebih dahulu"
      //   );
      // }
    } catch (err) {
      console.log(err);
      if (err.name == "validationError") {
        toast.error(err.message);
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      setIsDisabled(false);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (new Cookies().get("userData")) {
      navigate("/");
    }
  });

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
          <button
            className="btn hover:bg-white hover:text-indigo hover:border-1 hover:border-indigo bg-indigo btn-sm ml-[2.4rem] mt-[1.5rem] text-white"
            onClick={() => navigate("/")}
          >
            <IoMdArrowRoundBack />
          </button>
          {/* Isi kotak center di sini */}
          <h1 className="px-10 pb-[1rem] text-2xl font-black text-center text-indigo">
            Register
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form name="formReg" id="formReg">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Nama Lengkap"
                  placeholder="Nama Lengkap"
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "nama")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  inputProps={{ style: { textTransform: "lowercase" } }}
                  variant="outlined"
                  className="w-full"
                  placeholder="contoh@contoh.com"
                  onBlur={(e) => handleFormValueBlur(e, "email")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  type="number"
                  inputProps={{ minLength: 10 }}
                  placeholder="08xxxx"
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "nomor")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="NIK"
                  type="text"
                  // maxLength={16}
                  inputProps={{
                    minLength: 16,
                    maxLength: 16,
                    pattern: "[0-9]*",
                  }}
                  placeholder="xxxxxxxxxx"
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "NIK")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type={showPassword}
                  inputProps={{ minLength: 8 }}
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "password")}
                />
                <div className="relative ">
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute transform -translate-y-1/2 cursor-pointer bottom-3 md:top-1/2 right-4"
                  >
                    {showPassword == "text" ? (
                      <span role="img" aria-label="Hide Password">
                        <FaRegEyeSlash />
                      </span>
                    ) : (
                      <span role="img" aria-label="Show Password">
                        <FaRegEye />
                      </span>
                    )}
                  </button>
                </div>
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
                    className="cursor-pointer text-indigo"
                    onClick={() => navigate("/login")}
                  >
                    {" "}
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
