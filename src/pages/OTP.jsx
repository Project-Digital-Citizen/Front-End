import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { otpAPI } from "../data/api-digzen";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CustomError from "../util/customError";
import Swal from "sweetalert2";

const OTP = () => {
  const email = useLocation()?.state?.email;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const handleFormValueBlur = (e, name) => {
    const formDataCopy = { ...formData };
    formDataCopy[name] = e.target.value;
    setFormData(formDataCopy);
  };

  const handleVerifClick = async (e) => {
    console.log(email);
    e.preventDefault();
    setIsDisabled(true);
    const { otp } = formData;
    try {
      if (email && otp) {
        const response = await otpAPI.post("", JSON.stringify({email, otp}));

        if (response.status == 200) {
          Swal.fire({
            title: "Sukses",
            icon: "success",
            text: response.data.message,
          }).then(() => {
            navigate("/");
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
    if(!email){
      navigate("/login");
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
          <h1 className="p-4 px-10 pt-6 text-2xl font-black text-center text-black">
            OTP
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <input
                  onBlur={(e) => handleFormValueBlur(e, "otp")}
                  type="number"
                  placeholder="OTP"
                  className="w-full mx-auto input input-bordered input-md max-w-screen md:max-w-xs"
                />
              </div>

              <div className="pt-4 pb-6">
                <button
                  onClick= {handleVerifClick}
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
