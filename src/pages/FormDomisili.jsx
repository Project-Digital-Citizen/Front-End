import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FormDomisili = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F5F5FA]">
        <div className="max-w-screen text-sm font-black breadcrumbs pt-7 mx-3 ml-8 md:max-w-lg md:ml-[60px]">
          <ul>
            <li>
              <a>Pengajuan Surat</a>
            </li>
            <li>
              <a>Form Pengajuan</a>
            </li>
            <li>Domisili</li>
          </ul>
        </div>
        <div className="justify-center p-5">
          <div className="w-11/12 rounded-xl shadow-2xl bg-white mx-auto ">
            <h1 className="text-indigo text-2xl font-black p-4 px-10 pt-6">
              Pedoman
            </h1>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="p-4">
              <ul className="list-disc ml-10 mr-5">
                <li className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio asperiores quia praesentium molestiae corporis
                  iusto natus repellat nisi aliquid repudiandae.
                </li>
                <li className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quo, veritatis alias voluptatibus tempora
                  provident recusandae explicabo beatae! Ab maiores
                  necessitatibus recusandae totam ad voluptatibus temporibus ea
                  quibusdam dolor provident quidem sint, tempora officiis
                  eligendi voluptatum, quod corporis molestias repellendus
                  exercitationem tenetur modi doloribus? Esse, recusandae
                  inventore quisquam iure corrupti, nobis perspiciatis aliquam
                  necessitatibus odio repellat pariatur voluptatum doloremque
                  nihil, repellendus veniam accusamus reprehenderit eligendi
                  autem natus. Dolore quas necessitatibus, assumenda earum,
                  dignissimos soluta eligendi repellat recusandae sunt veritatis
                  dolor deleniti iure error dicta sapiente. Suscipit, nostrum
                  est rerum architecto, qui nemo temporibus ducimus pariatur
                  repellendus minus exercitationem dignissimos perspiciatis!
                </li>
                <li className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, laudantium suscipit? Iusto iure recusandae tempora,
                  labore, error, ipsa minima veniam earum asperiores eaque
                  perspiciatis hic temporibus officia nobis nesciunt ducimus!
                  Saepe, eius aspernatur. At voluptates eius ipsam reprehenderit
                  beatae sapiente dignissimos vitae ea qui fugiat error, hic
                  veritatis cumque provident.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="justify-center p-5 pb-16">
          <div className="w-11/12 rounded-xl shadow-2xl bg-white mx-auto ">
            <h1 className="text-indigo text-2xl font-black p-4 px-10 pt-6">
              {" "}
              Form Pengajuan
            </h1>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="px-10">
              {/*  */}
              <form action="">
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-lg lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-lg lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-md w-full max-w-screen md:max-w-lg lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="form-control w-full md:flex md:flex-row justify-between pt-4">
                  <label className="label">
                    <span className="label-text">File</span>
                  </label>
                  <input
                    type="file"
                    placeholder="Type here"
                    className="file-input file-input-bordered file-input-md w-full max-w-screen md:max-w-lg lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="pt-4 md:flex flex-row-reverse pb-6">
                  <button className="btn btn-block bg-indigo text-white md:w-1/6">
                    Submit
                  </button>
                </div>
              </form>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormDomisili;
