"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUpPage = () => {
     const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="my-6">
      <div className="flex flex-col items-center mb-12">
        <div className="text-center space-y-3 mt-4">
          <h1 className="font-bold text-4xl my-2">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="text-gray-500 mb-4">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>
        <div className=" rounded-2xl bg-white p-5 md:p-7 mb-8">
          <fieldset className="fieldset border-base-300 rounded-xl w-[280px] md:w-md ">
            <label className="label text-black ">নাম</label>
            <input
              type="text"
              className="input w-[280px] md:w-md "
              placeholder="যেমন: মেহেদী হাসান"
            />
            <label className="label text-black ">ইমেইল</label>
            <input
              type="email"
              className="input w-[280px] md:w-md"
              placeholder="you@example.com"
            />
            <label className="label mt-2 text-black">পাসওয়ার্ড</label>
            {/* <input
                  type="password"
                  className="input w-[280px] md:w-md"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                /> */}

            <div className="relative w-[280px] md:w-md">
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full pr-10"
                placeholder="কমপক্ষে ৮ অক্ষর"
              />

            <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${
    showPassword
      ? "text-green-600 hover:text-green-700"
      : "text-gray-400 hover:text-gray-600"
  }`}
  aria-label={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
>
  {showPassword ? (
    <FiEyeOff size={20} />
  ) : (
    <FiEye size={20} />
  )}
</button>
            </div>
            <label className="label mt-2 text-black">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <div className="relative w-[280px] md:w-md">
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full pr-10"
                placeholder="আবার লিখুন"
              />

       <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${
    showPassword
      ? "text-green-600 hover:text-green-700"
      : "text-gray-400 hover:text-gray-600"
  }`}
  aria-label={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
>
  {showPassword ? (
    <FiEyeOff size={20} />
  ) : (
    <FiEye size={20} />
  )}
</button>
            </div>
            <button
              type="submit"
              className="btn mt-4 rounded border border-[#047F39] bg-[#05893E] px-3 py-2 text-sm text-white shadow-md shadow-[#047F39] hover:bg-[#047F39]  sm:px-4 sm:py-3 sm:text-base lg:px-5 lg:py-6 lg:text-lg"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </fieldset>
          <div className="divider">অথবা</div>
          <div className="flex gap-3 md:gap-2 flex-col md:flex-row">
            <button className="btn">
              <FcGoogle />
              Google দিয়ে চালিয়ে যান
            </button>
            <button className="btn">
              <SiGithub />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>
          <div className="flex justify-center items-center mt-6">
            <p>
              অ্যাকাউন্ট আছে?{" "}
              <Link href="/signin" className="text-[#05893E] hover:underline">
                সাইন ইন করুন
              </Link>
            </p>
          </div>
        </div>

        <div className="">
          <Link
            href="/"
            className="text-gray-500 hover:underline hover:underline-offset-4 transition-all hover:text-[#05893E]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;