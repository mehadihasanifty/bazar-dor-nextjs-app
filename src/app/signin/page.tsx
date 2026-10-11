
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!email || !password) {
      toast.error("ইমেইল ও পাসওয়ার্ড লিখুন।");
      return;
    }

    try {
      setIsLoading(true);

      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "সাইন ইন করা যায়নি।");
        return;
      }

      toast.success("সফলভাবে সাইন ইন হয়েছে!");
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Signin failed:", error);
      toast.error("সার্ভারের সঙ্গে সংযোগ করা যায়নি।");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="my-6 px-4">
      <div className="flex flex-col items-center mb-12">
        <div className="mt-4 space-y-3 text-center">
          <h1 className="my-2 text-4xl font-bold">সাইন ইন</h1>
          <p className="mb-4 text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <div className="mb-8 w-full max-w-md rounded-2xl bg-white p-5 md:p-7">
          <form onSubmit={handleSubmit}>
            <fieldset
              disabled={isLoading}
              className="fieldset w-full rounded-xl border-base-300"
            >
              <label htmlFor="email" className="label text-black">
                ইমেইল
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input w-full"
                placeholder="you@example.com"
              />

              <label htmlFor="password" className="label mt-2 text-black">
                পাসওয়ার্ড
              </label>

              <div className="relative w-full">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="input w-full pr-10"
                  placeholder="আপনার পাসওয়ার্ড"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn mt-4 w-full border border-[#047F39] bg-[#05893E] text-white hover:bg-[#047F39] disabled:opacity-60"
              >
                {isLoading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
              </button>
            </fieldset>
          </form>

          <div className="divider">অথবা</div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => toast("Google sign-in এখনো configure করা হয়নি।")}
              className="btn flex-1 border border-[#05893E]"
            >
              <FcGoogle size={20} /> Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={() => toast("GitHub sign-in এখনো configure করা হয়নি।")}
              className="btn flex-1 border border-[#05893E]"
            >
              <SiGithub size={20} /> GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-6 text-center">
            অ্যাকাউন্ট নেই?{" "}
            <Link href="/signup" className="text-[#05893E] hover:underline">
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        <Link
          href="/"
          className="text-gray-500 transition-all hover:text-[#05893E] hover:underline"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </section>
  );
};

export default SignInPage;
