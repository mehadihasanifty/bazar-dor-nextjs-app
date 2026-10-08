const SignInPage = () => {
    return (
       <div className="flex flex-col items-center justify-center mt-15">
            <h2 className="text-2xl font-bold text-base-content mb-2">সাইন ইন</h2>
            <p className="label">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                
                

  <label className="label font-bold">ইমেইল</label>
  <input type="email" className="input" 
  placeholder="you@example.com" />

  <label className="label font-bold">পাসওয়ার্ড</label>
  <input type="password" className="input" 
  placeholder="কমপক্ষে ৮ অক্ষর" />

  

  <button className="btn  bg-[#05893E] text-white">সাইন ইন</button>
</fieldset>
                </form>
        </div>
    );
};

export default SignInPage;