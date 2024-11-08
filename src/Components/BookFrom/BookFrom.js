import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fromRef = useRef();

  const handleFrom = (data) => {
    console.log("Data: ", data);

    console.log("Form ref:", fromRef);
    fromRef.current.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Request a Quote
        </h2>
        
        <form
          onSubmit={handleSubmit(handleFrom)}
          ref={fromRef}
          className="space-y-4"
        >
          <input
            {...register("fullName", { required: "Full name is required" })}
            type="text"
            placeholder="Your Name *"
            className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {errors.fullName && (
            <div className="text-red-500 text-center">
              *{errors.fullName.message}
            </div>
          )}

          {/* Phone Number Input */}
          <input
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
            type="text"
            placeholder="Phone Number *"
            className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {errors.phoneNumber && (
            <div className="text-red-500 text-center">
              *{errors.phoneNumber.message}
            </div>
          )}

          {/* Email Input */}
          <input
            type="email"
            {...register("Email", { required: "Email is required" })}
            placeholder="Email *"
            className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {errors.Email && (
            <div className="text-red-500 text-center">
              *{errors.Email.message}
            </div>
          )}

          {/* Service Selection */}
          <select
            {...register("service", { required: "Service is required" })}
            className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Requested Services</option>
            <option value="catering">Catering</option>
            <option value="decoration">Decoration</option>
            <option value="event-planning">Event Planning</option>
          </select>
          {errors.service && (
            <div className="text-red-500 text-center">
              *{errors.service.message}
            </div>
          )}

          {/* Date Input */}
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            min={new Date().toISOString().split("T")[0]}
            className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {errors.date && (
            <div className="text-red-500 text-center">
              *{errors.date.message}
            </div>
          )}

          {/* Number of Guests */}
          <input
            type="number"
            {...register("number_of_guests", { min: 0 })}
            onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
            placeholder="Number Of Guests"
            className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {errors.number_of_guests && (
            <div className="text-red-500 text-center">
              *{errors.number_of_guests.message}
            </div>
          )}

          {/* Message Textarea */}
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Wishes / Questions / Requests"
            className="w-full p-4 text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            rows="2"
          ></textarea>
          {errors.message && (
            <div className="text-red-500 text-center">
              *{errors.message.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
          >
            Request Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
