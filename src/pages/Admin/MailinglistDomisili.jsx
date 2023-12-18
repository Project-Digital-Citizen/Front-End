/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import NavbarADM from "../../components/NavbarADM";
import { API } from "../../data/api-digzen";
// import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
// import { InputAdornment, TextField } from "@mui/material";

const RenderList = (props) => {
  const navigate = useNavigate();
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
        {data.map((el, idx) => (
          <>
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{el.kepalaKeluarga}</td>
              <td>Domisili</td>
              <td>
                <span
                  className="text-white btn bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo btn-xs"
                  onClick={() =>
                    navigate("/verifikasidomisili", {
                      state: { nik: el.NIKPindah },
                    })
                  }
                >
                  Check
                </span>
              </td>
            </tr>
          </>
        ))}
      </>
    );
  }
};

const MailinglistDomisili = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(new Cookies().get("userLog"));
    if (new Cookies().get("userData").user.role !== "admin") {
      navigate("/");
    }
  });
  const [dataPengajuan, setDataPengajuan] = useState([]);

  const pending = async () => {
    try {
      const response = await API.get("domisili");
      setDataPengajuan(response);
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
      <div className="flex items-center justify-center py-10 bg-background">
        <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[80%] lg:w-[60%] xl:w-[65%] relative">
          {/* Isi kotak center di sini */}
          <div className="p-5 text-2xl font-[999] text-center">
            Daftar Pengajuan Surat
          </div>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="flex items-center justify-between p-2 ">
            {/* <div className="">
              <TextField
                id="outlined-basic"
                label="Search"
                type="text"
                variant="outlined"
                size="small"
                className=""
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                // onBlur={(value) => handleFormValue(value, "nama")}
              />
            </div> */}
            <div className="">
              <div
                className="text-white btn btn-sm bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                onClick={() => navigate("/mailinglist")}
              >
                Mailing List KTP
              </div>
            </div>
          </div>

          <div className="mx-2 mb-2 overflow-x-auto bg-white border rounded border-base-300">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="text-white bg-indigo">
                  <th>No.</th>
                  <th>Nama</th>
                  <th>Jenis Surat</th>
                  <th>Verifikasi</th>
                </tr>
              </thead>
              <tbody>
                <RenderList dataPengajuan={dataPengajuan} />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default MailinglistDomisili;
