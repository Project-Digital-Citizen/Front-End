import ilustrasi01 from "../assets/images/ilustrasi01.png";

const Jumbotron02 = () => {
  return (
    <>
      <div>
        <div className="h-[35rem] bg-indigo flex flex-row-reverse items-center">
          <div className="w-20 md:basis-2/5">
            <div className="">
              <div className="">
                <div className="m-5 justify-center">
                  <img
                    className=""
                    src={ilustrasi01}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Jumbotron02;
