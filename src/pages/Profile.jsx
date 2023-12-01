import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import person from "../assets/images/user.png";
import mailIMG from "../assets/images/ele.png";

const Profile = () => {
  return (
    <>
      <Navbar />
      <img
        src={mailIMG}
        alt=""
        className="absolute top-0 right-0 z-0 object-cover object-left w-32 h-52"
      />
      <img
        src={mailIMG}
        alt=""
        className="absolute left-0 z-0 object-cover object-right w-32 h-52 -bottom-28"
      />
      <div className="flex items-center justify-center h-screen py-10 mb-5 bg-background">
        <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[35%] relative">
          {/* Isi kotak center di sini */}
          <div className="">
            <div className="flex justify-center py-6 my-auto">
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
              <h1 className="text-2xl font-black text-center text-black">
                Endie Parpahan
              </h1>
              <span className="text-center">NIK : 92845623945</span>
            </div>
          </div>

          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                <span className="font-black label-text">Email</span>
                <span className="w-full max-w-screen md:w-3/5">
                  gmail@gmail.com
                </span>
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                <span className="font-black label-text">Phone Number</span>
                <span className="w-full max-w-screen md:w-3/5">
                  08123124134
                </span>
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row md:items-center">
                <span className="font-black label-text">Jenis Kelamin</span>
                <span className="w-full max-w-screen md:w-3/5">Perempuan</span>
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <label className="label">
                  <span className="-ml-1 font-black label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  className="w-full input input-bordered input-sm max-w-screen md:w-3/5"
                />
              </div>
              <div className="flex flex-row-reverse gap-3 pt-4 pb-6">
                <button className="text-white btn btn-md bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo">
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
