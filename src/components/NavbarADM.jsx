import { useNavigate } from "react-router-dom";
import logoDigzen from "../assets/images/logo_3.png";
import { Cookies } from "react-cookie";
import { useEffect, useState } from "react";
import { API } from "../data/api-digzen";

const RenderList = (props) => {
  // eslint-disable-next-line react/prop-types
  const totalKtp = props?.dataPengajuan?.ktp?.data?.data?.length;
  const totalDom = props?.dataPengajuan?.dom?.data?.data?.length;

  if (!totalKtp || !totalDom || totalKtp == 0 || totalDom == 0) {
    return 0;
  } else {
    const total = parseInt(totalKtp) + parseInt(totalDom);
    return total;
  }
};

const NavbarADM = () => {
  const [dataPengajuan, setDataPengajuan] = useState([]);

  const pending = async () => {
    try {
      const responsektp = await API.get("ktp");
      const responsedom = await API.get("domisili");
      setDataPengajuan({
        ktp: responsektp,
        dom: responsedom,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    pending();
  }, []);

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleAdminLog = () => {
    if (cookies.get("userLog")) {
      return (
        <div className="flex">
          <i className="hidden px-1 py-4 lg:flex-col lg:flex">
            {cookies.get("userData").user.nama}
          </i>
          <div className="hidden pr-5 dropdown dropdown-end lg:block">
            <label tabIndex={0} className="">
              <div className="m-1 avatar placeholder btn btn-circle">
                <div className="w-12 rounded-full bg-neutral text-neutral-content">
                  <img
                    src={
                      cookies.get("userData").user.userImage
                        ? cookies.get("userData").user.userImage
                        : `https://ui-avatars.com/api/?name=${
                            cookies.get("userData").user.nama
                          }`
                    }
                    className="bg-white w-[8rem] border-2 border-black rounded-full"
                  />
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
        </div>
      );
    }
  };

  return (
    <>
      <div className="flex h-[4rem] justify-between bg-white items-center shadow-lg z-50 sticky top-0">
        <div className="">
          <div className="lg:hidden">
            <h2 className="w-[58px] md:hidden"></h2>
          </div>
          {/*  */}
          <div
            className="hidden cursor-pointer md:flex pl-9"
            onClick={() => navigate("/admin")}
          >
            <img src={logoDigzen} alt="" className="h-9" />
            <p className="p-1 text-lg font-bold text-indigo">Digital Citizen</p>
          </div>
        </div>
        <div
          className="flex cursor-pointer md:hidden "
          onClick={() => navigate("/admin")}
        >
          <img src={logoDigzen} alt="" className="h-9" />
          <p className="p-1 text-lg font-bold text-indigo">Digital Citizen</p>
        </div>
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <a onClick={() => navigate("/admin")}>Beranda</a>
            </li>
            <li>
              <a onClick={() => navigate("/")}>Beranda User</a>
            </li>
            <li>
              <a onClick={() => navigate("/mailinglist")}>
                Mailing List{" "}
                <div className="badge badge-sm badge-accent badge-outline">
                  <RenderList dataPengajuan={dataPengajuan} />
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/account")}>Account</a>
            </li>
          </ul>
        </div>
        {/*  */}
        {handleAdminLog()}{" "}
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
                          <img
                            src={
                              cookies.get("userData").user.userImage
                                ? cookies.get("userData").user.userImage
                                : `https://ui-avatars.com/api/?name=${
                                    cookies.get("userData").user.nama
                                  }`
                            }
                            className="bg-white w-[8rem] border-2 border-black rounded-full"
                          />
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
                    <a onClick={() => navigate("/admin")}>Beranda</a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/")}>Beranda User</a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/mailinglist")}>
                      Mailing List{" "}
                      <div className="badge badge-sm badge-accent badge-outline">
                        <RenderList dataPengajuan={dataPengajuan} />
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
