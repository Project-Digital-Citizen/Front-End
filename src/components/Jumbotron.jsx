import ilustrasi01 from "../public/images/ilustrasi01.png";

const Jumbotron = () => {
  return (
    <>
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
    </>
  );
};

export default Jumbotron;
