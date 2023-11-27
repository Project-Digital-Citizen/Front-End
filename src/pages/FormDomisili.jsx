import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FormDomisili = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F5F5FA]">
        <div className="max-w-screen text-sm font-black breadcrumbs pt-7 mx-3 ml-8 md:max-w-lg md:ml-[60px]">
          <ul>
            <li>
              <a>Pengajuan Surat</a>
            </li>
            <li>
              <a>Form Pengajuan</a>
            </li>
            <li>Domisili</li>
          </ul>
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
                  Form keterangan bersifat optional, dapat diisi untuk keperluan
                  apa surat domisili ini dibuat.
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
                    <span className="label-text font-black">Alamat Asal</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Alamat Asal"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">
                      Alamat Domisili
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Alamat Domisili"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text font-black">Keterangan</span>
                  </label>
                  <textarea
                    placeholder="Keterangan"
                    className="textarea textarea-bordered textarea-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="pt-4 md:flex flex-row-reverse pb-6">
                  <button className="btn btn-block bg-indigo text-white md:w-1/6">
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

export default FormDomisili;
