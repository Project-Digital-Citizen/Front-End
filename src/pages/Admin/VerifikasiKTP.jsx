import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import NavbarADM from "../../components/NavbarADM";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API } from "../../data/api-digzen";

const RenderList = (props) => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line react/prop-types
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
        <div className="flex items-center justify-center py-10 bg-background">
          <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[80%] lg:w-[60%] xl:w-[65%] relative">
            {/* Isi kotak center di sini */}
            <div className="p-5 text-2xl font-[999] text-center md:text-start">
              Verifikasi <span className="text-indigo">KTP</span>
            </div>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />

            <div className="m-2 bg-white rounded ">
              <div className="flex justify-center pb-3 md:pb-0">
                {/*  */}
                <div
                  className="w-32 y-2 md:w-40"
                  onClick={() => setShowModal(true)}
                >
                  <img
                    src={data.selfieImage}
                    alt=""
                    className="border border-black w-[150px] h-[200px]"
                  />
                </div>
              </div>
              {showModal ? (
                <>
                  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none">
                    <div className="modal-box">
                      <h3 className="p-5 text-lg font-bold">Photo</h3>
                      <div className="flex justify-center mx-auto">
                        <img
                          src={data.selfieImage}
                          alt=""
                          className="w-[300px] h-[400px]"
                        />
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button
                            className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {/*  */}
              <div className="px-10">
                {/*  */}
                <form action="">
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">NIK</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.NIK}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">Nama</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.nama}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      Tempat, tanggal lahir
                    </span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.tempatTanggalLahir}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">Jenis Kelamin</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.jenisKelamin}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">Alamat</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.alamat}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text md:ml-12">
                      RT/RW
                    </span>
                    <span className="w-full max-w-screen md:w-2/4 md:-">
                      {data.rtRw}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text md:ml-12">
                      Kel/Desa
                    </span>
                    <span className="w-full max-w-screen md:w-2/4 md:-">
                      {data.kelurahanDesa}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text md:ml-12">
                      Kecamatan
                    </span>
                    <span className="w-full max-w-screen md:w-2/4 md:-">
                      {data.kecamatan}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">Agama</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.agama}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      Status Perkawinan
                    </span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.status}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">Pekerjaan</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.pekerjaan}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      Kewarganegaraan
                    </span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.kewarganegaraan}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      Golongan Darah
                    </span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.golonganDarah}
                    </span>
                  </div>

                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      Surat Pengantar RT
                    </span>
                    <div className="flex w-full max-w-screen md:w-3/5">
                      {/* <button className="btn btn-sm btn-block md:w-auto">
                      
                    </button> */}
                      <Modal file="Pengantar RT" source={data.suratRTImage}>
                        Buka File Pengantar RT {data.nama}
                      </Modal>
                    </div>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      Surat Pengantar RW
                    </span>
                    <div className="flex w-full max-w-screen md:w-3/5">
                      <Modal file="Pengantar RW" source={data.suratRWImage}>
                        Buka File Pengantar RW {data.nama}
                      </Modal>
                    </div>
                  </div>
                  <div className="flex justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      Kartu Keluarga
                    </span>
                    <div className="flex w-full max-w-screen md:w-3/5">
                      <Modal file="Kartu Keluarga" source={data.suratRWImage}>
                        Buka File Kartu Keluarga {data.nama}
                      </Modal>
                    </div>
                  </div>
                  {/* <div className="justify-between w-full pt-4">
                  <span className="font-black label-text">Keterangan</span>
                  <textarea
                    value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, recusandae quos alias odio quam eaque. Repellendus delectus impedit sit nemo cumque?"
                    className="w-full bg-white textarea textarea-bordered textarea-md max-w-screen md:max-w-md: md:mt-2 lg:max-w-2xl xl:max-w-4xl"
                    disabled
                  />
                </div> */}
                  <div className="flex-row-reverse gap-1 pt-4 pb-6 md:flex">
                    <button className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo md:w-1/6">
                      Accept
                    </button>
                    <button className="text-white bg-red-600 btn btn-block btn-error hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 md:w-1/6">
                      Reject
                    </button>
                  </div>
                </form>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

const VerifikasiKTP = () => {
  const NIK = useLocation()?.state;

  const [dataPengajuan, setDataPengajuan] = useState([]);

  const pending = async () => {
    try {
      const response = await API.get(`ktp/${NIK}`);
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

      <RenderList dataPengajuan={dataPengajuan} />

      <Footer />
    </>
  );
};
export default VerifikasiKTP;
