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
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        required
        minLength={2}
        maxLength={50}
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        required
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="Please enter a valid email address."
      />
      <label>Message</label>
      <textarea name="message" required minLength={10} />
      <button type="submit">Send</button>
    </form>
  );
};
