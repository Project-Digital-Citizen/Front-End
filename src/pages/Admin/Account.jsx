import { useNavigate } from "react-router-dom";
import NavbarADM from "../../components/NavbarADM";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { userAPI } from "../../data/api-digzen";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

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

const RenderList = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
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
        {data.map((el) => (
          <>
            <tr>
              <th>{el.NIK}</th>
              <td>{el.nama}</td>
              <td className="md:justify-center md:flex">
                <span
                  className="text-white btn bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo btn-xs"
                  onClick={() => navigate("")}
                >
                  Info
                </span>
                <span
                  className="text-white bg-green-600 btn hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 btn-xs"
                  onClick={() => navigate("/accountedit")}
                >
                  Edit
                </span>
                <span
                  className="text-white bg-red-600 btn hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 btn-xs"
                  onClick={() => navigate("")}
                >
                  Delete
                </span>
                <span>
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
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
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
                            // onBlur={(e) => handleFormValueBlur(e, "password")}
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
                            // onBlur={(e) => handleFormValueBlur(e, "password")}
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
                            // onBlur={(e) => handleFormValueBlur(e, "password")}
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
                            // onBlur={(e) => handleFormValueBlur(e, "password")}
                          />
                        </div>
                        <div className="flex flex-row-reverse my-2">
                          <button className="text-white btn bg-indigo hover:bg-white hover:text-indigo hover:border-1 hover:border-indigo">
                            Save
                          </button>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>
                </span>
              </td>
            </tr>
          </>
        ))}
      </>
    );
  }
};

const Account = () => {
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
                  <th className="md:flex md:justify-center">Verifikasi</th>
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
