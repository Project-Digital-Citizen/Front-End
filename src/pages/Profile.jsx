import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="bg-background flex items-center h-screen justify-center py-10">
        <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[35%]">
          {/* Isi kotak center di sini */}
          <div
            className="flex-col border-2 border-black justify-center"
          >
            
            <div className="flex avatar placeholder my-auto border-2 border-black justify-center upload-file">
              <label htmlFor="pp" className="bg-neutral text-neutral-content rounded-full w-24 h-24">
                <img src="../assets/images/person.png" alt="" />
              </label>
              <input type="file" id="pp" className="uploadpp hidden"/>
            </div>
            <div className="border-2 border-black flex flex-col">
              <h1 className="text-black text-2xl font-black text-center">
                Welcome to Digital
              </h1>
              <span className="text-center">NIK : 92845623945</span>
            </div>
          </div>

          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                <label className="label">
                  <span className="label-text font-black">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="contoh@gmail.com"
                  className="input input-bordered input-md w-full max-w-screen md:max-w-xs"
                />
              </div>
              <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                <label className="label">
                  <span className="label-text font-black">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  className="input input-bordered input-md w-full max-w-screen md:max-w-xs"
                />
              </div>
              <div className="flex flex-row-reverse pt-2">
                <a className="link ">Lupa Password</a>
              </div>
              <div className="pt-4 pb-6">
                <button className="btn btn-block bg-indigo text-white ">
                  Log In
                </button>
                <span className="text-xs -mt-[3px] ml-[2px] text-black">
                  belum memiliki akun?
                  <a
                    className="link link-primary"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </a>
                </span>
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
