import React, { useState } from "react";
import contact1 from "./contact3.avif";
import { send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const initial = {
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };
  const [data, setData] = useState(initial);

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    send("service_iwtfelg", "template_am2iv1l", data, "Mdfl_6hnFH7sZMqrd")
      .then((response) => {
        alert("SUCCESS!", response.status, response.text);
        setData(initial);
      })
      .catch((err) => {
        alert("FAILED...", err);
      });
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONNECT WITH ME</h4>
            <h1>Contact</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} className="handshake" alt="" />
                </div>
                <div className="details">
                  <h1>Neeraj Kumar</h1>
                  <p>
                    I am available for hiring. Connect with me via and call in
                    to my account.
                  </p>{" "}
                  <br />
                  <p>Phone: +91 9650788185</p>
                  <p>Email: imneerajkumar23@gmail.com</p>
                  <p>Address: D-13/109, Tomar Colony, Burari, Delhi 110084</p>
                  <br />
                  <span>CONNECT WITH ME</span>
                  <div className="button f_flex">
                    <a
                      href="https://linkedin.com/in/imneerajkumar"
                      className="btn_shadow"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://github.com/imneerajkumar"
                      className="btn_shadow"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://instagram.com/imneeraj_kumar"
                      className="btn_shadow"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://twitter.com/nijjukr"
                      className="btn_shadow"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="8"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
