import logoDigzen from "../public/images/logoDigzen.png";
import person from "../public/images/person.svg";

const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="navbar bg-base-100 px-10">
          <div className="navbar-start gap-2">
            <div>
              <img src={logoDigzen} alt="" />
            </div>
            <a className="text-xl font-black text-indigo">Digital Citizen</a>
          </div>
          <div className="navbar-center">
            <button className="text-black font-semibold p-2 hover:border-b-2 border-indigo">
              Beranda
            </button>
            <button className="text-black font-semibold p-2 hover:border-b-2 border-indigo">
              Pengajuan Surat
            </button>
          </div>
          <div className="navbar-end gap-2">
            <div>
              <p className="text-black font-semibold">Username</p>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    className="indigo"
                    alt="Tailwind CSS Navbar component"
                    src={person}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
