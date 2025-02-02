const Footer = () => {
  return (
    <footer className="bg-[#101B1F] text-white p-6 sm:p-10 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Section 1: About */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Our store</h2>
          <p className="text-sm text-white">
            Discover the joy of cycling with Bikelife Bikestore - your ultimate
            destination for all things biking. From high-quality bicycles to
            top-notch accessories, we've got you covered.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="">
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <p className=" text-white">
            Don't forget to follow us on our social media channels. Always stay
            informed.
          </p>
        </div>

        {/* Section 3: Contact */}
        <div className="items-end">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-sm text-white">Email: support@bikelife.com</p>
          <p className="text-sm text-white">Phone: +123 456 7890</p>
          <p className="text-sm text-white">Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Bikelife. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
