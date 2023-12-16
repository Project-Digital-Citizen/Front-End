import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { logAPI, API } from "../data/api-digzen";
import { useEffect, useState } from "react";
import { useCookies, Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import CustomError from "../util/customError";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const NewPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["userLog"]);
  const handleFormValueBlur = (e, name) => {
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
    const { password } = formData;
    try {
      if (password) {
        const response = await logAPI.post("", JSON.stringify(formData));

        if (response.status == 200) {
          const dec = jwtDecode(response.data.token);
          const roleResponse = await API.get(`users/${dec.userId}`);
          const { role } = roleResponse.data.user;
          setCookie("userLog", dec, {
            expires: new Date(Date.now() + dec.exp),
          });
          setCookie("userData", roleResponse.data, {
            expires: new Date(Date.now() + dec.exp),
          });
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
          "Minimal Password 8 Character"
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

          <h1 className="px-10 py-[1rem] text-2xl font-medium text-center text-black">
            New Password
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="New Password"
                  type={showPassword}
                  inputMode="text"
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
                  onClick={handleLogClick}
                  disabled={isDisabled}
                  className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                >
                  Confirm
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

export default NewPassword;
