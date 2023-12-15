import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mailIMG from "../assets/images/ele.png";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { TextField } from "@mui/material";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import { userAPI } from "../data/api-digzen";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

const Profile = () => {
  const cookies = new Cookies();

  const [open, setOpen] = useState(false);
  const [valueEdit, setValue] = useState({});
  const [buttonDisable, setIsDisabled] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormValue = (value, name) => {
    const formDataCopy = { ...valueEdit };
    formDataCopy[name] = value.target.value;
    setValue(formDataCopy);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    try {
      const response = await userAPI.put(
        `/${cookies.get("userLog").userId}`,
        JSON.stringify(valueEdit)
      );

      if (response.status == 200) {
        const responseDetail = await userAPI.get(
          `/${cookies.get("userLog").userId}`
        );

        cookies.set("userData", responseDetail.data, {
          expires: new Date(Date.now() + cookies.get("userLog").exp),
        });
        Swal.fire({
          title: "Sukses",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          handleClose();
        });
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

  const [showPassword, setShowPassword] = useState("password");
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) =>
      prevShowPassword === "password" ? "text" : "password"
    );
  };

  return (
    <>
      <Navbar />
      <img
        src={mailIMG}
        alt=""
        className="absolute top-0 right-0 z-0 object-cover object-left w-32 h-52"
      />
      <img
        src={mailIMG}
        alt=""
        className="absolute left-0 z-0 object-cover object-right w-32 h-52 -bottom-28"
      />
      <div className="flex items-center justify-center h-screen py-10 mb-5 bg-background">
        <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[35%] relative">
          {/* Isi kotak center di sini */}
          <div className="flex flex-row-reverse p-2">
            <i className="" onClick={handleOpen}>
              <EditIcon fontSize="small" />
            </i>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Edit
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                  <div className="justify-between w-full mt-2 form-control md:flex md:flex-row">
                    <TextField
                      id="outlined-basic"
                      label="Nama"
                      type="text"
                      placeholder="Nama Lengkap"
                      variant="outlined"
                      className="w-full"
                      onBlur={(value) => handleFormValue(value, "nama")}
                    />
                  </div>
                  <div className="justify-between w-full mt-2 form-control md:flex md:flex-row">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      type="email"
                      placeholder="contoh@contoh.com"
                      variant="outlined"
                      className="w-full"
                      onBlur={(value) => handleFormValue(value, "email")}
                    />
                  </div>
                  <div className="justify-between w-full mt-2 form-control md:flex md:flex-row">
                    <TextField
                      id="outlined-basic"
                      label="NIK"
                      type="number"
                      placeholder="xxxxxxxxx"
                      variant="outlined"
                      className="w-full"
                      onBlur={(value) => handleFormValue(value, "NIK")}
                    />
                  </div>
                  <div className="justify-between w-full mt-2 form-control md:flex md:flex-row">
                    <TextField
                      id="outlined-basic"
                      label="Nomor"
                      type="number"
                      placeholder="08xxxxxxxxxx"
                      variant="outlined"
                      className="w-full"
                      onBlur={(value) => handleFormValue(value, "nomor")}
                    />
                  </div>
                  <div className="flex flex-row-reverse my-2">
                    <button
                      disabled={buttonDisable}
                      onClick={handleEditSubmit}
                      className="text-white btn bg-indigo hover:bg-white hover:text-indigo hover:border-1 hover:border-indigo"
                    >
                      Save
                    </button>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className="">
            <div className="flex justify-center py-3 my-auto">
              <label htmlFor="pp" className="p-1 ">
                <img
                  src={`https://ui-avatars.com/api/?name=${
                    cookies.get("userData").user.nama
                  }`}
                  alt=""
                  className="w-[8rem] border-4 border-black rounded-full"
                />
              </label>
              <input type="file" id="pp" className="hidden" />
            </div>
            <div className="flex flex-col pb-2">
              <h1 className="text-2xl font-black text-center text-black">
                {cookies.get("userData").user.nama}
              </h1>
              <span className="text-center">
                NIK : {cookies.get("userData").user.NIK}
              </span>
            </div>
          </div>

          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                <span className="font-black label-text">Email</span>
                <span className="w-full max-w-screen md:w-3/5">
                  {cookies.get("userData").user.email}{" "}
                </span>
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                <span className="font-black label-text">Phone Number</span>
                <span className="w-full max-w-screen md:w-3/5">
                  {cookies.get("userData").user.nomor}
                </span>
              </div>
              {/* <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                <span className="font-black label-text">Jenis Kelamin</span>
                <span className="w-full max-w-screen md:w-3/5">Perempuan</span>
              </div> */}
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Change Password"
                  type={showPassword}
                  inputProps={{ minLength: 8 }}
                  variant="outlined"
                  className="w-full"
                  onBlur={(value) => handleFormValue(value, "password")}
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
              <div className="flex flex-row-reverse gap-3 pt-4 pb-6">
                <button
                  disabled={buttonDisable}
                  className="text-white btn btn-md bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                  onClick={handleEditSubmit}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
