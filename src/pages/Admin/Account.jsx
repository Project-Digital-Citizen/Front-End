import { useNavigate } from "react-router-dom";
import NavbarADM from "../../components/NavbarADM";
import Footer from "../../components/Footer";

const Account = () => {
  const navigate = useNavigate;
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
                {/* row 1 */}
                <tr>
                  <th>13454563456</th>
                  <td>Cy Ganderton</td>
                  <td className="md:justify-center md:flex">
                    <span
                      className="text-white btn bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo btn-xs"
                      onClick={() => navigate("/verifikasiktp")}
                    >
                      Info
                    </span>
                    <span
                      className="text-white bg-green-600 btn hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 btn-xs"
                      onClick={() => navigate("/verifikasiktp")}
                    >
                      Edit
                    </span>
                    <span
                      className="text-white bg-red-600 btn hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 btn-xs"
                      onClick={() => navigate("/verifikasiktp")}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>34563456345</th>
                  <td>Hart Hagerty</td>
                  <td className="md:flex md:justify-center">
                    <span
                      className="text-white btn bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo btn-xs"
                      onClick={() => navigate("/verifikasiktp")}
                    >
                      Info
                    </span>
                    <span
                      className="text-white bg-green-600 btn hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 btn-xs"
                      onClick={() => navigate("/verifikasiktp")}
                    >
                      Edit
                    </span>
                    <span
                      className="text-white bg-red-600 btn hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 btn-xs"
                      onClick={() => navigate("/verifikasiktp")}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3234562341235</th>
                  <td>Brice Swyre</td>
                  <td className="md:flex md:justify-center">
                    <span
                      className="text-white btn bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo btn-xs"
                      onClick={() => navigate("/verifikasiktp")}
                    >
                      Info
                    </span>
                    <span
                      className="text-white bg-green-600 btn hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 btn-xs"
                      onClick={() => navigate("/verifikasiktp")}
                    >
                      Edit
                    </span>
                    <span
                      className="text-white bg-red-600 btn hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 btn-xs"
                      onClick={() => navigate("/verifikasiktp")}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
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
