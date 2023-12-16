import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TimelineSVG from "../components/SVG/Timelinesvg";
import icondocs from "../assets/images/icondocs.png";
import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { Cookies } from "react-cookie";
import { useEffect, useState } from "react";
import { API } from "../data/api-digzen";

const RenderList = (props) => {
  // eslint-disable-next-line react/prop-types
  const data = props?.dataPengajuan?.data?.data;
  if (!data || data.length === 0) {
    return (
      <tr>
        <td colSpan="4">No data available</td>
      </tr>
    );
  } else {
    return (
      <>
        {data.map((el) => {
          if (el.idktp) {
            return (
              <>
                <li>
                  <hr />
                  <div className="timeline-start">
                    {el.submissionDate.substr(0, 10).split("T")}
                  </div>
                  <div className="timeline-middle">
                    <TimelineSVG />
                  </div>
                  <div className="timeline-end timeline-box">KTP Pending</div>
                  <hr />
                </li>
              </>
            );
          } else {
            return (
              <>
                <li>
                  <hr />
                  <div className="timeline-start">
                    {el.submissionDate.substr(0, 10).split("T")}
                  </div>
                  <div className="timeline-middle">
                    <TimelineSVG />
                  </div>
                  <div className="timeline-end timeline-box">
                    Domisili Pending
                  </div>
                  <hr />
                </li>
              </>
            );
          }
        })}
      </>
    );
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
      setDataPengajuan(response);
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
      <div className="bg-[#F5F5FA] h-screen">
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
        <div className="flex flex-col content-center justify-center md:flex-row mt-[10%]">
          <div className="flex items-center justify-center p-5">
            <div className="z-10 w-11/12 mx-auto bg-white shadow-2xl rounded-xl md:w-96">
              <div className="flex justify-center py-5 md:justify-start md:ml-10 ">
                <div className="my-auto">
                  <img src={icondocs} alt="" className="h-[50px]" />
                </div>
                <div className="flex flex-col my-auto font-black text-indigo">
                  <h1 className="text-2xl ">Status Pengajuan</h1>
                  <span className="text-xs -mt-[3px] ml-[2px] text-black">
                    29347856394875
                  </span>
                </div>
              </div>
              <hr className="bg-indigo text-black p-[1px] mx-10 " />
              <div className="max-w-md p-7">
                {/*  */}
                <ul className="timeline timeline-vertical">
                  <RenderList dataPengajuan={dataPengajuan} />
                </ul>
                {/*  */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-5">
            <div className="z-10 w-11/12 mx-auto bg-white shadow-2xl rounded-xl md:w-96">
              <div className="flex justify-center py-5 md:justify-start md:ml-10 ">
                <div className="my-auto">
                  <img src={icondocs} alt="" className="h-[50px]" />
                </div>
                <div className="flex flex-col my-auto font-black text-indigo">
                  <h1 className="text-2xl ">Status Pengajuan</h1>
                  <span className="text-xs -mt-[3px] ml-[2px] text-black">
                    29347856394875
                  </span>
                </div>
              </div>
              <hr className="bg-indigo text-black p-[1px] mx-10 " />
              <div className="max-w-md p-7">
                {/*  */}
                <ul className="timeline timeline-vertical">
                  <RenderList dataPengajuan={dataPengajuan} />
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
