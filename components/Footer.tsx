"use client";
import React, { useRef, useState } from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import emailjs from "emailjs-com";
import Image from "next/image";

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSent(false);
    emailjs
      .sendForm(
        "service_pc5ztio",
        "template_jrycsfc",
        formRef.current!,
        "zZUaB-WxvPjVeDoHQ"
      )
      .then(() => {
        setSent(true);
        setSending(false);
        if (formRef.current) formRef.current.reset();
      })
      .catch(() => {
        setError("Failed to send. Please try again.");
        setSending(false);
      });
  };

  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10 " id="contact">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold lg:text-4xl text-white text-center lg:max-w-[45vw]">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-[#ddd9d9] md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <form
          ref={formRef}
          className="w-full max-w-md bg-[#13162d] rounded-2xl p-6 flex flex-col gap-4 mb-8 mt-5 shadow-lg border border-white/10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="rounded-lg px-4 py-2 bg-[#181c2f] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="rounded-lg px-4 py-2 bg-[#181c2f] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="rounded-lg px-4 py-2 bg-[#181c2f] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            type="submit"
            disabled={sending}
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 text-[#000319] font-bold py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 disabled:opacity-60"
          >
            {sending ? "Sending..." : sent ? "Sent!" : "Send Message"}
          </button>
          {error && <p className="text-red-400 mt-2">{error}</p>}
          {sent && !error && <p className="text-green-400 mt-2">Message sent successfully!</p>}
        </form>
      </div>
      <div className="flex mt-16 md:flex-row flex-col gap-3 justify-between items-center">
        <p className="md:text-base text-[#ddd9d9] text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} DevEnny
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-slate-950 rounded-lg border border-black"
            >
              <Image src={profile.img} alt={String(profile.id)} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
