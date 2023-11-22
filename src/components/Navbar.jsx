import logoDigzen from "../assets/images/logoDigzen.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white border">
        {/* drawer start */}
        <div className="drawer w-auto md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu menu-vertical gap-4 p-6 w-80 min-h-full bg-base-200 [&_li>*]:rounded-none">
              {/* Sidebar content here */}
              <li>
                <details open className="w-auto ">
                  <summary className="p-2">
                    <div className="avatar placeholder">
                      <div className=" bg-neutral text-neutral-content rounded-full w-12">
                        <span>MX</span>
                      </div>
                    </div>
                    <i>Username</i>
                  </summary>
                  <ul>
                    <li>
                      <a>Profile</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="p-2 hover:border-b-4 border-indigo">Beranda</a>
              </li>
              <li>
                <a className="p-2 hover:border-b-4 border-indigo">
                  Pengajuan Surat
                </a>
              </li>
              <li>
                <a className="p-2 hover:border-b-4 border-indigo">Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        {/* drawer end */}

        {/* navbar start */}
        <div className="px-[3rem] navbar-start">
          <img src={logoDigzen} alt="" />
          <p className="text-lg font-bold p-1 text-indigo">Digital Citizen</p>
        </div>
        {/* navbar start end */}

        {/* navbar center */}
        <div className="navbar-center hidden md:block">
          <ul className="menu-horizontal gap-2">
            <li>
              <a href="#" className="p-2 hover:border-b-4 border-indigo">Beranda</a>
            </li>
            <li>
              <a href="#" className="p-2 hover:border-b-4 border-indigo">
                Pengajuan Surat
              </a>
            </li>
          </ul>
        </div>
        {/* navbar center end */}

        {/* navbar end */}
        <div className="px-[3rem] navbar-end">
          <div className="dropdown dropdown-end hidden md:block">
            <i className="p-3">Username</i>
            <label tabIndex={0} className="">
              <div className="avatar placeholder btn btn-circle m-1">
                <div className=" bg-neutral text-neutral-content rounded-full w-12">
                  <span>MX</span>
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
        {/* navbar end end */}
      </div>
    </>
  );
};

export default Navbar;
