/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen my-16 md:my-32 bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-lg p-10 h-full border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 font-serif">
              Let's Connect
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-amber-100 p-4 rounded-xl text-amber-600">
                  <FiMail className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-slate-800">
                    Email Us
                  </h3>
                  <p className="text-slate-600 mt-2">info@bikestore.com</p>
                  <p className="text-slate-500 text-sm mt-2">
                    Typically replies within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-4 rounded-xl text-emerald-600">
                  <FiPhone className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-slate-800">
                    Call Us
                  </h3>
                  <p className="text-slate-600 mt-2">+32 (0)2 361 61 06</p>
                  <p className="text-slate-500 text-sm mt-2">
                    Tue-Sat: 9am-6pm
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-violet-100 p-4 rounded-xl text-violet-600">
                  <FiMapPin className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-slate-800">
                    Visit Us
                  </h3>
                  <p className="text-slate-600 mt-2">123 Bike Avenue</p>
                  <p className="text-slate-600">Brussels, 1000</p>
                  <p className="text-slate-600">Belgium</p>
                  <p className="text-slate-500 text-sm mt-2">
                    Showroom available by appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-slate-800 mb-5">
                Follow Our Journey
              </h3>
              <div className="flex space-x-5">
                <a
                  href="#"
                  className="bg-slate-100 hover:bg-slate-200 p-4 rounded-xl text-slate-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <FiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-slate-100 hover:bg-slate-200 p-4 rounded-xl text-slate-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <FiInstagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-slate-100 hover:bg-slate-200 p-4 rounded-xl text-slate-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <FiTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-10 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 font-serif">
              Send a Message
            </h2>

            {submitSuccess && (
              <div className="mb-8 p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200 text-center">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                  placeholder="Tell us how we can help..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-4 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 shadow-md hover:shadow-lg ${
                  isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-3" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
