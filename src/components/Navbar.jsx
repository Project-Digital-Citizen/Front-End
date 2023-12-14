import { useNavigate } from "react-router-dom";
import logoDigzen from "../assets/images/logo_3.png";
import { Cookies } from "react-cookie";

const Navbar = () => {
  const cookies = new Cookies();

  const handleAdmin = () => {
    if (cookies.get("userLog")) {
      if (cookies.get("userData").user.role == "admin") {
        return (
          <li>
            <a onClick={() => navigate("/admin")}>Beranda Admin</a>
          </li>
        );
      }
    }
  };

  const handleUserLog = (e) => {
    if (cookies.get("userLog")) {
      if (e == 1) {
        return (
          <>
            <div className="hidden dropdown dropdown-end md:block pr-9">
              <i className="px-3">{cookies.get("userData").user.nama}</i>
              <label tabIndex={0} className="">
                <div className="m-1 avatar placeholder btn btn-circle">
                  <div className="w-12 rounded-full bg-neutral text-neutral-content">
                    <span>MX</span>
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
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      cookies.remove("userLog");
                      cookies.remove("userData");
                      navigate("/login");
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <div className=" md:hidden">
              <div className=" drawer drawer-end md:hidden">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
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
                              <span>{cookies.get("userData").user.nama}</span>
                            </div>
                          </div>
                          <i>{cookies.get("userData").user.nama}</i>
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
                              onClick={() => {
                                cookies.remove("userLog");
                                cookies.remove("userData");
                                navigate("/login");
                              }}
                            >
                              Logout
                            </a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <ul className="w-56 menu bg-base-200 rounded-box">
                      <li>
                        <a onClick={() => navigate("/")}>Beranda</a>
                      </li>
                      {handleAdmin()}
                      <li>
                        <details>
                          <summary>Input Pengajuan</summary>
                          <ul>
                            <li>
                              <a onClick={() => navigate("/formktp")}>KTP</a>
                            </li>
                            <li>
                              <a onClick={() => navigate("/formdomisili")}>
                                Surat Domisili
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <a onClick={() => navigate("/statuspengajuan")}>
                          Status Pengajuan
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </>
        );
      } else if (e == 2) {
        return (
          <li>
            <details className="w-auto ">
              <summary className="p-2">
                <div className="avatar placeholder">
                  <div className="w-12 rounded-full bg-neutral text-neutral-content">
                    <span>U</span>
                  </div>
                </div>
                <i>{cookies.get("userData").user.nama}</i>
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
                    onClick={() => {
                      cookies.remove("userLog");
                      cookies.remove("userData");
                      navigate("/login");
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </details>
          </li>
        );
      }
    } else {
      if (e == 1) {
        return (
          <>
            <div>
              <div className="hidden gap-2 mr-10 md:flex ">
                <button
                  className="mx-auto bg-white text-indigo btn btn-sm border-indigo hover:bg-indigo hover:text-white hover:border-1 hover:border-indigo"
                  onClick={() => navigate("/login")}
                >
                  Masuk
                </button>
                <button
                  className="mx-auto text-white btn btn-sm bg-indigo border-indigo hover:bg-white hover:text-indigo hover:border-1 hover:border-indigo"
                  onClick={() => navigate("/register")}
                >
                  Daftar
                </button>
              </div>
              <div className="md:hidden">
                <div className=" drawer drawer-end md:hidden">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />
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
                      {handleUserLog(2)}
                      <ul className="w-56 menu bg-base-200 rounded-box">
                        <li>
                          <a onClick={() => navigate("/")}>Beranda</a>
                        </li>
                        {handleAdmin()}
                        <li>
                          <details>
                            <summary>Input Pengajuan</summary>
                            <ul>
                              <li>
                                <a onClick={() => navigate("/formktp")}>KTP</a>
                              </li>
                              <li>
                                <a onClick={() => navigate("/formdomisili")}>
                                  Surat Domisili
                                </a>
                              </li>
                            </ul>
                          </details>
                        </li>
                        <li>
                          <a onClick={() => navigate("/statuspengajuan")}>
                            Status Pengajuan
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      } else if (e == 2) {
        return (
          <li>
            <button
              className="mx-auto bg-white text-indigo btn btn-sm border-indigo hover:bg-indigo hover:text-white hover:border-1 hover:border-indigo"
              onClick={() => navigate("/login")}
            >
              Masuk
            </button>
            <button
              className="mx-auto text-white btn btn-sm bg-indigo border-indigo hover:bg-white hover:text-indigo hover:border-1 hover:border-indigo"
              onClick={() => navigate("/register")}
            >
              Daftar
            </button>
          </li>
        );
      }
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-[4rem] justify-between bg-white items-center shadow-lg z-50 sticky top-0">
        <div className="">
          <div className="md:hidden">
            <h2 className="w-[58px] md:hidden"></h2>
          </div>
          {/*  */}
          <div
            className="hidden cursor-pointer md:flex pl-9"
            onClick={() => navigate("/")}
          >
            <img src={logoDigzen} alt="" className="h-9" />
            <p className="p-1 text-lg font-bold text-indigo">Digital Citizen</p>
          </div>
        </div>
        <div
          className="flex cursor-pointer md:hidden "
          onClick={() => navigate("/")}
        >
          <img src={logoDigzen} alt="" className="h-9" />
          <p className="p-1 text-lg font-bold text-indigo">Digital Citizen</p>
        </div>
        <div className="hidden md:block">
          <ul className="menu menu-horizontal">
            <li>
              <a onClick={() => navigate("/")}>Beranda</a>
            </li>
            {handleAdmin()}
            <li>
              <details>
                <summary>Pengajuan Surat</summary>
                <ul>
                  <li>
                    <details>
                      <summary>Input Pengajuan</summary>
                      <ul>
                        <li>
                          <a onClick={() => navigate("/formktp")}>KTP</a>
                        </li>
                        <li>
                          <a onClick={() => navigate("/formdomisili")}>
                            Surat Domisili
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a onClick={() => navigate("/statuspengajuan")}>
                      Status Pengajuan
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {/*  */}
        {handleUserLog(1)}{" "}
      </div>

      {/* oldnav */}
    </>
  );
};

export default Navbar;
