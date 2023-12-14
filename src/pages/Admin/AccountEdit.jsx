import Footer from "../../components/Footer";
// import Modal from "../../components/Modal";
import NavbarADM from "../../components/NavbarADM";
import photo from "../../assets/images/photo.png";
import { useState } from "react";

const AccountEdit = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavbarADM />
      <div className="flex items-center justify-center py-10 bg-background">
        <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[80%] lg:w-[60%] xl:w-[65%] relative">
          {/* Isi kotak center di sini */}
          <div className="p-5 text-2xl font-[999] text-center md:text-start">
            Edit Account
          </div>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />

          <div className="m-2 bg-white rounded ">
            <div className="flex justify-center pb-3 md:pb-0">
              {/*  */}
              <div
                className="w-32 y-2 md:w-40"
                onClick={() => setShowModal(true)}
              >
                <img src={photo} alt="" className="border border-black " />
              </div>
            </div>
            {showModal ? (
              <>
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none">
                  <div className="modal-box">
                    <h3 className="p-5 text-lg font-bold">Photo</h3>
                    <div className="flex justify-center mx-auto">
                      <img src={photo} alt="" className="border border-black" />
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <input
                          type="file"
                          className="w-full mb-2 max-w-screen file-input file-input-bordered"
                        />
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
                  <input
                    type="number"
                    placeholder="128347623"
                    className="w-full input input-bordered input-sm max-w-screen md:w-3/5"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">Ariel Tatum</span>
                  <input
                    type="text"
                    placeholder="Ariel Tatum"
                    className="w-full input input-bordered input-sm max-w-screen md:w-3/5"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">Email</span>
                  <input
                    type="email"
                    placeholder="email@gmail.com"
                    className="w-full input input-bordered input-sm max-w-screen md:w-3/5"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">Nomor Telepon</span>
                  <input
                    type="number"
                    placeholder="0835234523"
                    className="w-full input input-bordered input-sm max-w-screen md:w-3/5"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">Jenis Kelamin</span>
                  <select className="w-full max-w-screen md:w-3/5 select select-sm select-bordered">
                    <option disabled selected>
                      Laki-Laki
                    </option>
                    <option>Laki-Laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                  <span className="font-black label-text">Password</span>
                  <input
                    type="password"
                    placeholder="***********"
                    className="w-full input input-bordered input-sm max-w-screen md:w-3/5"
                  />
                </div>

                <div className="flex-row-reverse pt-4 pb-6 md:flex">
                  <button className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo md:w-1/6">
                    Save
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
export default AccountEdit;
