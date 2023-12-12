import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { logAPI, API } from "../data/api-digzen";
import { useEffect, useState } from "react";
import { useCookies, Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import CustomError from "../util/customError";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["userLog"]);
  const handleFormValue = (e, name) => {
    const formDataCopy = { ...formData };
    formDataCopy[name] = e.target.value;
    setFormData(formDataCopy);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) =>
      prevShowPassword === "password" ? "text" : "password"
    );
  };

  const handleLogClick = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const { email, password } = formData;
    try {
      if (email && password) {
        const response = await logAPI.post("", JSON.stringify(formData));

        if (response.status == 200) {
          const dec = jwtDecode(response.data.token);
          const roleResponse = await API.get(`users/${dec.userId}`);
          const { role } = roleResponse.data.user;
          console.log(role);
          setCookie("userLog", dec);
          setCookie("userData", roleResponse.data);
          Swal.fire({
            title: "Sukses",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            if (role == "admin") {
              navigate("/admin");
            } else {
              navigate("/");
            }
          });
        }
      } else {
        throw new CustomError(
          "validationError",
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
      setIsDisabled(false);
    }
  };

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
      />
      <div className="flex items-center justify-center h-screen py-10 bg-background">
        <div className="relative z-10 bg-white w-5/6 rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[35%]">
          {/* Isi kotak center di sini */}
          <button
            className="btn hover:bg-white hover:text-indigo hover:border-1 hover:border-indigo bg-indigo btn-sm ml-[2.4rem] mt-[1.5rem] text-white"
            onClick={() => navigate("/")}
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="px-10 pb-[1rem] text-2xl font-medium text-center text-black">
            {" "}
            Welcome to{" "}
            <span className="font-black">
              {" "}
              Digital <span className="text-indigo">Citizen</span>{" "}
            </span>{" "}
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="w-full animate__animated animate__bounceIn"
                  onChange={(e) => handleFormValue(e, "email")}
                />
              </div>
              <div className="animate__animated animate__bounceIn">
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type={showPassword}
                    variant="outlined"
                    className="w-full"
                    onChange={(e) => handleFormValue(e, "password")}
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
              </div>
              <div className="flex flex-row-reverse pt-2">
                <a className="link ">Lupa Password</a>
              </div>
              <div className="pt-4 pb-6">
                <button
                  onClick={handleLogClick}
                  disabled={isDisabled}
                  className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                >
                  Log In
                </button>
                <span className="text-xs -mt-[3px] ml-[2px] text-black">
                  belum memiliki akun?
                  <a
                    className="cursor-pointer text-indigo"
                    onClick={() => navigate("/register")}
                  >
                    {" "}
                    Register
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

export default Login;
