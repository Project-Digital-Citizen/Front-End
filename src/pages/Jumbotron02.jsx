import ilustrasi01 from "../assets/images/ilustrasi01.png";
import ktp from "../assets/images/ktp.png";
import domisili from "../assets/images/domisili.png";

const Jumbotron02 = () => {
  return (
    <>
      <div>
        <div className="py-[5rem] bg-indigo flex flex-row items-center">
          <div className="md:basis-3/5">
            <div className="w-[50rem] m-[5rem]">
              <p className="ms-5 text-7xl text-white font-extrabold">
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
          <div className="w-20 md:basis-2/5">
            <div className="">
              <div className="">
                <div className="m-5 justify-center">
                  <img className="" src={ilustrasi01} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-[5rem] bg-white flex flex-row items-center">
          <div className="w-20 md:basis-2/5">
            <div className="">
              <div className="">
                <div className="m-[5rem] justify-center">
                  <img className="" src={ilustrasi01} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:basis-3/5">
            <div className="w-[50rem] m-[5rem]">
              <p className="ms-5 text-7xl text-black font-extrabold">
                Digital Citizen
              </p>
              <p className="ms-7 text-black text-lg my-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci possimus vitae rem recusandae illo culpa asperiores
                assumenda! Sit tempora voluptate alias non, voluptates nobis
                voluptatum in praesentium reprehenderit quibusdam deleniti,
                eaque necessitatibus illo et tempore rerum iusto impedit ipsam
                quo.
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[5rem] bg-indigo flex flex-row items-center flex-wrap">
        <div className="">
          <div className="w-[50rem] m-[5rem]">
            <p className="ms-5 text-7xl text-white font-extrabold">
              Lorem Ipsum
            </p>
            <p className="ms-7 text-white text-lg my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              possimus optio voluptatum, nobis, earum reprehenderit corrupti,
              facilis ipsum quidem cum dolorum! Beatae inventore autem
              consequuntur, mollitia, eius expedita illo ipsam dolore corporis
              quaerat accusamus nobis ducimus! Magni id perferendis esse harum
              soluta praesentium minima, autem vel dolores recusandae velit
              repellendus.
            </p>
          </div>
        </div>

        <div className="flex gap-5 justify-center px-[8rem]">
          <div className="w-[20rem] h-[25rem] bg-white rounded-xl">
            <div className="h-[25rem] justify-center">
              <div className="flex-col text-center my-4 py-auto">
                <img className=" my-3 m-5 mx-auto" src={ktp} alt="" />
                <p className="font-bold text-lg text-black m-5">KTP</p>
                <p className="font-bold text-sm text-black m-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  quibusdam reprehenderit sit consequuntur?
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  quibusdam reprehenderit sit consequuntur?
                </p>
                <button className="border-2 border-indigo font-black   mx-auto rounded-md px-2">
                  Preview
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
