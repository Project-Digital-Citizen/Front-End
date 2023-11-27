import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="bg-background flex items-center h-screen justify-center py-10">
        <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[35%]">
          {/* Isi kotak center di sini */}
          <div className="flex border-2 border-black">
            <div className="avatar placeholder my-auto">
              <div className="bg-neutral text-neutral-content rounded-full w-24">
                <span className="text-3xl">User</span>
              </div>
            </div>
            <h1 className="text-black text-2xl font-black text-center p-4 px-10 pt-6">
              Welcome to Digital <span className="text-indigo">Citizen</span>
            </h1>
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
