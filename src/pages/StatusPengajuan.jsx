import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import icondocs from "../assets/images/icondocs.png";
import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { Cookies } from "react-cookie";
import { useEffect, useState } from "react";
import { API } from "../data/api-digzen";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth <= 390 ? 300 : 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 3,
};

const RenderList = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = props?.dataPengajuan?.response?.data?.data;
  const responKTP = props?.dataPengajuan?.responseKTP?.data?.data;
  const responDom = props?.dataPengajuan?.responseDomisili?.data?.data;
  console.log(data, responKTP, responDom);
  const jenis = props?.jenis;
  if (!data || data.length === 0) {
    return (
      <tr>
        <td colSpan="4">No data available</td>
      </tr>
    );
  } else {
    if (jenis == "ktp") {
      return (
        <>
          {data.map((el) => {
            let classs = "";
            let result = <> </>;
            let status = "";
            if (responKTP.verified == "") {
              classs = "bg-yellow-200";
              status = "Pending";
            } else if (responKTP.verified == "accept") {
              classs = "bg-lime-300";
              status = responKTP.verified;
              result = (
                <>
                  {" "}
                  <div className="mt-3">
                    <p className="font-black label-text">Result</p>
                    <p className="btn btn-sm" onClick={handleOpen}>
                      Open Result
                    </p>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography>
                          <div className="">
                            <img src={ele} alt="" />
                          </div>
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                  <div className="mt-3">
                    <span className="font-black label-text">Reason</span>
                    <textarea
                      value={el.rejectionReason}
                      className="w-full bg-white textarea textarea-bordered textarea-md max-w-screen md:max-w-md: md:mt-2 lg:max-w-2xl xl:max-w-4xl"
                      disabled
                    />
                  </div>
                </>
              );
            } else {
              status = responKTP.verified;
              classs = "bg-rose-500";
            }
            if (el.idktp) {
              return (
                <>
                  <div className="mt-3 border-solid border-2">
                    <div className="p-3">
                      <p className="font-black label-text">Submission Date</p>
                      <p>{el.submissionDate.substr(0, 10).split("T")}</p>
                    </div>
                    <div className="p-3">
                      <p className="font-black label-text">Status</p>
                      <p className={classs}>{status}</p>
                    </div>
                    {result}
                  </div>
                  {/* <li>
                    <hr />
                    <div className="timeline-start">
                      {el.submissionDate.substr(0, 10).split("T")}
                    </div>
                    <div className="timeline-middle">
                      <TimelineSVG />
                    </div>
                    <div className="timeline-end timeline-box">
                      Pengajuan KTP
                    </div>
                    <hr />
                  </li> */}
                </>
              );
            }
          })}
        </>
      );
    } else {
      return (
        <>
          {data.map((el) => {
            let result = <> </>;
            let classs = "";
            let status = "";
            if (responDom.verified == "") {
              classs = "bg-yellow-200";
              status = "Pending";
            } else if (responDom.verified == "accept") {
              classs = "bg-lime-300";
              status = responDom.verified;
              result = (
                <>
                  <div className="mt-3">
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography>
                          <div className="">
                            <img src={ele} alt="" />
                          </div>
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                  <div className="mt-3">
                    <span className="font-black label-text">Reason</span>
                    <textarea
                      value={el.rejectionReason}
                      className="w-full bg-white textarea textarea-bordered textarea-md max-w-screen md:max-w-md: md:mt-2 lg:max-w-2xl xl:max-w-4xl"
                      disabled
                    />
                  </div>
                </>
              );
            } else {
              status = responDom.verified;
              classs = "bg-rose-500";
            }
            if (el.iddomisili) {
              return (
                <>
                  <div className="mt-3 border-solid border-2">
                    <div className="p-3">
                      <p className="font-black label-text">Submission Date</p>
                      <p>{el.submissionDate.substr(0, 10).split("T")}</p>
                    </div>
                    <div className="p-3">
                      <p className="font-black label-text">Status</p>
                      <p className={classs}>{status}</p>
                    </div>
                    {result}
                  </div>
                </>
              );
            }
          })}
        </>
      );
    }
  }
};

const StatusPengajuan = () => {
  const cookies = new Cookies();

  useEffect(() => {
    if (!cookies.get("userData")) {
      navigate("/login");
    }
  });

  const [dataPengajuan, setDataPengajuan] = useState([]);

  const pending = async () => {
    try {
      const response = await API.get(`status/${cookies.get("userLog").userId}`);
      const responseKTP = await API.get(`ktp/${cookies.get("userLog").userId}`);
      const responseDomisili = await API.get(
        `domisili/${cookies.get("userLog").userId}`
      );
      setDataPengajuan({ response, responseKTP, responseDomisili });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    pending();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <img
        src={ele}
        alt=""
        className="absolute top-0 right-0 z-0 object-cover object-left w-32 h-52"
      />
      <Navbar />
      <div className="bg-[#F5F5FA] ">
        {/*  */}
        <div
          className="flex w-[60px] pt-[2rem] ml-16 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-lg font-bold material-symbols-outlined ">
            arrow_back
          </span>
          <p className="my-auto">Back</p>
        </div>
        {/*  */}
        <div className="flex flex-col content-center justify-center md:flex-row my-[2%]">
          <div className="z-0 flex items-center justify-center p-5">
            <div className="z-10 w-11/12 mx-auto bg-white shadow-2xl rounded-xl md:w-96">
              <div className="flex justify-center py-5 ">
                <div className="my-auto">
                  <img src={icondocs} alt="" className="h-[50px]" />
                </div>
                <div className="flex flex-col my-auto font-black text-indigo">
                  <h1 className="text-lg md:text-xl">Status Pengajuan KTP</h1>
                </div>
              </div>
              <hr className="bg-indigo text-black p-[1px] mx-10 " />
              <div className="max-w-md p-7">
                {/*  */}
                <ul className="timeline timeline-vertical">
                  <RenderList dataPengajuan={dataPengajuan} jenis="ktp" />
                </ul>
                {/*  */}
              </div>
            </div>
          </div>
          <div className="z-0 flex items-center justify-center p-5">
            <div className="z-10 w-11/12 mx-auto bg-white shadow-2xl rounded-xl md:w-96">
              <div className="flex justify-center py-5 ">
                <div className="my-auto">
                  <img src={icondocs} alt="" className="h-[50px]" />
                </div>
                <div className="flex flex-col my-auto font-black text-indigo">
                  <h1 className="text-lg md:text-xl">
                    Status Pengajuan Domisili
                  </h1>
                </div>
              </div>
              <hr className="bg-indigo text-black p-[1px] mx-10 " />
              <div className="max-w-md p-7">
                {/*  */}
                <ul className="timeline timeline-vertical">
                  <RenderList dataPengajuan={dataPengajuan} jenis="domisili" />
                </ul>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <img
        src={ele}
        alt=""
        className="absolute left-0 z-0 object-cover object-right w-32 h-52 -bottom-[3rem]"
      />
    </>
  );
};

export default StatusPengajuan;
