"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const UserAuthBtn = () => {
  const { data: session, isPending } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);
  const user = session?.user;

  const handleSignout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট ব্যর্থ হয়েছে।");
      return;
    }

    setIsOpen(false);
  };

  if (isPending) return null;

  return (
    <div className="relative z-50">
      {user ? (
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-gray-100 cursor-pointer"
          >
            {user.image ? (
              <img
                src={user.image}
                alt={user.name ?? "Profile"}
                width={48}
                height={48}
                className="h-12 w-12 rounded-2xl object-cover sm:h-14 sm:w-14"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-200 sm:h-14 sm:w-14">
                {" "}
                <FaUserCircle className="text-3xl text-gray-500" />{" "}
              </div>
            )}
            <span className="max-w-36 truncate text-lg font-semibold text-gray-800 sm:text-xl">
              {user.name}
            </span>
            <FaChevronDown
              className={`shrink-0 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name ?? "Profile"}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <FaUserCircle className="text-3xl text-gray-500" />
                  </div>
                )}

                <div className="min-w-0">
                  <p className="truncate font-semibold text-gray-900">
                    {user.name}
                  </p>
                  <p className="truncate text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="mt-3 block rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
              >
                👤
                {/* <FaUserLarge /> */}
                আমার প্রোফাইল
              </Link>
              <Link href="/">
                <button
                  type="button"
                  onClick={handleSignout}
                  className="mt-2 w-full rounded-lg  px-3 py-2 text-left text-sm font-medium text-red-600 transition cursor-pointer hover:bg-red-200"
                >
                  ↩ সাইন আউট
                </button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/signin"
            className="btn rounded-lg border-[#047F39] px-3 py-2 text-sm transition-all hover:bg-[#05893E] hover:text-white sm:px-4 sm:py-3"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="btn rounded-lg border border-[#047F39] bg-[#05893E] px-3 py-2 text-sm text-white transition-all hover:bg-[#047F39] sm:px-4 sm:py-3"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserAuthBtn;