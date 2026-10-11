"use client";

import { useState } from "react";
import { FiUser, FiArrowLeft } from "react-icons/fi";
import toast from "react-hot-toast";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    await authClient.updateUser({
      name: newUserData.name,
    });

    toast.success("আপনার প্রোফাইল সফলভাবে আপডেট করা হয়েছে।");
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("সফলভাবে সাইন আউট করা হয়েছে। আবার দেখা হবে!");
  };

  return (
    <main className="min-h-screen bg-[#f1f6f1] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Page heading */}
        <header className="mb-7">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
          </p>
        </header>

        {/* Profile card */}
        <section className="mb-6 flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white/80 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-100">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name ?? "User"}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              ) : (
                <FiUser className="h-10 w-10 text-gray-500" />
              )}
            </div>

            <div className="min-w-0">
              <h2 className="break-words text-lg font-semibold text-gray-800 sm:text-xl">
                {user?.name ?? "User"}
              </h2>
              <p className="break-all text-sm text-gray-500 sm:text-base">
                {user?.email ?? "No email available"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-500 px-4 py-3 text-red-600 hover:bg-red-50 sm:w-auto"
          >
            <FiArrowLeft />
            সাইন আউট
          </button>
        </section>

        {/* Edit profile card */}
        <section className="rounded-2xl border border-gray-200 bg-white/80 p-5 sm:p-7">
          <h2 className="mb-8 text-lg font-semibold text-gray-800">তথ্য</h2>

          <form onSubmit={handleUpdateProfile} className="mx-auto max-w-3xl">
            <label htmlFor="name" className="mb-2 block text-sm text-gray-700">
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3 outline-none focus:border-green-600"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-green-700 px-5 py-3 font-medium text-white shadow-sm hover:bg-green-800"
            >
              আপডেট
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}