"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { SiGithub } from "react-icons/si";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleOnSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (data) {
      formRef.current?.reset();
      setShowPassword(false);
      toast.success("আপনাকে ধন্যবাদ, আপনি সফলভাবে প্রবেশ করেছেন।");
    }

    if (error) {
      toast.error("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।");
      return;
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <section className="my-4">
      <div className="flex flex-col items-center mb-12">
        <div className="text-center space-y-3 mt-4">
          <h1 className="font-bold text-4xl my-3">সাইন ইন</h1>
          <p className="text-gray-500 mb-4">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>
        <div className=" rounded-2xl bg-white p-5 md:p-7 mb-8">
          <form onSubmit={handleOnSubmit} ref={formRef} noValidate>
            <fieldset className="fieldset border-base-300 rounded-xl w-[280px] md:w-md ">
              <label className="label text-black ">ইমেইল</label>
              <input
                name="email"
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
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input w-full pr-10"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-[#05893E] cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                </button>
              </div>
              <button
                type="submit"
                className="btn mt-4 rounded border border-[#047F39] bg-[#05893E] px-3 py-2 text-sm text-white shadow-md shadow-[#047F39] hover:bg-[#047F39]  sm:px-4 sm:py-3 sm:text-base lg:px-5 lg:py-6 lg:text-lg"
              >
                সাইন ইন
              </button>
            </fieldset>
          </form>
          <div className="divider">অথবা</div>
          <div className="flex gap-3 md:gap-2 flex-col md:flex-row">
            <button onClick={handleGoogleSignIn} className="btn">
              <FcGoogle />
              Google দিয়ে চালিয়ে যান
            </button>
            <button onClick={handleGithubSignIn} className="btn">
              <SiGithub />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>
          <div className="flex justify-center items-center mt-6">
            <p>
              অ্যাকাউন্ট নেই?{" "}
              <Link href="/signup" className="text-[#05893E] hover:underline">
                সাইন আপ করুন
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

export default SignInPage;