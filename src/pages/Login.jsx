import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { logAPI, getUser } from "../data/api-digzen";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import CustomError from "../util/customError";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [_, setCookie] = useCookies(["userLog"]);
  const handleFormValueBlur = (e, name) => {
    const formDataCopy = { ...formData };
    formDataCopy[name] = e.target.value;
    setFormData(formDataCopy);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
          const roleResponse = await getUser.get("", dec.userId);
          const { role } = roleResponse.data.users[0];
          setCookie("userLog", dec);
          setCookie("userData", roleResponse.data);
          Swal.fire({
            title: "Sukses",
            icon: "success",
          }).then(() => {
            if (role == "admin") {
              navigate("/berandaadm");
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
            className="btn btn-sm ml-[2.4rem] mt-[1.5rem]"
            onClick={() => navigate("/")}
          >
            <IoMdArrowRoundBack />
          </button>
          <h1 className="pb-[1rem] px-10 text-2xl font-black text-center text-black">
            Welcome to Digital <span className="text-indigo">Citizen</span>
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label className="label">
                  <span className="font-black label-text">Email</span>
                </label>
                <input
                  onBlur={(e) => handleFormValueBlur(e, "email")}
                  type="email"
                  placeholder="contoh@gmail.com"
                  className="w-full input input-bordered input-md max-w-screen md:max-w-xs"
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label htmlFor="pw" className="label">
                  <span className="font-black label-text">Password</span>
                </label>
                <div className="relative w-full max-w-screen md:max-w-xs">
                  <input
                    onBlur={(e) => handleFormValueBlur(e, "password")}
                    id="pw"
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? (
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
                    className="link link-primary"
                    onClick={() => navigate("/register")}
                  >
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
