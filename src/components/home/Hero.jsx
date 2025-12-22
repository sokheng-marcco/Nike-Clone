// Hero section component
function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Just Do It</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover the latest styles and innovations
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;

