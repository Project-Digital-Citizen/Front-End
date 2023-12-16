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
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { ktpAPI } from "../data/api-digzen";
import CustomError from "../util/customError";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const FormKTP = () => {
  const cookies = new Cookies();

  useEffect(() => {
    if (!cookies.get("userData")) {
      navigate("/login");
    }
  });

  const navigate = useNavigate();
  const [data, setForm] = useState({});

  const [isDisabled, setIsDisabled] = useState(false);

  const handleFormValue = (e, name) => {
    const formDataCopy = { ...data };
    formDataCopy[name] = e;
    if (
      name == "suratRTImage" ||
      name == "suratRWImage" ||
      name == "kkImage" ||
      name == "selfieImage"
    ) {
      formDataCopy[name] = e.target.files[0];
    }
    if (name == "tempat" || name == "tanggal") {
      let tempat = formDataCopy["tempat"];
      let tanggal = formDataCopy["tanggal"] ? formDataCopy["tanggal"] : null;

      if (name == "tempat") {
        tempat = e;
      } else if (name == "tanggal") {
        tanggal = tanggal ? dayjs(tanggal).format("DD-MM-YYYY") : null;
      }

      if (tempat && tanggal) {
        formDataCopy["tempatTanggalLahir"] = `${tempat}, ${tanggal}`;
      }
    }

    setForm(formDataCopy);
  };

  const handleRegClick = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    try {
      if (data) {
        const formData = new FormData();
        for (let key in data) {
          formData.append(key, data[key]);
        }
        const userId = cookies.get("userLog").userId;
        const response = await ktpAPI.post(`/${userId}`, formData, {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          },
        });
        console.log(response);
        if (response.status == 201) {
          Swal.fire({
            title: "Sukses",
            icon: "success",
            text: response.data.message,
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            navigate("/statuspengajuan");
          });
        }
      } else {
        throw new CustomError(
          "validationError",
          "Form tidak lengkap mohon lengkapi form terlebih dahulu"
        );
      }
    } catch (err) {
      console.log(err);
      if (err.name == "validationError") {
        toast.error(err.message);
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      setIsDisabled(false);
    }
  };

  const tanggalSelect = [];
  for (let i = 1; i <= 31; i++) {
    tanggalSelect.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }

  const bulanSelect = [];
  for (let i = 1; i <= 12; i++) {
    bulanSelect.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }

  const tahunSelect = [];
  for (let i = 1950; i <= 2024; i++) {
    tahunSelect.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }
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
          <p className="my-auto">Back</p>
        </div>
        <div className="justify-center p-5">
          <div className="relative w-11/12 mx-auto bg-white shadow-2xl rounded-xl ">
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
                  Upload dokumen yang diperlukan seperti, surat keterangan RT,
                  surat keterangan RW dan Kartu Keluarga.
                </li>
                <li className="my-2">
                  Upload foto dengan ketentuan sebagai berikut:
                </li>
                <li className="my-2 ml-12">Foto terlihat muka dengan jelas.</li>
                <li className="my-2 ml-12">
                  Foto terlihat dari muka sampai pundak.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="justify-center p-5 pb-16">
          <div className="relative z-10 w-11/12 mx-auto bg-white shadow-2xl rounded-xl ">
            <h1 className="p-4 px-10 pt-6 text-2xl font-black text-indigo">
              {" "}
              Form Pengajuan
            </h1>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="px-10">
              {/*  */}
              <form action="">
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-number"
                    label="NIK"
                    type="text"
                    inputProps={{
                      minLength: 16,
                      maxLength: 16,
                      pattern: "[0-9]*",
                    }}
                    placeholder="xxxxxxxxxx"
                    className="w-full"
                    onBlur={(e) => handleFormValue(e.target.value, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Nama Lengkap"
                    placeholder="Nama Lengkap"
                    variant="outlined"
                    className="w-full"
                    onBlur={(e) => handleFormValue(e.target.value, "nama")}
                  />
                </div>
                {/* ttl mobile */}
                {/* <div className="flex flex-row justify-between w-full gap-2 pt-4 md:hidden form-control">
                  <TextField
                    id="outlined-basic"
                    label="Tempat, Tanggal Lahir"
                    placeholder="Tempat, Tgl-Bln-Thn (Jakarta, 10-02-2002)"
                    variant="outlined"
                    className="w-full"
                    onBlur={(e) => handleFormValue(e, "tempatTanggalLahir")}
                  />
                </div> */}
                {/* ttl large */}

                <div className="flex-row justify-between w-full gap-2 pt-4 md:flex form-control">
                  <TextField
                    id="outlined-basic"
                    label="Tempat"
                    placeholder="Tempat"
                    variant="outlined"
                    className="w-full"
                    onChange={(e) => handleFormValue(e.target.value, "tempat")}
                  />

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Tanggal Lahir"
                      format="DD-MM-YYYY"
                      onChange={(e) => handleFormValue(e, "tanggal")}
                    />
                  </LocalizationProvider>
                  {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Tanggal
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Tanggal"
                      onChange={(e) => handleTTL(e, "tanggal")}
                    >
                      {tanggalSelect}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Bulan</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Bulan"
                      onChange={(e) => handleTTL(e, "bulan")}
                    >
                      {bulanSelect}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tahun</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Tahun"
                      onChange={(e) => handleTTL(e, "tahun")}
                    >
                      {tahunSelect}
                    </Select>
                  </FormControl> */}
                </div>
                <div className="flex flex-row justify-between w-full gap-2 pt-4 form-control">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Jenis Kelamin
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Jenis Kelamin"
                      onChange={(e) =>
                        handleFormValue(e.target.value, "jenisKelamin")
                      }
                    >
                      <MenuItem value={"Laki-Laki"}>Laki-Laki</MenuItem>
                      <MenuItem value={"Perempuan"}>Perempuan</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-col justify-between w-full gap-2 pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Alamat"
                    placeholder=""
                    variant="outlined"
                    className="w-full"
                    onBlur={(e) => handleFormValue(e.target.value, "alamat")}
                  />
                </div>
                <div className="flex flex-col justify-between w-full gap-2 pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="RT/RT"
                    placeholder="xx/xx"
                    variant="outlined"
                    className="w-full"
                    onBlur={(e) => handleFormValue(e.target.value, "rtRw")}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Kelurahan/Desa"
                    placeholder="Kelurahan/Desa"
                    variant="outlined"
                    className="w-full"
                    onBlur={(e) =>
                      handleFormValue(e.target.value, "kelurahanDesa")
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="Kecamatan"
                    placeholder="Kecamatan"
                    variant="outlined"
                    className="w-full"
                    onBlur={(e) => handleFormValue(e.target.value, "kecamatan")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Agama"
                    placeholder="Agama"
                    variant="outlined"
                    className="w-full"
                    onBlur={(e) => handleFormValue(e.target.value, "agama")}
                  />
                </div>
                <div className="flex flex-row justify-between w-full gap-2 pt-4 form-control">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Status Perkawinan
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Status Perkawinan"
                      onBlur={(e) => handleFormValue(e.target.value, "status")}
                    >
                      <MenuItem value={"Belum Menikah"}>Belum Menikah</MenuItem>
                      <MenuItem value={"Sudah Menikah"}>Sudah Menikah</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Pekerjaan"
                    placeholder="Pekerjaan"
                    variant="outlined"
                    className="w-full"
                    onBlur={(e) => handleFormValue(e.target.value, "pekerjaan")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Kewarganegaraan"
                    placeholder="Kewarganegaraan"
                    variant="outlined"
                    className="w-full"
                    onBlur={(e) =>
                      handleFormValue(e.target.value, "kewarganegaraan")
                    }
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Golongan Darah
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Golongan Darah"
                      onChange={(e) =>
                        handleFormValue(e.target.value, "golonganDarah")
                      }
                    >
                      <MenuItem value={"A"}>A</MenuItem>
                      <MenuItem value={"B"}>B</MenuItem>
                      <MenuItem value={"AB"}>AB</MenuItem>
                      <MenuItem value={"O"}>O</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Surat Pengantar RT
                    </span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFormValue(e, "suratRTImage")}
                    placeholder="PDF Pengantar RT"
                    className="w-full rounded-[5px] file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Surat Pengantar RW
                    </span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="PDF Pengantar RW"
                    onChange={(e) => handleFormValue(e, "suratRWImage")}
                    className="w-full file-input rounded-[5px] file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Kartu Keluarga
                    </span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFormValue(e, "kkImage")}
                    placeholder="PDF Kartu Keluarga"
                    className="w-full rounded-[5px] file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Photo{" "}
                      <small className="text-red-500">
                        * Tambahkan Background Biru
                      </small>
                    </span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFormValue(e, "selfieImage")}
                    placeholder="PNG"
                    className="w-full rounded-[5px] file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="flex-row-reverse pt-4 pb-6 md:flex">
                  <button
                    disabled={isDisabled}
                    onClick={handleRegClick}
                    className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo md:w-1/6"
                  >
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

export default FormKTP;
