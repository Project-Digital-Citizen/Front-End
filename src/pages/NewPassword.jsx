import { useLocation, useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { API, resendOTP } from "../data/api-digzen";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import CustomError from "../util/customError";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const NewPassword = () => {
  const email = useLocation()?.state?.email;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [timer, setTimer] = useState(localStorage.getItem("lastTimerValue")); // 5 minutes in seconds
  const [resendDisabled, setResendDisabled] = useState(
    localStorage.getItem("lastTimerValue") > 0 ? true : false
  );
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

  const handleResendClick = async (e) => {
    e.preventDefault();
    if (email && !resendDisabled) {
      const response = await resendOTP.post("", JSON.stringify({ email }));

      if (response.status === 200) {
        setTimer(300); // Reset timer to 5 minutes
        setResendDisabled(true); // Disable resend button
        Swal.fire({
          title: "Check Email",
          icon: "success",
          text: response.data.message,
        });
      }
    }
  };

  const handleLogClick = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const { otp, newPassword } = formData;
    try {
      if (email && otp && newPassword) {
        const response = await API.post(
          "users/change-password",
          JSON.stringify({ email, otp, newPassword })
        );

        if (response.status == 200) {
          Swal.fire({
            title: "Sukses",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            navigate("/login");
          });
        }
      } else {
        throw new CustomError(
          "validationError",
          "Minimal Password 8 Character atau OTP tidak diisi"
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

    if (!email) {
      navigate("/login");
    }
  });

  useEffect(() => {
    let timerId;

    if (timer > 0) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => Math.max(0, prevTimer - 1));
      }, 1000);
    } else {
      setResendDisabled(false); // Enable resend button when the timer reaches 0
    }

    return () => clearInterval(timerId);
  }, [timer]);

  useEffect(() => {
    // Save the timer value to localStorage
    localStorage.setItem("lastTimerValue", timer);
  }, [timer]);
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
                  label="OTP"
                  type="text"
                  inputProps={{ minLength: 8 }}
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "otp")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="New Password"
                  type={showPassword}
                  inputProps={{ minLength: 4 }}
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "newPassword")}
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
                <p>
                  <span className={resendDisabled ? "hidden" : ""}>
                    Didn't recieve your code?
                  </span>
                  <span className={resendDisabled ? "" : "hidden"}>
                    You can re-send your OTP in:
                  </span>

                  <span
                    className={
                      !resendDisabled
                        ? "text-blue-600 visited:text-purple-600 cursor-pointer"
                        : "hidden"
                    }
                    onClick={handleResendClick}
                  >
                    {" "}
                    Resend Code!
                  </span>
                  <span className={resendDisabled ? "" : "hidden"}>
                    {" "}
                    {formatTime(timer)}
                  </span>
                </p>
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

// Helper function to format time
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
  return formattedTime;
};
export default NewPassword;
