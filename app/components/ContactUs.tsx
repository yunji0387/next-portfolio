"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_fnt2use",
          "template_ho8vfg7",
          form.current,
          "cT35ti4Z0iCBMrXuO"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowSuccessMessage(true);
          },
          (error) => {
            console.log(error.text);
            setShowErrorMessage(true);
          }
        );
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
    if (form.current) {
      form.current.reset();
    }
  };

  const closeMessage = () => {
    setShowSuccessMessage(false);
    setShowErrorMessage(false); // Hide any messages
    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <div className="relative">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
        <div className="flex flex-col w-full">
          <label className="">Name</label>
          <input
            type="text"
            name="user_name"
            required
            minLength={2}
            maxLength={50}
            className="p-2"
            placeholder="Write your Name here..."
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="">Email</label>
          <input
            type="email"
            name="user_email"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address."
            className="p-2"
            placeholder="Write your email here..."
          />
        </div>
        <div className="flex flex-col w-full max-h-[22rem] overflow-auto">
          <label className="">Message</label>
          <textarea
            name="message"
            required
            minLength={10}
            className="p-1 px-2"
            placeholder="Write your message here..."
          />
        </div>
        <button
          type="submit"
          className="w-full mt-2 p-1 bg-amber-300 dark:bg-green-800 hover:bg-amber-500 dark:hover:bg-green-700 font-semibold hover:font-bold"
        >
          Send
        </button>
      </form>
      {showSuccessMessage && (
        <div className="absolute inset-0">
          <div className="bg-amber-100 dark:bg-gray-800 flex flex-col justify-center items-center w-full h-full gap-5 p-4 text-center">
            <p className="font-bold">Message sent successfully!</p>
            <button
              onClick={closeSuccessMessage}
              className="bg-amber-300 dark:bg-green-800 hover:bg-amber-500 dark:hover:bg-green-700 w-full max-w-52 rounded-md border border-indigo-950 dark:border-white text-amber-900 dark:text-white font-bold py-1"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {showErrorMessage && (
        <div className="absolute inset-0">
          <div className="bg-amber-100 dark:bg-gray-800 flex flex-col justify-center items-center w-full h-full gap-5 p-4 text-center">
            <p className="font-bold text-red-500 dark:text-red-300">Failed to send message. Please try again later or contact me via my email.</p>
            <button
              onClick={closeMessage}
              className="bg-amber-300 dark:bg-green-800 hover:bg-amber-500 dark:hover:bg-green-700 w-full max-w-52 rounded-md border border-indigo-950 dark:border-white text-amber-900 dark:text-white font-bold py-1"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// "use client";
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export const ContactUs = () => {
//   const form = useRef<HTMLFormElement>(null); // Initialize the form ref with null

//   const sendEmail = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     if (form.current) {
//       // Check if the form ref is not null
//       emailjs
//         .sendForm(
//           "service_fnt2use",
//           "template_ho8vfg7",
//           form.current,
//           "cT35ti4Z0iCBMrXuO"
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//           },
//           (error) => {
//             console.log(error.text);
//           }
//         );
//     }
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
//       <div className="flex flex-col w-full">
//         <label className="">Name</label>
//         <input
//           type="text"
//           name="user_name"
//           required
//           minLength={2}
//           maxLength={50}
//           className="p-2"
//         />
//       </div>
//       <div className="flex flex-col w-full">
//         <label className="">Email</label>
//         <input
//           type="email"
//           name="user_email"
//           required
//           pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
//           title="Please enter a valid email address."
//           className="p-2"
//         />
//       </div>
//       <div className="flex flex-col w-full max-h-[22rem] overflow-auto">
//         <label className="">Message</label>
//         <textarea
//           name="message"
//           required
//           minLength={10}
//           className="p-1 px-2"
//           placeholder="Write your message here..."
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full mt-2 p-1 bg-amber-300 dark:bg-green-800 hover:bg-amber-500 dark:hover:bg-green-700 font-semibold hover:font-bold"
//       >
//         Send
//       </button>
//     </form>
//   );
// };
