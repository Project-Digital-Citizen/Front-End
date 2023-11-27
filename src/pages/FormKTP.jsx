import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FormKTP = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-[#F5F5FA]">
        <div className="flex w-[60px] mt-2 ml-16 cursor-pointer">
          <span
            className="font-bold text-lg material-symbols-outlined "
            onClick={() => navigate("/")}
          >
            arrow_back
          </span>
          <p className="my-auto">back</p>
        </div>
        <div className="justify-center p-5">
          <div className="w-11/12 rounded-xl shadow-2xl bg-white mx-auto ">
            <h1 className="text-indigo text-2xl font-black p-4 px-10 pt-6">
              Pedoman
            </h1>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="p-4">
              <ul className="list-disc ml-10 mr-5">
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
          <div className="w-11/12 rounded-xl shadow-2xl bg-white mx-auto ">
            <h1 className="text-indigo text-2xl font-black p-4 px-10 pt-6">
              {" "}
              Form Pengajuan
            </h1>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="px-10">
              {/*  */}
              <form action="">
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">NIK</span>
                  </label>
                  <input
                    type="text"
                    placeholder="NIK"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">Nama</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nama"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">
                      Tempat, Tanggal Lahir
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Tempat,DD-MM-YYYY"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">Jenis Kelamin</span>
                  </label>
                  <select className="select select-bordered select-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl">
                    <option disabled selected>
                      Jenis Kelamin
                    </option>
                    <option>Laki-Laki</option>
                    <option>Perempuan</option>
                  </select>
                  {/* <input
                    type="text"
                    placeholder="Jenis kelamin"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  /> */}
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">Alamat</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Alamat"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black lg:ml-12">
                      RT/RW
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="RT/RW"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black lg:ml-12">
                      Kel/Desa
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Kel/Desa"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black lg:ml-12">
                      Kecamatan
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Kecamatan"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">Agama</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Agama"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">
                      Status Perkawinan
                    </span>
                  </label>
                  <select className="select select-bordered select-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl">
                    <option disabled selected>
                      Status Perkawinan
                    </option>
                    <option>Belum Menikah</option>
                    <option>Sudah Menikah</option>
                  </select>
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">Pekerjaan</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Pekerjaan"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">
                      Kewarganegaraan
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Kewarganegaraan"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">
                      Surat Pengantar RT
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="PDF Pengantar RT"
                    className="file-input file-input-bordered file-input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">
                      Surat Pengantar RW
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="PDF Pengantar RW"
                    className="file-input file-input-bordered file-input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">
                      Kartu Keluarga
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="PDF Kartu Keluarga"
                    className="file-input file-input-bordered file-input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">Photo</span>
                  </label>
                  <input
                    type="file"
                    placeholder="PNG"
                    className="file-input file-input-bordered file-input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="pt-4 md:flex flex-row-reverse pb-6">
                  <button className="btn btn-block bg-indigo text-white hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo md:w-1/6">
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
    </>
  );
};

export default FormKTP;
