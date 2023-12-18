import NavbarADM from "../../components/NavbarADM";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Chart from "../../components/Chart/Chart";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { API } from "../../data/api-digzen";

const RenderList = (props) => {
  // eslint-disable-next-line react/prop-types
  if (props?.type == "mailing") {
    const totalKtp = props?.dataPengajuan?.ktp?.data?.data?.length;
    const totalDom = props?.dataPengajuan?.dom?.data?.data?.length;

    if (!totalKtp || !totalDom || totalKtp == 0 || totalDom == 0) {
      return <p className="text-sm">No Data Available</p>;
    } else {
      const total = parseInt(totalKtp) + parseInt(totalDom);
      return total;
    }
  } else if (props?.type == "users") {
    const totalUser = props?.dataPengajuan?.user?.data?.users?.length;
    if (!totalUser || totalUser == 0) {
      return <p className="text-sm">No Data Available</p>;
    } else {
      return totalUser;
    }
  }
};

const BerandaADM = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [dataPengajuan, setDataPengajuan] = useState([]);

  const pending = async () => {
    try {
      const responsektp = await API.get("ktp");
      const responsedom = await API.get("domisili");
      const responseuser = await API.get("users");
      setDataPengajuan({
        ktp: responsektp,
        dom: responsedom,
        user: responseuser,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    pending();
    if (cookies.get("userData").user.role !== "admin") {
      navigate("/");
    }
  });

  return (
    <>
      <NavbarADM />
      <div className="flex justify-center py-10 ">
        <div className="bg-white w-5/6 h-auto rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[45%] relative">
          {/* Isi kotak center di sini */}
          <div className="py-5 md:flex md:gap-3 md:justify-center xl:gap-16">
            <div className="flex justify-center pb-3 md:pb-0 md:-ml-12">
              <div className="w-32 y-2 md:w-40">
                <img
                  src={
                    cookies.get("userData").user.userImage
                      ? cookies.get("userData").user.userImage
                      : `https://ui-avatars.com/api/?name=${
                          cookies.get("userData").user.nama
                        }`
                  }
                  className="object-cover w-[8rem] h-[8rem] border-4 border-black rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col px-10 my-auto md:px-0">
              <h1 className="text-2xl font-black text-center text-black ">
                {cookies.get("userData").user.nama}
              </h1>
              <div className="flex flex-row items-center justify-between pt-3">
                <span className="font-black label-text">NIP</span>
                <span className="max-w-screen md:w-3/5">
                  {cookies.get("userData").user.NIK}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between pt-3">
                <span className="font-black label-text">Email</span>
                <span className="max-w-screen md:w-3/5">
                  {cookies.get("userData").user.email}
                </span>
              </div>
              {/* <div className="flex flex-row items-center justify-between pt-3">
                <span className="font-black label-text">D.O.B</span>
                <span className="max-w-screen md:w-3/5">99-99-00</span>
              </div> */}
            </div>
          </div>

          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="p-3 text-lg font-black text-center">
            Have a good day
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <div className="flex flex-col bg-white w-5/6 h-auto rounded shadow-md y-10 md:flex-row md:w-[70%] lg:w-[50%] xl:w-[45%] relative">
          <div className="stat place-items-center">
            <div className="stat-title">Users</div>
            <div className="stat-value">
              <RenderList dataPengajuan={dataPengajuan} type="users" />
            </div>
          </div>
          <div className="border-t-2 border-indigo stat place-items-center md:border-l-2 md:border-t-0">
            <div className="stat-title">Mailing List</div>
            <div className="stat-value">
              <RenderList dataPengajuan={dataPengajuan} type="mailing" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="flex mx-auto mb-10 bg-white w-5/6 h-auto rounded shadow-md y-10 md:flex-row md:w-[70%] lg:w-[50%] xl:w-[45%] relative">
        <Chart />
      </div>

      <Footer />
    </>
  );
};
export default BerandaADM;
