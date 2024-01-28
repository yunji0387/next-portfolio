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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
      <label className="mt-1">Name</label>
      <input
        type="text"
        name="user_name"
        required
        minLength={2}
        maxLength={50}
        className="pl-2"
      />
      <label className="mt-2">Email</label>
      <input
        type="email"
        name="user_email"
        required
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="Please enter a valid email address."
        className="pl-2"
      />
      <label className="mt-2">Message</label>
      <textarea name="message" required minLength={10} className="px-2"/>
      <button type="submit" className="w-full mt-3 p-1 bg-amber-300 dark:bg-green-800 hover:bg-amber-500 dark:hover:bg-green-700 font-semibold hover:font-bold">Send</button>
    </form>
  );
};
