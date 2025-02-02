const Contact = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center px-6 py-12 ">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-8 text-center">
        CONTACT
      </h1>

      {/* Contact Info */}
      <div className="text-center text-zinc-800 max-w-lg space-y-4 mb-6">
        <h3 className="text-lg font-medium">
          Questions related to our webshop?
        </h3>
        <h3 className="text-lg">
          We are available from Tuesday to Saturday during opening hours.
        </h3>
        <h3 className="text-lg">
          You can reach us by phone at{" "}
          <span className="font-semibold">+32 (0)2 361 61 06</span> or via the
          contact form below.
        </h3>
      </div>

      {/* Form */}
      <div className=" shadow-lg rounded-lg p-6 sm:p-10 w-full max-w-md">
        <form className="flex flex-col space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
              rows={4}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#101B1F] text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
