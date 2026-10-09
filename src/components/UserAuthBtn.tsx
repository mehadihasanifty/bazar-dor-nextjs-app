import Link from "next/link";
import React from "react";

const UserAuthBtn = () => {
  return (
    <div>
      <div className="flex gap-1.5 sm:gap-2">
        <Link href="/signin">
        <button className="btn rounded-lg border-[#047F39] px-3 py-2 text-sm transition-all hover:bg-[#05893E] hover:text-white sm:rounded-xl sm:px-4 sm:py-3 sm:text-base lg:px-5 lg:py-6 lg:text-lg">
          সাইন ইন
        </button>
        </Link>
        <Link href="/signup">
        <button className="btn rounded-lg border border-[#047F39] bg-[#05893E] px-3 py-2 text-sm text-white shadow-md shadow-[#047F39] hover:bg-[#047F39] sm:rounded-xl sm:px-4 sm:py-3 sm:text-base lg:px-5 lg:py-6 lg:text-lg">
          সাইন আপ
        </button>
        </Link>
      </div>
    </div>
  );
};

export default UserAuthBtn;