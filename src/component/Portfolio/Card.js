import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="box btn_shadow ">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex" onClick={toggleModal}>
          <span>{props.category}</span>
        </div>
        <div className="title" onClick={toggleModal}>
          <h2>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>{props.category}</span>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
              <p>{props.techs}</p>
              <div className="button f_flex mtop">
                <a href={props.code}>
                  <button className="btn_shadow">
                    <i className="fas fa-code"></i>
                  </button>
                </a>
                {props.demo && (
                  <a href={props.demo}>
                    <button className="btn_shadow">
                      <i className="fas fa-play-circle"></i>
                    </button>
                  </a>
                )}
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
