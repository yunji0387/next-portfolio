"use client";
import Link from "next/link";
import Image from "next/image";
import { contactList } from "@/public/infos/contact";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
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
          )
          .finally(() => {
            setIsLoading(false);
          });
      }
    }, 1000);
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

  const emailContact = contactList.find((contact) => contact.name === "Email");

  return (
    <div className="relative">
      <div
        className={` ${
          !showSuccessMessage && !showErrorMessage ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out`}
      >
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <div className="flex flex-col w-full">
            <label className="select-none">Name</label>
            <input
              type="text"
              name="user_name"
              required
              minLength={2}
              maxLength={50}
              className="p-1 pl-2 font-light bg-transparent border-b border-yellow-950 dark:border-white placeholder-yellow-800 dark:placeholder-gray-300"
              placeholder="Write your Name here..."
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="select-none">Email</label>
            <input
              type="email"
              name="user_email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address."
              className="p-1 pl-2 font-light bg-transparent border-b border-yellow-950 dark:border-white placeholder-yellow-800 dark:placeholder-gray-300"
              placeholder="Write your email here..."
            />
          </div>
          <div className="flex flex-col w-full max-h-[22rem] overflow-auto">
            <label className="select-none">Message</label>
            <textarea
              name="message"
              required
              minLength={10}
              className="p-1 px-2 font-light bg-transparent border-b border-yellow-950 dark:border-white placeholder-yellow-800 dark:placeholder-gray-300"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 p-1 rounded-md bg-yellow-950 dark:bg-gray-100 hover:bg-yellow-900 dark:hover:bg-gray-200 text-white dark:text-black text-lg lg:text-xl"
          >
            {isLoading ? (
              <div className="flex justify-center items-center py-1">
                <div className="w-5 h-5 border-t-2 border-l-2 border-amber-50 dark:border-indigo-950 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div>Send</div>
            )}
          </button>
        </form>
      </div>
      <div
        className={` ${
          showSuccessMessage ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out `}
      >
        {showSuccessMessage && (
          <div className="absolute inset-0">
            <div className="flex flex-col justify-center items-center w-full h-full gap-3 p-4 text-center">
              <p className="text-2xl font-medium">Message sent successfully!</p>
              <button
                onClick={closeSuccessMessage}
                className="text-lg hover:font-bold w-full font-light"
              >
                &#10005; Close Window
              </button>
              <button
                onClick={closeSuccessMessage}
                className="text-lg hover:font-bold w-full font-light"
              >
                &#8635; Send Another Message
              </button>
            </div>
          </div>
        )}
      </div>
      <div
        className={` ${
          showErrorMessage ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out `}
      >
        {showErrorMessage && (
          <div className="absolute inset-0">
            <div className="flex flex-col justify-center items-center w-full h-full gap-5 p-4 text-center">
              <p className="text-2xl font-medium text-red-800 dark:text-red-200">
                Failed to send message. Please try again later or contact me via
                my email.
              </p>
              <button
                onClick={closeMessage}
                className="text-lg hover:font-bold w-full font-light"
              >
                &#8635; Try Again
              </button>
              <Link
                href={emailContact?.link ?? "#"}
                className="text-lg hover:font-bold w-full font-light"
              >
                &#9993; Contact via Email
              </Link>
              <button
                onClick={closeMessage}
                className="text-lg hover:font-bold w-full font-light"
              >
                &#10005; Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
