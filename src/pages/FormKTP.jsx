import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ele from "../assets/images/ele.png";

const FormKTP = () => {
  const navigate = useNavigate();
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
                  <label className="label">
                    <span className="font-black label-text">NIK</span>
                  </label>
                  <input
                    type="number"
                    placeholder="NIK"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">Nama</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nama"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Tempat, Tanggal Lahir
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Tempat,DD-MM-YYYY"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">Jenis Kelamin</span>
                  </label>
                  <select className="w-full select select-bordered select-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl">
                    <option disabled selected>
                      Jenis Kelamin
                    </option>
                    <option>Laki-Laki</option>
                    <option>Perempuan</option>
                  </select>
                  {/* <input
                    type="text"
                    placeholder="Jenis kelamin"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  /> */}
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">Alamat</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Alamat"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text lg:ml-12">
                      RT/RW
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="RT/RW"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text lg:ml-12">
                      Kel/Desa
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Kel/Desa"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text lg:ml-12">
                      Kecamatan
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Kecamatan"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">Agama</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Agama"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Status Perkawinan
                    </span>
                  </label>
                  <select className="w-full select select-bordered select-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl">
                    <option disabled selected>
                      Status Perkawinan
                    </option>
                    <option>Belum Menikah</option>
                    <option>Sudah Menikah</option>
                  </select>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">Pekerjaan</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Pekerjaan"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Kewarganegaraan
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Kewarganegaraan"
                    className="w-full input input-bordered input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Surat Pengantar RT
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="PDF Pengantar RT"
                    className="w-full file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
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
                    placeholder="PDF Pengantar RW"
                    className="w-full file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
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
                    placeholder="PDF Kartu Keluarga"
                    className="w-full file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    placeholder="PNG"
                    className="w-full file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
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

export default FormKTP;
