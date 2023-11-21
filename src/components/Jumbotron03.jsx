import ktp from "../public/images/ktp.png";
import domisili from "../public/images/domisili.png";

const Jumbotron03 = () => {
  return (
    <>
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
    </>
  );
};

export default Jumbotron03;
