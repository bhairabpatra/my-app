import React, { useEffect, useState } from "react";
import Message from "../info/Message";

import axios from "axios";

const Contact = () => {
  let apiUrl = "http://localhost:3000/contactInfo";

  const [message, setMessage] = useState(false);
  const [inputvalue, setinputValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, inputvalue)
      .then((response) => {
        setMessage(true);
        setinputValue({ name: "", email: "", message: "" });
        
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handelInputValue = (e) => {
    e.preventDefault();
    setinputValue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="contact-wrapper">
        <div className="contact">
          <div className="form-heading">
            <div className="text-center">
              <h3>Contact us</h3>
            </div>
            <div className="message-info">
              {message === true ? <Message message={"Contact form submit sucessfully.."} /> : " "}
            </div>
          </div>
          <div className="">
            <form>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  name="name"
                  value={inputvalue.name}
                  onChange={handelInputValue}
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={inputvalue.email}
                  onChange={handelInputValue}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="comment">Comments:</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="message"
                  name="message"
                  value={inputvalue.message}
                  onChange={handelInputValue}
                  placeholder="Enter something..."
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={handelSubmit}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
