import { useNavigate } from "react-router-dom";
import logoDigzen from "../assets/images/logo_3.png";

const NavbarADM = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-[4rem] justify-between bg-white items-center shadow-lg z-50 sticky top-0">
        <div className="">
          <div className="lg:hidden">
            <h2 className="w-[58px] md:hidden"></h2>
          </div>
          {/*  */}
          <div className="w-auto gap-2 -ml-6 cursor-pointer lg:flex pl-9 md:ml-0">
            <img
              src={logoDigzen}
              alt=""
              className="h-9"
              onClick={() => navigate("/berandaadm")}
            />
            <div className="hidden lg:flex md:w-[100px] items-center">
              <input
                type="text"
                placeholder="Search"
                className="border w-[180px] p-[2px] pl-3 rounded-l"
              />
              <button className="flex bg-blue-500 text-white p-[3px] rounded-r">
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer lg:hidden ">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border w-[180px] p-[2px] pl-3 rounded-l"
            />
            <button className="flex bg-indigo text-white p-[3px] rounded-r">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <a onClick={() => navigate("/berandaadm")}>Beranda</a>
            </li>
            <li>
              <a onClick={() => navigate("/mailinglist")}>
                Mailing List{" "}
                <div className="badge badge-sm badge-accent badge-outline">
                  +1
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/account")}>Account</a>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="hidden dropdown dropdown-end lg:block pr-9">
          <i className="px-3">Admin</i>
          <label tabIndex={0} className="">
            <div className="m-1 avatar placeholder btn btn-circle">
              <div className="w-12 rounded-full bg-neutral text-neutral-content">
                <span>AD</span>
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className="justify-between"
                onClick={() => navigate("/profile")}
              >
                Profile
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/login")}>Logout</a>
            </li>
          </ul>
        </div>{" "}
        <div className=" lg:hidden">
          <div className=" drawer drawer-end lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className=" drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current "
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
            <div className="z-50 drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="min-h-full gap-4 p-6 menu menu-vertical w-58 bg-base-200">
                {/* Sidebar content here */}
                <li>
                  <details className="w-auto ">
                    <summary className="p-2">
                      <div className="avatar placeholder">
                        <div className="w-12 rounded-full bg-neutral text-neutral-content">
                          <span>AD</span>
                        </div>
                      </div>
                      <i>Admin</i>
                    </summary>
                    <ul>
                      <li>
                        <a
                          className="p-2 hover:border border-indigo"
                          onClick={() => navigate("/profile")}
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="p-2 hover:border border-indigo"
                          onClick={() => navigate("/login")}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <ul className="w-56 menu bg-base-200 rounded-box">
                  <li>
                    <a onClick={() => navigate("/berandaadm")}>Beranda</a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/mailinglist")}>
                      Mailing List{" "}
                      <div className="badge badge-sm badge-accent badge-outline">
                        +1
                      </div>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/account")}>Account</a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarADM;
