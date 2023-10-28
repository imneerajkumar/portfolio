import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    props.isModal && setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="box btn_shadow" onClick={toggleModal}>
        <div className="title_content d_flex">
          <div className="title">
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
          <div className="rate">
            <button className="btn_shadow">{props.rate}</button>
          </div>
        </div>
        <hr />
        <p>{props.desc}</p>
        {props.isModal && (
          <a href="#popup" className="Experience arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        )}
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="Resume modal-content modal-text d_flex">
            <h2>{props.title}</h2>
            <span>{props.year}</span>
            <p className="display-linebreak">{props.details}</p>
            <div className="rate">
              <button className="btn_shadow ">{props.rate}</button>
            </div>
            <button className="close-modal btn_shadow" onClick={toggleModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
