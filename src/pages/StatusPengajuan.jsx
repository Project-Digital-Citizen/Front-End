import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TimelineSVG from "../components/SVG/Timelinesvg";
import icondocs from "../assets/images/icondocs.png";
import { useNavigate } from "react-router-dom";

const StatusPengajuan = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="bg-[#F5F5FA]">
        {/*  */}
        <div
          className="flex w-[60px] mt-2 ml-16 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="font-bold text-lg material-symbols-outlined ">
            arrow_back
          </span>
          <p className="my-auto">back</p>
        </div>
        {/*  */}
        <div className="justify-center p-5 pb-16">
          <div className="w-11/12 rounded-xl shadow-2xl bg-white mx-auto ">
            <div className="flex justify-center py-5 md:justify-start md:ml-10 ">
              <div className="my-auto">
                <img src={icondocs} alt="" className="h-[50px]" />
              </div>
              <div className="flex flex-col text-indigo  font-black my-auto">
                <h1 className="text-2xl ">Status Pengajuan</h1>
                <span className="text-xs -mt-[3px] ml-[2px] text-black">
                  29347856394875
                </span>
              </div>
            </div>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="p-7 max-w-md">
              {/*  */}
              <ul className="timeline timeline-vertical">
                <li>
                  <div className="timeline-start">30-33-2024</div>
                  <div className="timeline-middle">
                    <TimelineSVG />
                  </div>
                  <div className="timeline-end timeline-box">Pengajuan</div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-start">30-33-2024</div>
                  <div className="timeline-middle">
                    <TimelineSVG />
                  </div>
                  <div className="timeline-end timeline-box">Ditolak</div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-start">30-33-2024</div>
                  <div className="timeline-middle">
                    <TimelineSVG />
                  </div>
                  <div className="timeline-end timeline-box">Verify</div>
                  <hr />
                </li>
              </ul>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StatusPengajuan;
