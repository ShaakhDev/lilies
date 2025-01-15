function Contact() {
  return (
    <div className=" w-full flex justify-center items-center min-h-screen py-16 px-8 bg-[#00302E]">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 container">
        <div className="text-center md:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#f3d6b6] mb-4">
            Get notified when we update!
          </h1>
          <p className="text-sm text-[#d4d4d4]">
            Get notified when we add new items to our specials menu, update our
            price list, or have promos!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
          <input
            type="email"
            placeholder="gregphillips@gmail.com"
            className="flex-1 py-2 px-4 rounded-lg bg-white text-black text-lg focus:outline-none"
          />
          <button className="py-2 px-4 bg-[#f3d6b6] text-black text-md font-semibold rounded-lg hover:bg-[#e6c3a1]">
            Get notified
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
