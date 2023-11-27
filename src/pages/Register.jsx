import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className=" border-2 border-black "> */}
      <div className="bg-background flex items-center h-screen justify-center py-10">
        <div className="bg-white w-5/6 rounded shadow-md y-10">
          {/* Isi kotak center di sini */}
          <h1 className="text-indigo text-2xl font-black text-center p-4 px-10 pt-6">
            Register
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form action="">
              <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                <label className="label">
                  <span className="label-text font-black">Full Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Full Name"
                  className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>
              <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                <label className="label">
                  <span className="label-text font-black">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="contoh@gmail.com"
                  className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>
              <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                <label className="label">
                  <span className="label-text font-black">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="08999999"
                  className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>

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
                  <span className="label-text font-black">Password</span>
                </label>
                <input
                  type="Password"
                  placeholder="********"
                  className="input input-bordered input-md w-full max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                />
              </div>

              <div className="pt-4 pb-6">
                <button className="btn btn-block bg-indigo text-white ">
                  Register
                </button>
                <span className="text-xs -mt-[3px] ml-[2px] text-black">
                  sudah memiliki akun?
                  <a
                    className="link link-primary"
                    onClick={() => navigate("/login")}
                  >
                    login
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;