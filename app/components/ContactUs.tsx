"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null); // Initialize the form ref with null

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (form.current) {
      // Check if the form ref is not null
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
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
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
  );
};
