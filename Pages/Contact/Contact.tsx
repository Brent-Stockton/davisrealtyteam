"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

import { sendEmail } from "@/services/form.service";

type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (loading) return;
    setLoading(true);

    try {
      // Send only name, email, and message to EmailJS
      await sendEmail({
        name: data.name,
        email: data.email,
        message: data.message,
      });

      Swal.fire({
        icon: "success",
        title: "Thanks for the submission. You'll be hearing from us soon.",
      });
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title:
          err?.message ||
          "There's an error with your submission. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center h-3/4-screen bg-[#c3c2bd] p-4 md:p-12 flex-col border-t border-b border-[#ab7552]">
      <div className="p-2 border border-[#ab7552] mb-12 flex items-center justify-center">
        <h2 className="text-[36px] font-bold font-army text-[#ab7552]">
          Partner With Us
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 bg-[#ab7552] border-[#ab7552] border p-4 rounded-lg shadow-lg items-center"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        }}
      >
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo-black.svg"
            alt="Logo"
            width={100}
            height={100}
            className="!text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
          {errors.name && (
            <span className="text-red-500 text-xs italic">
              Name is required.
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-white text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            {...register("phoneNumber", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-xs italic">
              Phone number is required.
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs italic">
              Email is required.
            </span>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-white text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-xs italic">
              Message is required.
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-[#ab7552] hover:bg-white text-white text-[20px] tracking-wider px-8 py-4 font-bold font-army rounded shadow-lg hover:scale-105 transition-transform mx-auto border border-white hover:text-[#ab7552]"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
