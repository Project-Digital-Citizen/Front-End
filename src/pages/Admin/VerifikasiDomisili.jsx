import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import NavbarADM from "../../components/NavbarADM";

const VerifikasiDomisili = () => {
  return (
    <>
      <NavbarADM />
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
                    23897452973845
                  </span>
                </div>

                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">
                    Nama Kepala Keluarga
                  </span>
                  <span className="w-full max-w-screen md:w-3/5">Citizen</span>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">Alamat Baru</span>
                  <span className="w-full max-w-screen md:w-3/5">Citizen</span>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">Provinsi</span>
                  <span className="w-full max-w-screen md:w-3/5">Citizen</span>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text md:ml-12">
                    Kabupaten/Kota
                  </span>
                  <span className="w-full max-w-screen md:w-2/4 md:-">
                    Citizen
                  </span>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text md:ml-12">
                    Kecamatan
                  </span>
                  <span className="w-full max-w-screen md:w-2/4 md:-">
                    Citizen
                  </span>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text md:ml-12">
                    Kelurahan/Desa
                  </span>
                  <span className="w-full max-w-screen md:w-2/4 md:-">
                    Citizen
                  </span>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">
                    Klasifikasi Pindah
                  </span>
                  <span className="w-full max-w-screen md:w-3/5">Citizen</span>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">
                    NIK Keluarga Yang Pindah
                  </span>
                  <span className="w-full max-w-screen md:w-3/5">
                    928743562834
                  </span>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">Alasan Pindah</span>
                  <span className="w-full max-w-screen md:w-3/5">Citizen</span>
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
                      source="KK Dari Daerah Asal"
                    >
                      KK Dari Daerah Asal
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
                      source="KTP Keluarga Yang Pindah"
                    >
                      KTP Keluarga Yang Pindah
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
                  <button className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo md:w-1/6">
                    Accept
                  </button>
                  <button className="mt-2 text-white bg-red-600 md:mt-0 btn btn-block btn-error hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 md:w-1/6">
                    Reject
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
export default VerifikasiDomisili;
