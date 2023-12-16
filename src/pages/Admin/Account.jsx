import NavbarADM from "../../components/NavbarADM";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { userAPI } from "../../data/api-digzen";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth <= 390 ? 300 : 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

const RenderList = (props) => {
  const cookies = new Cookies();
  const [open2, setOpen2] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleOpen = () => setOpen(true);
  const handleClose2 = () => setOpen2(false);
  const handleClose = () => setOpen(false);
  const [valueEdit, setValue] = useState({});
  const [userDetail, setDetail] = useState({});
  const [current, setCurrent] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFormValue = (value, name) => {
    const formDataCopy = { ...valueEdit };
    formDataCopy[name] = value.target.value;
    setValue(formDataCopy);
  };

  const [showPassword, setShowPassword] = useState("password");
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) =>
      prevShowPassword === "password" ? "text" : "password"
    );
  };

  const handleInfoClick = async (id) => {
    handleClose();
    try {
      const response = await userAPI.get(`/${id}`);
      setCurrent({ id });
      setDetail(response.data.user);
      handleOpen();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditSubmit = async (id) => {
    setIsDisabled(true);
    try {
      const response = await userAPI.put(`/${id}`, JSON.stringify(valueEdit));

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
          handleClose2();
          handleInfoClick(id);
        });
      }
    } catch (err) {
      console.log(err);
      if (err.name == "Error") {
        toast.error(err.message);
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      setIsDisabled(false);
    }
  };

  const handleDeleteClick = (id) => {
    if (id === cookies.get("userLog").userId) {
      Swal.fire({
        title: "You can't delete yourself",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        text: "Account deletion is irreversible",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            setIsDisabled(true);
            const response = await userAPI.delete(`/${id}`);
            if (response.data.status === "success") {
              Swal.fire({
                title: "Account Deleted",
                icon: "success",
                text: response.data.message,
                showConfirmButton: false,
              });
            } else {
              Swal.fire({
                title: "Something went wrong",
                icon: "question",
                text: response.data.message,
              });
            }
          } catch (err) {
            console.log(err);
            if (err.name == "Error") {
              toast.error(err.message);
            } else {
              toast.error(err?.response?.data?.message);
            }
          }
        }
      });
    }
  };
  // eslint-disable-next-line react/prop-types
  const data = props?.dataUser?.data?.users;
  if (!data || data.length === 0) {
    return (
      <tr>
        <td colSpan="4">No data available</td>
      </tr>
    );
  } else {
    return (
      <>
        <Modal /* Modal 2 */
          open={open2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Info
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
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
                  onBlur={(e) => handleFormValue(e, "NIK")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Nama"
                  placeholder="Nama"
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValue(e, "nama")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="w-full"
                  placeholder="contoh@contoh.com"
                  onBlur={(e) => handleFormValue(e, "email")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  type="number"
                  placeholder="08xxxx"
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValue(e, "nomor")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  type="number"
                  placeholder="08xxxx"
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValue(e, "nomor")}
                />
              </div>
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
              <div className="flex flex-row-reverse gap-2 pt-4 my-2">
                <button
                  disabled={isDisabled}
                  onClick={() => {
                    handleEditSubmit(current.id);
                  }}
                  className="w-20 text-white btn btn-sm bg-indigo hover:bg-white hover:text-indigo hover:border-1 hover:border-indigo"
                >
                  Save
                </button>
                <button
                  disabled={isDisabled}
                  className="w-20 text-white bg-green-600 btn btn-sm hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600"
                  onClick={handleClose2}
                >
                  Close
                </button>
              </div>
            </Typography>
          </Box>
        </Modal>
        <Modal /* Modal 1 */
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Info
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <div className="px-3">
                <form action="">
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-semibold label-text">NIK</span>
                    <span className="w-2/4">{userDetail.NIK}</span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-semibold label-text">Nama</span>
                    <span className="w-2/4">{userDetail.nama}</span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-semibold label-text">Email</span>
                    <span className="w-2/4">{userDetail.email}</span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-semibold label-text">
                      Phone Number
                    </span>
                    <span className="w-2/4">{userDetail.nomor}</span>
                  </div>
                </form>
              </div>
              <div className="flex flex-row-reverse gap-2 mt-4">
                <button
                  disabled={isDisabled}
                  className="w-20 text-white bg-yellow-400 btn btn-sm hover:bg-white hover:text-yellow-400 hover:border-2 hover:border-yellow-400"
                  onClick={handleOpen2}
                >
                  Edit
                </button>
                <button
                  disabled={isDisabled}
                  className="w-20 text-white bg-indigo btn btn-sm hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                  onClick={handleClose}
                >
                  OK
                </button>
              </div>
            </Typography>
          </Box>
        </Modal>
        {data.map((el) => (
          <>
            <tr>
              <th>{el.NIK}</th>
              <td>{el.nama}</td>
              <td className="md:justify-center md:flex">
                <button
                  disabled={isDisabled}
                  className="text-white btn bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo btn-xs"
                  onClick={() => {
                    handleInfoClick(el._id);
                  }}
                >
                  Info
                </button>
                <button
                  disabled={isDisabled}
                  className="text-white bg-red-600 btn hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 btn-xs"
                  onClick={() => {
                    handleDeleteClick(el._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </>
        ))}
      </>
    );
  }
};

const Account = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(new Cookies().get("userLog"));
    if (new Cookies().get("userData").user.role !== "admin") {
      navigate("/");
    }
  });
  const [dataUser, setDataUser] = useState([]);

  const pending = async () => {
    try {
      const response = await userAPI.get("");
      setDataUser(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    pending();
  }, []);

  return (
    <>
      <NavbarADM />

      <div className="flex items-center justify-center h-screen py-10 bg-background">
        <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[80%] lg:w-[60%] xl:w-[65%] relative">
          {/* Isi kotak center di sini */}
          <div className="p-5 text-2xl font-[999] text-center">Daftar User</div>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />

          <div className="m-2 overflow-x-auto bg-white border rounded border-base-300">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="text-white bg-indigo">
                  <th>NIK</th>
                  <th>Nama</th>
                  <th className="md:flex md:justify-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <RenderList dataUser={dataUser} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Account;
