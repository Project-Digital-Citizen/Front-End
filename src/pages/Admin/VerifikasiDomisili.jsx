import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import NavbarADM from "../../components/NavbarADM";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { API } from "../../data/api-digzen";
import Typography from "@mui/material/Typography";
import Modal2 from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth <= 390 ? 300 : 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 3,
};

const RenderList = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(new Cookies().get("userLog"));
    if (new Cookies().get("userData").user.role !== "admin") {
      navigate("/");
    }
  });
  const [buttonDisable, setIsDisabled] = useState(false);
  // eslint-disable-next-line react/prop-types
  const data = props?.dataPengajuan?.data?.data;
  if (!data || data.length === 0) {
    return (
      <tr>
        <td colSpan="4">No data available</td>
      </tr>
    );
  } else {
    const handleVerifSubmit = async (val) => {
      let verified = val;

      setIsDisabled(true);
      try {
        const response = await API.put(
          `/domisili/${data._id}`,
          { verified, reason: "Domisili Terverifikasi" },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status == 200) {
          Swal.fire({
            title: "Accepted",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
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
    return (
      <>
        <div className="flex items-center justify-center py-10 bg-background">
          <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[80%] lg:w-[60%] xl:w-[65%] relative">
            {/* Isi kotak center di sini */}
            <div className="p-5 text-2xl font-[999] text-center md:text-start">
              Verifikasi <span className="text-indigo">Domisili</span>
            </div>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />

            <div className="m-2 bg-white rounded ">
              <div className="px-10">
                {/*  */}
                <form action="">
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">No. KK</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.kk}
                    </span>
                  </div>

                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      Nama Kepala Keluarga
                    </span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.kepalaKeluarga}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">Alamat Baru</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.alamatBaru}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">Provinsi</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.provinsi}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text md:ml-12">
                      Kabupaten/Kota
                    </span>
                    <span className="w-full max-w-screen md:w-2/4 md:-">
                      {data.kabupatenKota}
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
                    <span className="font-black label-text md:ml-12">
                      Kelurahan/Desa
                    </span>
                    <span className="w-full max-w-screen md:w-2/4 md:-">
                      {data.kelurahanDesa}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      Klasifikasi Pindah
                    </span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.klasifikasiPindah}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      NIK Keluarga Yang Pindah
                    </span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.NIKPindah}
                    </span>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">Alasan Pindah</span>
                    <span className="w-full max-w-screen md:w-3/5">
                      {data.alasanPindah}
                    </span>
                  </div>

                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      KK Dari Daerah Asal
                    </span>
                    <div className="flex w-full max-w-screen md:w-3/5">
                      {/* <button className="btn btn-sm btn-block md:w-auto">
                      
                    </button> */}
                      <Modal
                        file="KK Dari Daerah Asal"
                        source={data.kkDaerahAsalImage}
                      >
                        KK Dari Daerah Asal {data.nama}
                      </Modal>
                    </div>
                  </div>
                  <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                    <span className="font-black label-text">
                      KTP Keluarga Yang Pindah
                    </span>
                    <div className="flex w-full max-w-screen md:w-3/5">
                      <Modal
                        file="KTP Keluarga Yang Pindah"
                        source={data.ktpKeluargaPindahImage}
                      >
                        KTP Keluarga Yang Pindah {data.nama}
                      </Modal>
                    </div>
                  </div>

                  {/* <div className="justify-between w-full pt-4">
                  <span className="font-black label-text">Keterangan</span>
                  <textarea
                    value="loremfksdjlg bsdug sdiufghskjdfbglkjd fgudfbgkjs dbfgkjs dofkjgb sokdjfg skjdfgjiabgjasdkgj adlskjgb alkdsjg ajkdshg akjdsgh akjdshg akjdsg kdjsgh akjdgb akjdg ajkdshg lakjdsg lakjdsbg lkajsdb gakjsdbg alksjdbg aksjdgb aksjdgb lakjdsg akjsdbg alkjsdbg lkjasdbg akjdbg lakjdsgb lsjkdgb oausgb alkjsdbgl kajsdbgoiauwbeg jabsdlgkj alsdkjgb akjdsbg kjabds gkjabsdog kjbalskdjgbjasd bgjasb dglkajdgsohwejkg alsdkjgburig touasdgkjbfdgyureglkjrbg oi jdsgoiuadb gkj asdbguwrbg  "
                    className="w-full bg-white textarea textarea-bordered textarea-md max-w-screen md:max-w-md: md:mt-2 lg:max-w-2xl xl:max-w-4xl"
                    disabled
                  />
                </div> */}
                  <div className="flex-row-reverse gap-1 pt-4 pb-6 md:flex">
                    <button
                      disabled={buttonDisable}
                      onClick={() => handleVerifSubmit("accept")}
                      className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo md:w-1/6"
                    >
                      Accept
                    </button>
                    <button
                      disabled={buttonDisable}
                      onClick={handleOpen}
                      // onClick={() => handleVerifSubmit("reject")}
                      className="text-white bg-red-600 btn btn-block btn-error hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 md:w-1/6"
                    >
                      Reject Reason
                    </button>
                    <Modal2 /* Modal 1 */
                      open={open}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Reason
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                          <div className="px-3">
                            <form action="">
                              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                                <textarea className="w-full bg-white textarea textarea-bordered textarea-md max-w-screen md:max-w-md: md:mt-2 lg:max-w-2xl xl:max-w-4xl" />
                              </div>
                            </form>
                          </div>
                          <div className="flex flex-row-reverse gap-2 mt-4">
                            <button
                              // disabled={isDisabled}
                              className="w-20 text-white bg-indigo btn btn-sm hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                              onClick={handleClose}
                            >
                              Reject
                            </button>
                          </div>
                        </Typography>
                      </Box>
                    </Modal2>
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

const VerifikasiDomisili = () => {
  const NIK = useLocation()?.state?.nik;
  const navigate = useNavigate();
  const [dataPengajuan, setDataPengajuan] = useState([]);
  const pending = async () => {
    try {
      const response = await API.get(`domisili/${NIK}`);
      setDataPengajuan(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    pending();
  }, []);

  useEffect(() => {
    console.log(new Cookies().get("userLog"));
    if (new Cookies().get("userData").user.role !== "admin") {
      navigate("/");
    }
  });
  return (
    <>
      <NavbarADM />
      <RenderList dataPengajuan={dataPengajuan} />
      <Footer />
    </>
  );
};
export default VerifikasiDomisili;
