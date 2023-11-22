import ilustrasi01 from "../assets/images/ilustrasi01.png";
import ktp from "../assets/images/ktp.png";
import domisili from "../assets/images/domisili.png";

const Jumbotron = () => {
  return (
    <>
      {/* hero 1 */}
      <div className="flex px-10 bg-indigo gap-40">
        <div className="h-screen flex flex-col w-3/5 justify-center">
          <p className="ms-5 text-7xl text-white font-extrabold">Let`s Gooo</p>
          <p className="ms-7 text-white text-lg my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            odio reiciendis asperiores exercitationem dignissimos eaque!
          </p>
          <div>
            <button className="ms-7 border border-white px-7 rounded my-2 text-white">
              More
            </button>
          </div>
        </div>
        <div className="h-screen flex flex-col w-3/5 justify-center">
          <img src={ilustrasi01} alt="" />
        </div>
      </div>
      {/* end */}

      {/* hero 2 */}
      <div className="flex px-10 bg-base-100 gap-40">
        <div className="h-screen flex flex-col bg-base-100 w-2/5 justify-center">
          <img src={ilustrasi01} alt="" />
        </div>
        <div className="h-screen flex flex-col bg-base-100 w-3/5 justify-center">
          <div className="">
            <p className="ms-5 text-7xl text-black font-extrabold">
              Digital Citizen
            </p>
            <p className="ms-7 text-black text-lg my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              quas quam possimus veritatis consequuntur, debitis itaque quia
              quos temporibus. Quis aperiam, perferendis nemo libero tenetur
              quibusdam reiciendis vitae mollitia ab provident.
            </p>
          </div>
        </div>
      </div>
      {/* end */}

      {/* hero 3 */}
      <div className=" flex px-10 bg-indigo">
        <div className="h-screen flex flex-col w-2/5 justify-center">
          <p className="ms-5 text-7xl text-white font-extrabold">
            Surat Menyurat
          </p>
          <p className="ms-7 text-white text-lg my-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
            nisi culpa amet sequi provident nostrum quos enim, architecto
            incidunt harum, mollitia rem eos unde temporibus odio modi dolor in
            molestias natus.
          </p>
        </div>
        <div className="h-screen flex flex-col w-3/5 justify-center">
          <div className="flex gap-5 justify-center">
            <div className="w-[20rem] h-[25rem] bg-white rounded-xl">
              <div className="flex h-[25rem] justify-center">
                <div className="flex-col text-center my-4 py-auto">
                  <img className=" my-3 m-5 mx-auto" src={ktp} alt="" />
                  <p className="font-bold text-lg text-black m-5">KTP</p>
                  <p className="font-bold text-sm text-black m-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum quibusdam reprehenderit sit consequuntur?
                  </p>
                  <button className="border-2 border-indigo font-black   mx-auto rounded-md px-2">
                    Preview
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[20rem] h-[25rem] bg-white rounded-xl">
              <div className="flex h-[25rem] justify-center">
                <div className="flex-col text-center my-4 py-auto">
                  <img className=" my-3 m-5 mx-auto" src={domisili} alt="" />
                  <p className="font-bold text-lg text-black m-5">
                    Surat Domisili
                  </p>
                  <p className="font-bold text-sm text-black m-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum quibusdam reprehenderit sit consequuntur?
                  </p>
                  <button className="border-2 border-indigo font-black   mx-auto rounded-md px-2">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
};

export default Jumbotron;
