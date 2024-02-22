import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import LightBulbGroup from "./LightBulbGroup";
import LoadingSVG from "./LoadingSvg";
import { useInView } from "react-intersection-observer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [animate, setAnimate] = useState(false);

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const [clientData, setClientData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isNameMissing, setNameMissing] = useState(false);
  const [isEmailMissing, setEmailMissing] = useState(false);
  const [isMessageMissing, setMessageMissing] = useState(false);
  const [isSending, setSending] = useState(false);
  useEffect(() => {
    if (clientData.user_name) {
      setNameMissing(false);
    }
    if (clientData.user_email) {
      setEmailMissing(false);
    }
    if (clientData.message) {
      setMessageMissing(false);
    }
  }, [clientData]);

  const handleChange = (event) => {
    const _clientData = { ...clientData };
    _clientData[event.target.name] = event.target.value;
    setClientData(_clientData);
  };

  const form = useRef();

  const handleClick = (e) => {
    e.preventDefault();

    if (!clientData.user_name) {
      setNameMissing(true);
    }
    if (!clientData.user_email) {
      setEmailMissing(true);
    }
    if (!clientData.message) {
      setMessageMissing(true);
    }
    if (clientData.user_email && clientData.user_name && clientData.message) {
      setSending(true);
      emailjs
        .sendForm(
          "lkjaslkjdlaskd",
          "template_jous07o",
          form.current,
          ",jnaskljdlakjd"
        )
        .then(
          (result) => {
            const _clientData = { ...clientData };
            _clientData.user_email = "";
            _clientData.user_name = "";
            _clientData.message = "";
            setClientData(_clientData);
            setSending(false);
            toast.success("Thank's for reaching to me", toastOptions);
          },
          (error) => {
            setSending(false);
            toast.error("Sorry, can't contact right now", toastOptions);
          }
        );
    }
  };

  return (
    <>
      <div className="contact-root-container">
        <div className="contact-light-container">
          <LightBulbGroup />
        </div>
        <div ref={ref} className="contact-me-container">
          {animate && (
            <form ref={form} className="contact-form">
              <p className="get-in-touch-text">Get in Touch</p>
              <h1 className="contact-text">Contact.</h1>
              <label className="label name-label">Your Name</label>
              <input
                className={`name-input ${
                  isNameMissing ? "input-name-missing" : ""
                }`}
                type="text"
                name="user_name"
                onChange={handleChange}
                value={clientData.user_name}
                placeholder="What's your name?"
              />
              <label className="label email-label">Your Email</label>
              <input
                className={`name-input ${
                  isEmailMissing ? "input-email-missing" : ""
                }`}
                type="email"
                name="user_email"
                onChange={handleChange}
                value={clientData.user_email}
                placeholder="What's your email?"
              />
              <label className="label message-label">Your Message</label>
              <textarea
                className={`message-input ${
                  isMessageMissing ? "input-message-missing" : ""
                }`}
                type="text"
                name="message"
                onChange={handleChange}
                value={clientData.message}
                placeholder="What's your message"
              />
              <button onClick={handleClick} className="message-send-btn">
                {isSending ? <LoadingSVG /> : "Send"}
              </button>
            </form>
          )}
        </div>
        <div className="social-links-root">
          <div className="social-link-container">
            <div
              onClick={() => {
                window.open("https://github.com/BhusanDotel", "_blank");
              }}
              className="s-link github-link"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5453 3.47278C9.87407 3.47278 3.65442 9.69243 3.65442 17.3637C3.65442 23.8727 8.13655 29.3191 14.1791 30.8263C14.1143 30.6388 14.0726 30.4211 14.0726 30.1514V27.7772C13.5089 27.7772 12.5643 27.7772 12.327 27.7772C11.3766 27.7772 10.5316 27.3686 10.1218 26.6092C9.66687 25.7654 9.58815 24.4747 8.46067 23.6852C8.12613 23.4224 8.3808 23.1226 8.76627 23.1631C9.47818 23.3646 10.0685 23.8531 10.6242 24.5777C11.1775 25.3035 11.438 25.4679 12.4717 25.4679C12.9729 25.4679 13.723 25.4389 14.4291 25.3278C14.8088 24.3635 15.4652 23.4757 16.2674 23.0566C11.6417 22.5809 9.43419 20.2796 9.43419 17.1553C9.43419 15.8102 10.0072 14.5091 10.9807 13.4129C10.6612 12.3248 10.2595 10.1057 11.1034 9.26066C13.1847 9.26066 14.443 10.6104 14.7452 10.975C15.7823 10.6197 16.9214 10.4182 18.1183 10.4182C19.3176 10.4182 20.4613 10.6197 21.5008 10.9773C21.7994 10.615 23.0589 9.26066 25.1448 9.26066C25.9922 10.1068 25.5858 12.3352 25.2629 13.421C26.2306 14.5149 26.8001 15.8125 26.8001 17.1553C26.8001 20.2773 24.5961 22.5774 19.9774 23.0555C21.2484 23.7188 22.1756 25.5825 22.1756 26.9866V30.1514C22.1756 30.2718 22.149 30.3586 22.1351 30.4617C27.5479 28.5644 31.4362 23.4248 31.4362 17.3637C31.4362 9.69243 25.2166 3.47278 17.5453 3.47278Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/bhusan-dotel-54a6232a8/",
                  "_blank"
                );
              }}
              className="s-link linkedin-link"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.8727 4.63025H7.03634C5.75722 4.63025 4.72119 5.66628 4.72119 6.9454V27.7818C4.72119 29.0609 5.75722 30.0969 7.03634 30.0969H27.8727C29.1518 30.0969 30.1879 29.0609 30.1879 27.7818V6.9454C30.1879 5.66628 29.1518 4.63025 27.8727 4.63025ZM12.771 25.4666H9.35612V14.4789H12.771V25.4666ZM11.0288 12.9081C9.92797 12.9081 9.03779 12.0156 9.03779 10.917C9.03779 9.8185 9.92912 8.92717 11.0288 8.92717C12.1262 8.92717 13.0187 9.81966 13.0187 10.917C13.0187 12.0156 12.1262 12.9081 11.0288 12.9081ZM25.5622 25.4666H22.1497V20.1232C22.1497 18.8488 22.1265 17.2096 20.3751 17.2096C18.5982 17.2096 18.325 18.5976 18.325 20.0306V25.4666H14.9125V14.4789H18.1884V15.9803H18.2347C18.6908 15.1167 19.8044 14.2057 21.4655 14.2057C24.9232 14.2057 25.5622 16.4815 25.5622 19.4403V25.4666Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              onClick={() => {
                window.open("https://twitter.com/BhusanDotel", "_blank");
              }}
              className="s-link twitter-link"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_50_108)">
                  <path
                    d="M35.0434 7.24929C33.7602 7.81904 32.3846 8.20158 30.9386 8.37522C32.4145 7.49076 33.5485 6.09081 34.0803 4.42499C32.7021 5.24162 31.1692 5.83578 29.544 6.15593C28.2418 4.76684 26.386 3.90137 24.3322 3.90137C20.3874 3.90137 17.1887 7.09736 17.1887 11.0422C17.1887 11.6011 17.2538 12.1464 17.3759 12.67C11.4397 12.3716 6.1791 9.52827 2.65483 5.20635C2.03896 6.26445 1.68897 7.49076 1.68897 8.79845C1.68897 11.2755 2.94784 13.4622 4.86598 14.7455C3.69393 14.7075 2.59243 14.3847 1.62929 13.8502C1.62929 13.88 1.62929 13.9099 1.62929 13.9397C1.62929 17.4016 4.09275 20.2856 7.35657 20.9449C6.7597 21.1076 6.12755 21.1945 5.47642 21.1945C5.01519 21.1945 4.56754 21.1511 4.13073 21.0642C5.04233 23.8994 7.67943 25.9695 10.8022 26.0264C8.36041 27.9419 5.28108 29.0814 1.93315 29.0814C1.35527 29.0814 0.788235 29.0488 0.232056 28.981C3.39007 31.0103 7.14495 32.1905 11.1793 32.1905C24.316 32.1905 31.5002 21.3084 31.5002 11.8724C31.5002 11.5631 31.492 11.2511 31.4812 10.9472C32.8757 9.94066 34.0857 8.68179 35.0434 7.24929Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_50_108">
                    <rect
                      width="34.7273"
                      height="34.7273"
                      fill="white"
                      transform="translate(0.272705)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.instagram.com/bhusan_theog/",
                  "_blank"
                );
              }}
              className="s-link insta-link"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5758 4.34094C7.5865 4.34094 4.34094 7.5865 4.34094 11.5758V23.1515C4.34094 27.1408 7.5865 30.3864 11.5758 30.3864H23.1515C27.1408 30.3864 30.3864 27.1408 30.3864 23.1515V11.5758C30.3864 7.5865 27.1408 4.34094 23.1515 4.34094H11.5758ZM11.5758 7.23488H23.1515C25.5448 7.23488 27.4925 9.1825 27.4925 11.5758V23.1515C27.4925 25.5448 25.5448 27.4925 23.1515 27.4925H11.5758C9.1825 27.4925 7.23488 25.5448 7.23488 23.1515V11.5758C7.23488 9.1825 9.1825 7.23488 11.5758 7.23488ZM24.5985 8.68185C24.2148 8.68185 23.8467 8.8343 23.5754 9.10566C23.304 9.37702 23.1515 9.74506 23.1515 10.1288C23.1515 10.5126 23.304 10.8806 23.5754 11.152C23.8467 11.4233 24.2148 11.5758 24.5985 11.5758C24.9823 11.5758 25.3503 11.4233 25.6217 11.152C25.893 10.8806 26.0455 10.5126 26.0455 10.1288C26.0455 9.74506 25.893 9.37702 25.6217 9.10566C25.3503 8.8343 24.9823 8.68185 24.5985 8.68185ZM17.3637 10.1288C13.3744 10.1288 10.1288 13.3744 10.1288 17.3637C10.1288 21.353 13.3744 24.5985 17.3637 24.5985C21.353 24.5985 24.5985 21.353 24.5985 17.3637C24.5985 13.3744 21.353 10.1288 17.3637 10.1288ZM17.3637 13.0228C19.757 13.0228 21.7046 14.9704 21.7046 17.3637C21.7046 19.757 19.757 21.7046 17.3637 21.7046C14.9704 21.7046 13.0228 19.757 13.0228 17.3637C13.0228 14.9704 14.9704 13.0228 17.3637 13.0228Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default Contact;
