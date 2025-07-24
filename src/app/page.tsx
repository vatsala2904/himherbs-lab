export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Header */}
      <header className="relative z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                HimHerbs Lab
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">Home</a>
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">Products</a>
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">About</a>
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">Contact</a>
            </nav>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              Cart (0) 🛒
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Premium
            </span>
            <br />
            <span className="text-white">Lab Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Cutting-edge equipment & chemicals for modern laboratories
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-110">
            Explore Products →
          </button>
        </div>
      </section>
    </div>
  );
}