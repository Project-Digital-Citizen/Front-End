import { useNavigate } from "react-router-dom";
import NavbarADM from "../../components/NavbarADM";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { userAPI } from "../../data/api-digzen";

const RenderList = (props) => {
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
