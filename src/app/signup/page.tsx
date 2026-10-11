"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { SiGithub } from "react-icons/si";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleOnSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      // image: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    // console.log("data from the form data", user);
    // Convert FormData to plain object

    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      toast.error("দয়া করে সব প্রয়োজনীয় ঘর পূরণ করুন।");
      return;
    }

    if (user.password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    if (user.password !== user.confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি মিলছে না।");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      // image: user.image || undefined,
      password: user.password,
      callbackURL: "/sigin",
    });

    if (data) {
      formRef.current?.reset();
      setShowPassword(false);
      setShowConfirmPassword(false);
      toast.success(
        "আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে। অনুগ্রহ করে সাইন ইন করুন।",
      );
      redirect("/signin");
    }

    if (error) {
      toast.error(error.message ?? "সাইন আপ করতে সমস্যা হয়েছে।");
      return;
    }

    // toast.success("আপনার একাউন্ট সফল ভাবে তৈরী হয়েছে। ");
  };

  const handleGoogleSignUp = async () => {
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
          <h1 className="font-bold text-4xl my-3">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="text-gray-500 mb-4">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>
        <div className=" rounded-2xl bg-white p-5 md:p-7 mb-8">
          <form ref={formRef} onSubmit={handleOnSubmit} noValidate>
            <fieldset className="fieldset border-base-300 rounded-xl w-70 md:w-md ">
              <label className="label text-black ">নাম</label>
              <input
                required={true}
                name="name"
                type="text"
                className="input w-70 md:w-md"
                placeholder="যেমন: রহিম উদ্দিন"
              />
              {/* <label className="label">ইমেজ</label>
              <input
                name="image"
                type="url"
                className="input w-md"
                placeholder="Image"
              /> */}
              <label className="label text-black ">ইমেইল</label>
              <input
                required={true}
                name="email"
                type="email"
                className="input w-70 md:w-md"
                placeholder="you@example.com"
              />
              <label className="label mt-2 text-black">পাসওয়ার্ড</label>
              {/* <input
                  type="password"
                  className="input w-[280px] md:w-md"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                /> */}

              <div className="relative w-70 md:w-md">
                <input
                  required={true}
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
              <label className="label mt-2 text-black">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <div className="relative w-70 md:w-md">
                <input
                  required={true}
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className="input w-full pr-10"
                  placeholder="আবার লিখুন"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-[#05893E] cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? (
                    <IoEyeOff size={20} />
                  ) : (
                    <IoEye size={20} />
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
          </form>
          <div className="divider">অথবা</div>
          <div className="flex gap-3 md:gap-2 flex-col md:flex-row">
            <button
              onClick={handleGoogleSignUp}
              className="btn border border-[#05893E]"
            >
              <FcGoogle />
              Google দিয়ে চালিয়ে যান
            </button>
            <button
              onClick={handleGithubSignIn}
              className="btn border border-[#05893E]"
            >
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