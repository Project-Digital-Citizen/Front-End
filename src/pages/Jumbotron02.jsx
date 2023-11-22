import ilustrasi01 from "../assets/images/ilustrasi01.png";

const Jumbotron02 = () => {
  return (
    <>
      <div>
        <div className="flex flex-col  bg-indigo md:flex-row-reverse h-screen">
          <div className=" border-2 border-blue-700 md:basis-3/5">
            <div className="border border-red-600 ">
              <div className="border border-black ">
                <div className="max-w-sm m-5 justify-center border border-red-700">
                  <img
                    className="justify-end justify-items-end items-end"
                    src={ilustrasi01}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" border-2 border-green-800 md:basis-2/5">
            <div>
              <p className="ms-5 text-7xl text-red-600 font-extrabold">
                Let`s Gooo
              </p>
              <p className="ms-7 text-white text-lg my-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur odio reiciendis asperiores exercitationem dignissimos
                eaque!
              </p>
              <div>
                <button className="ms-7 border border-white px-7 rounded my-2 text-white">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron02;
