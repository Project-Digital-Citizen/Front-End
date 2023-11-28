import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import person from "../assets/images/user.png";
import mailIMG from "../assets/images/element mail.png";

const Profile = () => {
  return (
    <>
      <Navbar />
      <img src={mailIMG} alt="" className="absolute -bottom-10 z-0" />
      <div className=" bg-background flex h-screen justify-center py-10 ">
        <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[35%] relative">
          {/* Isi kotak center di sini */}
          <div className="">
            <div className="flex my-auto justify-center py-6">
              <label htmlFor="pp" className="w-32 p-2">
                <img
                  src={person}
                  alt=""
                  className="border-4 border-black rounded-full"
                />
              </label>
              <input type="file" id="pp" className="hidden" />
            </div>
            <div className="flex flex-col pb-2">
              <h1 className="text-black text-2xl font-black text-center">
                Endie Parpahan
              </h1>
              <span className="text-center">NIK : 92845623945</span>
            </div>
          </div>

          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="form-control w-full md:flex md:flex-row justify-between  pt-4 md:items-center">
                <span className="label-text font-black">Email</span>
                <span className=" w-full max-w-screen md:w-3/5">
                  gmail@gmail.com
                </span>
              </div>
              <div className="form-control w-full md:flex md:flex-row justify-between  pt-4 md:items-center">
                <span className="label-text font-black">Phone Number</span>
                <span className=" w-full max-w-screen md:w-3/5">
                  08123124134
                </span>
              </div>
              <div className="form-control w-full md:flex md:flex-row justify-between pt-4 md:items-center">
                <span className="label-text font-black">Jenis Kelamin</span>
                <span className=" w-full max-w-screen md:w-3/5">Perempuan</span>
              </div>
              <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                <label className="label">
                  <span className="label-text font-black -ml-1">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  className="input input-bordered input-sm w-full max-w-screen md:w-3/5"
                />
              </div>
              <div className="flex flex-row-reverse pt-4 pb-6 gap-3">
                <button className="btn btn-md bg-indigo text-white ">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
