import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { otpAPI, resendOTP } from "../data/api-digzen";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CustomError from "../util/customError";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";

const OTP = () => {
  const email = useLocation()?.state?.email;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(localStorage.getItem("lastTimerValue")); // 5 minutes in seconds
  // const [hideResend, setHideResend] = useState('none');
  const [resendDisabled, setResendDisabled] = useState(
    localStorage.getItem("lastTimerValue") > 0 ? true : false
  );

  const handleFormValueBlur = (e, name) => {
    const formDataCopy = { ...formData };
    formDataCopy[name] = e.target.value;
    setFormData(formDataCopy);
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

  const handleVerifClick = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const { otp1, otp2, otp3, otp4 } = formData;
    try {
      if (email && otp1 && otp2 && otp3 && otp4) {
        const response = await otpAPI.post(
          "",
          JSON.stringify({
            email,
            otp: `${String(otp1) + String(otp2) + String(otp3) + String(otp4)}`,
          })
        );

        if (response.status === 200) {
          Swal.fire({
            title: "Sukses",
            icon: "success",
            text: response.data.message,
          }).then(() => {
            navigate("/login");
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
      if (err.name === "validationError") {
        toast.error(err.message);
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email]);

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
          <h1 className="p-4 px-10 pt-6 text-2xl font-black text-center text-black">
            OTP
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="flex flex-row justify-between w-full gap-1 pt-4 form-control">
                <TextField
                  onBlur={(e) => handleFormValueBlur(e, "otp1")}
                  type="tel"
                  pattern="[0-9]*"
                  maxLength="1"
                  inputProps={{ pattern: "[0-9]*", maxLength: "1" }}
                  placeholder=""
                  className="max-w-screen md:max-w-xs"
                />
                <TextField
                  onBlur={(e) => handleFormValueBlur(e, "otp2")}
                  type="text"
                  inputProps={{ pattern: "[0-9]*", maxLength: "1" }}
                  placeholder=""
                  className="max-w-screen md:max-w-xs"
                />
                <TextField
                  onBlur={(e) => handleFormValueBlur(e, "otp3")}
                  type="text"
                  inputProps={{ pattern: "[0-9]*", maxLength: "1" }}
                  placeholder=""
                  className="max-w-screen md:max-w-xs"
                />
                <TextField
                  onBlur={(e) => handleFormValueBlur(e, "otp4")}
                  type="text"
                  inputProps={{ pattern: "[0-9]*", maxLength: "1" }}
                  placeholder=""
                  className="max-w-screen md:max-w-xs"
                />
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
                  onClick={handleVerifClick}
                  disabled={isDisabled}
                  className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                >
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

// Helper function to format time
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
  return formattedTime;
};
