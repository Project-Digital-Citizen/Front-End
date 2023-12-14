import { useState } from "react";

const Modal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, file, source } = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="btn btn-sm btn-block md:w-auto"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {children}
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none">
            <div className="w-11/12 max-w-5xl modal-box">
              <h3 className="text-lg font-bold">{file}</h3>
              <div className="">
                <img src={source} alt="" />
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
