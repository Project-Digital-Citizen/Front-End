import ilustrasi01 from "../public/images/ilustrasi01.png";

const Jumbotron02 = () => {
  return (
    <>
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
    </>
  );
};

export default Jumbotron02;
