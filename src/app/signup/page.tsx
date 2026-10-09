"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";``

const SignUpPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string, confirmPassword: string};
        const {data , error} = await authClient.signUp.email( {
            ...user,
            callbackURL: "/"
        })
        if(data){
            console.log( data);
            redirect("/");
    }
    if(error){
        console.log("Error signing up user:", error);
    }

    };
    return (
        <div className="flex flex-col items-center justify-center mt-15">
            <h2 className="text-2xl font-bold text-base-content mb-2">অ্যাকাউন্ট তৈরি করুন</h2>
            <p className="label">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label font-bold">নাম</label>
                    <input type="text" className="input" placeholder="যেমন: মেহেদী হাসান" />

                    <label className="label font-bold">ইমেইল</label>
                    <input type="email" className="input" placeholder="you@example.com" />

                    <label className="label font-bold">পাসওয়ার্ড</label>
                    <input type="password" className="input" placeholder="কমপক্ষে ৮ অক্ষর" />

                    <label className="label font-bold">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input type="password" className="input" placeholder="আবার লিখুন" />

                    <button type="submit" className="btn bg-[#05893E] text-white">অ্যাকাউন্ট তৈরি করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;