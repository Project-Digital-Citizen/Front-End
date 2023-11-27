import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ktp from "../assets/images/ktp.png";
import domisili from "../assets/images/domisili.png";

import ilus from "../assets/images/ilustrasi01.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="bg-indigo ">
        <div className="px-6 max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0 lg:h-[27rem]">
          <div className="text-white py-5 md:p-12 flex-1 md:my-auto">
            <img
              src={ilus}
              alt="Laptop"
              className="sm:mt-6 h-full w-full object-cover object-center lg:hidden"
            />
            <h1 className="text-5xl font-bold mb-3">Let's Gooo</h1>
            <p>Proses pengurusan surat menjadi lebih efisien dan efektif</p>
            <a
              href="#more"
              className="btn btn-sm btn-ghost font-normal border-white px-4 mt-2 hover:bg-white hover:text-indigo"
            >
              More
            </a>
          </div>
          <div className="hidden lg:flex w-[500px] h-auto p-5 mx-auto my-auto">
            <img src={ilus} alt="Laptop" className="object-cover " />
          </div>
        </div>
      </div>
      {/*  */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 250">
        <path
          fill="#83A2FF"
          fillOpacity="1"
          d="M0,128L60,149.3C120,171,240,213,360,202.7C480,192,600,128,720,117.3C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/*  */}
      <div className="bg-white" id="more">
        <div className="px-6 max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0 lg:h-[20rem]">
          <div className="text-black py-5 md:p-12 flex-1 md:my-auto lg:hidden ">
            <img
              src={ilus}
              alt="Laptop"
              className="sm:mt-6 h-full w-full object-cover object-center"
            />
            <div className="pt-3 lg:hidden">
              <h1 className="text-5xl font-bold mb-3">Digital Citizen</h1>
              <p>
                Digital citizen merupakan website yang dirancang untuk
                memudahkan masyarakat dalam melakukan pengajuan surat seperti
                KTP dan surat domisili. Website ini diharapkan dapat mempermudah
                akses masyarakat terhadap layanan serta membawa perubahan
                positif dalam kehidupan masyarakat
              </p>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-[1500px] h-auto p-5 mx-auto my-auto">
            <img src={ilus} alt="Laptop" className="object-cover " />
          </div>
          <div className="hidden lg:flex flex-col h-auto p-5 mx-auto my-auto mr-6 ">
            <h1 className="text-5xl font-bold mb-3">Digital Citizen</h1>
            <p>
              Digital citizen merupakan website yang dirancang untuk memudahkan
              masyarakat dalam melakukan pengajuan surat seperti KTP dan surat
              domisili. Website ini diharapkan dapat mempermudah akses
              masyarakat terhadap layanan serta membawa perubahan positif dalam
              kehidupan masyarakat
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
        <path
          fill="#83A2FF"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,128C672,160,768,224,864,224C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/*  */}
      <div className="bg-indigo pb-3">
        <div className="px-6 max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0 lg:h-[27rem]">
          <div className="text-white py-5 md:p-12 flex-1 md:my-auto">
            <h1 className="text-5xl font-bold mb-3 text-center">
              Pengajuan Surat
            </h1>
            <div className="flex my-10 w-[20rem] h-[25rem] bg-white rounded-xl border mx-auto md:hidden">
              <div className="space-y-6 mx-auto my-auto">
                <img src={ktp} alt="KTP" className="shadow-lg mx-auto" />
                <p className="text-center text-xl font-black text-black">KTP</p>
                <p className="text-center px-2 text-md font-medium text-black">
                  Kartu Tanda Penduduk merupakan kartu identitas diri secara
                  resmi yang diterbitkan oleh Kementrian Dalam Negeri
                </p>
                <div className="flex">
                  <button
                    className="btn btn-sm text-white bg-indigo  border-indigo mx-auto hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                    onClick={() => navigate("/formktp")}
                  >
                    Buat
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex my-10 w-[20rem] h-[25rem] bg-white rounded-xl border mx-auto md:hidden">
              <div className="space-y-6 mx-auto my-auto">
                <img
                  src={domisili}
                  alt="Surat Domisili"
                  className="shadow-lg mx-auto"
                />
                <p className="text-center text-xl font-black text-black">
                  Surat Domisili
                </p>
                <p className="text-center px-2 text-md font-medium text-black">
                  Surat domisili merupakan dokumen untuk membuktikan bahwa
                  seseorang betul tinggal pada suatu wilayah tertentu
                </p>
                <div className="flex">
                  <button
                    className="btn btn-sm text-white bg-indigo  border-indigo mx-auto hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                    onClick={() => navigate("/formdomisili")}
                  >
                    Buat
                  </button>
                </div>
              </div>
            </div>

            {/*  */}
            <h1 className="hidden md:text-5xl font-bold mb-3">
              Pengajuan Surat
            </h1>
          </div>
          <div className="hidden md:flex gap-4 w-auto h-auto p-5 mx-auto my-auto lg:mr-6 ">
            <div className="flex w-[20rem] h-[25rem] bg-white rounded-xl border mx-auto">
              <div className="space-y-6 mx-auto my-auto">
                <img src={ktp} alt="KTP" className="shadow-lg mx-auto" />
                <p className="text-center text-xl font-black text-black">KTP</p>
                <p className="text-center px-2 text-md font-medium text-black">
                  Kartu Tanda Penduduk merupakan kartu identitas diri secara
                  resmi yang diterbitkan oleh Kementrian Dalam Negeri
                </p>
                <div className="flex">
                  <button
                    className="btn btn-sm text-white bg-indigo  border-indigo mx-auto hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                    onClick={() => navigate("/formktp")}
                  >
                    Buat
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex w-[20rem] h-[25rem] bg-white rounded-xl border mx-auto">
              <div className="space-y-6 mx-auto my-auto">
                <img
                  src={domisili}
                  alt="Surat Domisili"
                  className="shadow-lg mx-auto"
                />
                <p className="text-center text-xl font-black text-black">
                  Surat Domisili
                </p>
                <p className="text-center px-2 text-md font-medium text-black">
                  Surat domisili merupakan dokumen untuk membuktikan bahwa
                  seseorang betul tinggal pada suatu wilayah tertentu
                </p>
                <div className="flex">
                  <button
                    className="btn btn-sm text-white bg-indigo  border-indigo mx-auto hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                    onClick={() => navigate("/formdomisili")}
                  >
                    Buat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Hero;
