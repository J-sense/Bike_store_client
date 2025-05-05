const NewsLatter = () => {
  return (
    <div className="bg-gradient-to-b from-[#f5e9d8] to-[#E2C595] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-2">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#101B1F]">
            Newsletter
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101B1F] mb-6">
          Subscribe to Our Newsletter
        </h2>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-[#101B1F]/90 mb-4">
            Stay informed with our newsletter to receive updates on the latest
            products and exclusive deals.
          </p>
          <p className="text-xl font-medium text-[#101B1F]">
            Plus, get <span className="text-[#D2B78B]">5% off</span> your first
            order!
          </p>
        </div>

        {/* Email Form */}
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-3 rounded-lg border border-[#D2B78B]/50 focus:border-[#D2B78B] focus:ring-2 focus:ring-[#D2B78B]/30 outline-none transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#D2B78B] hover:bg-[#c0a57a] text-[#101B1F] font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Privacy Note */}
        <p className="mt-4 text-sm text-[#101B1F]/70">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsLatter;
