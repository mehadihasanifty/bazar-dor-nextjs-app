import React from "react";

const UserAuthBtn = () => {
  return (
    <div>
      <div className="flex gap-1.5 sm:gap-2">
        <button className="btn rounded-lg border-[#047F39] px-3 py-2 text-sm transition-all hover:bg-[#05893E] hover:text-white sm:rounded-xl sm:px-4 sm:py-3 sm:text-base lg:px-5 lg:py-6 lg:text-lg">
          সাইন ইন
        </button>
        <button className="btn rounded-lg border border-[#047F39] bg-[#05893E] px-3 py-2 text-sm text-white shadow-md shadow-[#047F39] hover:bg-[#047F39] sm:rounded-xl sm:px-4 sm:py-3 sm:text-base lg:px-5 lg:py-6 lg:text-lg">
          সাইন আপ
        </button>
      </div>
    </div>
  );
};

export default UserAuthBtn;