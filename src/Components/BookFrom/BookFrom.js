import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
// import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import ButtonCom from "../Button/Button";
import ReCAPTCHA from "react-google-recaptcha";
 
const QuoteForm = () => {
 
 
  const site_key=process.env.REACT_APP_RECAPTURE_SITE_KEY;
 const servicesId=process.env.REACT_APP_RECAPTURE_EMAIL_JS_SERVICES_ID;
 const templateId=process.env.REACT_APP_RECAPTURE_EMAIL_JS_TEMPLATE_ID
 const publicKey=process.env.REACT_APP_RECAPTURE_EMAIL_JS_PUBLIC_KEY;
 
  const [captchaValue, setCaptchaValue] = useState(null);
 
  const onCaptchaChange = (value) => {
    // console.log("Captcha value:", value);
    setCaptchaValue(value);
  };
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const formRef = useRef();
 
  const handleFormSubmit = () => {
    if (!formRef.current) return;
 
    if(captchaValue){
    emailjs
      .sendForm(
        servicesId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    }
 
    let timerInterval;
 
    Swal.fire({
      title:
        '<span className="font-mono" style="color: #4CAF50;">Your Quote is Sending......</span>',
      html: `
    <div style="
      font-size: 18px;
      color: #555;
      margin-bottom: 10px;
      padding: 10px;
      opacity:0.5;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 8px;
    ">
      Please wait while we submit your quote.
      <br /> This will close automatically.
    </div>
  `,
      background: `url(${require("../../Assets/FooterLogo.jpeg")}) center/cover no-repeat`,
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then(() => {
      Swal.fire({
        title:
          '<span style="color: #1E88E5;">Your Quote is Successfully Submitted!</span>',
        text: "WE will  Contact you Soon !",
        icon: "success",
        confirmButtonColor: "#4CAF50",
      });
    });
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-3 lg:px-6 mt-[5.1rem]">
      <div className=" w-full min-w-[85%] max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Request a Quote
        </h2>
 
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          ref={formRef}
          className="space-y-6"
        >
          <input
            {...register("user_name", { required: "Full name is required" })}
            type="text"
            placeholder="Your Name *"
            className="w-full p-4 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
            aria-label="Full Name"
          />
          {errors.user_name && (
            <div className="text-red-500 text-sm">
              {errors.user_name.message}
            </div>
          )}
 
          <div className=" flex flex-col lg:flex-row ">
            <input
              {...register("Phone_Number", {
                required: "Phone Number is required",
              })}
              type="text"
              placeholder="Phone Number *"
              className="w-full my-1 ml-0 lg:mr-2 p-4 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
              aria-label="Phone Number"
            />
            {errors.Phone_Number && (
              <div className="text-red-500 text-sm">
                {errors.Phone_Number.message}
              </div>
            )}
 
            <input
              type="email"
              {...register("user_email", { required: "Email is required" })}
              placeholder="Email *"
              className="w-full lg:my-1 mt-4 mr-0 lg:ml-2 p-4 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
              aria-label="Email"
            />
            {errors.user_email && (
              <div className="text-red-500 text-sm">
                {errors.user_email.message}
              </div>
            )}
          </div>
          <select
            {...register("service", { required: "Service is required" })}
            className="w-full p-4 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
            aria-label="Requested Service"
          >
            <option value="">Requested Services</option>
            <option value="catering">Catering</option>
            <option value="decoration">Decoration</option>
            <option value="event-planning">Event Planning</option>
          </select>
          {errors.service && (
            <div className="text-red-500 text-sm">{errors.service.message}</div>
          )}
          <div className="flex flex-row ">
            <label className="flex lg:hidden text-center mr-1 mt-1">
              Enter Event Date:
            </label>
            <input
              type="date"
              placeholder="Date"
              {...register("date", { required: "Date is required" })}
              min={new Date().toISOString().split("T")[0]}
              className="w-[55%] lg:w-full p-1 lg:p-4 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
              aria-label="Date"
            />
          </div>
          {errors.date && (
            <div className="text-red-500 text-sm">{errors.date.message}</div>
          )}
 
          <input
            type="number"
            {...register("number_of_guests", { min: 0 })}
            onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
            placeholder="Number Of Guests"
            className="w-full p-4 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
            aria-label="Number of Guests"
          />
 
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Wishes / Questions / Requests"
            className="w-full p-4 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
            rows="3"
            aria-label="Message"
          ></textarea>
          {errors.message && (
            <div className="text-red-500 text-sm">{errors.message.message}</div>
          )}
 
          <div>
            <ReCAPTCHA
              sitekey={site_key}
              onChange={onCaptchaChange}
            />
          </div>
          <div className=" lg:w-[30%] lg:m-auto">
            {
             
              <ButtonCom title="Request Quote" />
            }
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default QuoteForm;
 
 