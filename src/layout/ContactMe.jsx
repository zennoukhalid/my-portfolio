import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

//import ScrollService from "../layout/screenHeading/ScrollService";
import Animations from "../layout/screenHeading/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      console.log("data=======>",data);
      setBool(true);
      const res = await axios.post(`http://localhost:5000/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <div className="central-form">
        <div className="col">
          <a href="https://web.facebook.com/Zennou.khalid">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="khalid1zennou@gmail.com">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="#">
                <i className="fa fa-instagram" />
              </a>
          <a href="www.linkedin.com/in/khalid-zennou">
            <i className="fa fa-linkedin fa-inverse" />
          </a>
          <a href="https://github.com/zennoukhalid">
            <i className="fa fa-github fa-inverse" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
             <h1>Send Your Email Here!</h1>
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name"><b>Name</b></label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email"><b>Email</b></label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message"><b>Message</b></label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    {/* <img src={load1} alt="image not responding" /> */}
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}