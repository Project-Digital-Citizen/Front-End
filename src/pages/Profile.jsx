import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import person from "../assets/images/person.png";
import mailIMG from "../assets/images/element mail.png"

const Profile = () => {
  return (
    <>
      <Navbar />
      <img src={mailIMG} alt="" className="absolute -bottom-10"/>
      <div className="bg-background flex items-center h-screen justify-center py-10">
        <div className="bg-white w-5/6 rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[35%]">
          {/* Isi kotak center di sini */}
          <div className="flex-colk justify-center">
            <div className="flex avatar my-auto justify-center py-6">
              <label
                htmlFor="pp"
                className="bg-neutral text-neutral-content rounded-full w-24 h-24"
              >
                <img src={person} alt="" />
              </label>
              <input type="file" id="pp" className="hidden" />
            </div>
            <div className="flex flex-col pb-2">
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
              <div className="flex pt-4 pb-6 gap-3">
                <button className="btn bg-indigo text-white ">Save</button>
                <button className="btn btn-error text-white ">Sign Out</button>
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
