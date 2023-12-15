import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ele from "../assets/images/ele.png";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Cookies } from "react-cookie";

const FormDomisili = () => {
  const cookies = new Cookies();

  useEffect(() => {
    if (!cookies.get("userData")) {
      navigate("/login");
    }
  });

  const navigate = useNavigate();
  const [label, setLabel] = useState("");

  const handleChange = (event) => {
    setLabel(event.target.value);
  };
  return (
    <>
      <Navbar />
      <img
        src={ele}
        alt=""
        className="absolute top-0 right-0 z-0 object-cover object-left w-32 h-52"
      />
      <div className="bg-[#F5F5FA]">
        <div
          className="flex w-[60px] pt-[2rem] ml-16 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-lg font-bold material-symbols-outlined ">
            arrow_back
          </span>
          <p className="my-auto">back</p>
        </div>
        <div className="relative justify-center p-5">
          <div className="w-11/12 mx-auto bg-white shadow-2xl rounded-xl ">
            <h1 className="p-4 px-10 pt-6 text-2xl font-black text-indigo">
              Pedoman
            </h1>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="p-4">
              <ul className="ml-10 mr-5 list-disc">
                <li className="my-2">
                  Lengkapi data diri sesuai dengan form yang telah disediakan.
                </li>
                <li className="my-2">
                  Dalam pengisian dokumen isikan sesuai dengan data resmi yang
                  telah anda miliki.
                </li>
                <li className="my-2">
                  Form keterangan bersifat optional, dapat diisi untuk keperluan
                  apa surat domisili ini dibuat.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="justify-center p-5 pb-16">
          <div className="relative z-10 w-11/12 mx-auto bg-white shadow-2xl rounded-xl">
            <h1 className="p-4 px-10 pt-6 text-2xl font-black text-indigo">
              {" "}
              Form Pengajuan Domisili
            </h1>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="px-10">
              {/*  */}
              <form action="">
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="No. KK"
                    type="number"
                    placeholder="xxxxxxxxxx"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Nama Kepala Keluarga"
                    type="Text"
                    placeholder="Nama Kepala Keluarga"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Alamat Baru"
                    type="Text"
                    placeholder="Alamat Baru"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Provinsi"
                    type="Text"
                    placeholder="Provinsi"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Kabupaten/Kota"
                    type="Text"
                    placeholder="Kabupaten/Kota"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Kecamatan"
                    type="Text"
                    placeholder="Kecamatan"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Kelurahan/Desa"
                    type="Text"
                    placeholder="Kelurahan/Desa"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>

                <div className="flex flex-row justify-between w-full gap-2 pt-4 form-control">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Klasifikasi Pindah
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={label}
                      label="Klasifikasi Pindah"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Dalam Satu Kelurahan"}>
                        Dalam Satu Kelurahan
                      </MenuItem>
                      <MenuItem value={"Antar Kelurahan"}>
                        Antar Kelurahan
                      </MenuItem>
                      <MenuItem value={"Antar Kecamatan"}>
                        Antar Kecamatan
                      </MenuItem>
                      <MenuItem value={"Antar Kota Dalam Provinsi"}>
                        Antar Kota Dalam Provinsi
                      </MenuItem>
                      <MenuItem value={"Antar Provinsi"}>
                        Antar Provinsi
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="NIK Keluarga Yang Pindah"
                    type="number"
                    placeholder="NIK Keluarga Yang Pindah"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Alasan Pindah"
                    type="Text"
                    placeholder="Alasan Pindah"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      KK Dari Daerah Asal
                    </span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="KK Dari Daerah Asal"
                    className="w-full rounded-[5px] file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      KTP Keluarga Yang Pindah
                    </span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="KTP Keluarga Yang Pindah"
                    className="w-full rounded-[5px] file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="flex-row-reverse pt-4 pb-6 md:flex">
                  <button className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo md:w-1/6">
                    Submit
                  </button>
                </div>
              </form>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <img
        src={ele}
        alt=""
        className="absolute left-0 z-0 object-cover object-right w-32 h-52 -bottom-28"
      />
    </>
  );
};

export default FormDomisili;
