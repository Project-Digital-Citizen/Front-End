import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { API } from "../data/api-digzen";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import CustomError from "../util/customError";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleFormValue = (e, name) => {
    const formDataCopy = { ...formData };
    formDataCopy[name] = e.target.value;
    setFormData(formDataCopy);
  };

  const handleLogClick = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const { email } = formData;
    try {
      if (email) {
        const response = await API.post(
          "email/send-otp-change-password",
          formData
        );

        if (response.status == 200) {
          Swal.fire({
            title: "Cek Email",
            icon: "success",
            text: "Cek Email Anda untuk kode OTP",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            navigate("/newpassword", { state: { email } });
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

          <h1 className="px-10 py-[1rem] text-2xl font-medium text-center text-black">
            Lupa Password
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  inputProps={{ style: { textTransform: "lowercase" } }}
                  variant="outlined"
                  className="w-full animate__animated animate__bounceIn"
                  onChange={(e) => handleFormValue(e, "email")}
                />
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

export default ForgotPassword;
