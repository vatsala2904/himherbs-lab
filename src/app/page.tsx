'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showMainSite, setShowMainSite] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Improved Animation sequence with reduced delays
  useEffect(() => {
    const sequence = [
      { step: 1, delay: 800 },   // "Welcome" appears
      { step: 2, delay: 1800 },  // "Welcome to" appears  
      { step: 3, delay: 2800 },  // Logo appears dramatically
      { step: 4, delay: 4300 },  // Start transition (1.5s after logo)
      { step: 5, delay: 5100 },  // Main site appears
    ];

    sequence.forEach(({ step, delay }) => {
      setTimeout(() => {
        if (step === 4) {
          setIsTransitioning(true);
        } else if (step === 5) {
          setShowMainSite(true);
        } else {
          setCurrentStep(step);
        }
      }, delay);
    });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Improved Cinematic Intro Screen with Better Colors & Full Coverage
  if (!showMainSite) {
    return (
      <div className="fixed inset-0 overflow-hidden">
        {/* Forest Green to Warm Earth Background - Full Coverage */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-green-700 to-amber-800">
          {/* Floating Herb/Leaf Patterns - Full Coverage */}
          <div className="absolute inset-0 opacity-20">
            {/* Floating leaves */}
            <div className="absolute top-10 left-10 w-8 h-8 transform rotate-45 animate-bounce delay-300">
              🍃
            </div>
            <div className="absolute top-20 right-20 w-6 h-6 transform -rotate-12 animate-bounce delay-700">
              🌿
            </div>
            <div className="absolute top-32 left-1/4 w-10 h-10 transform rotate-12 animate-bounce delay-1000">
              🍀
            </div>
            <div className="absolute top-40 right-1/3 w-7 h-7 transform -rotate-45 animate-bounce delay-500">
              🌱
            </div>
            <div className="absolute bottom-20 left-16 w-9 h-9 transform rotate-90 animate-bounce delay-1200">
              🍃
            </div>
            <div className="absolute bottom-32 right-16 w-8 h-8 transform -rotate-90 animate-bounce delay-400">
              🌿
            </div>
            <div className="absolute bottom-40 left-1/3 w-6 h-6 transform rotate-180 animate-bounce delay-900">
              🌱
            </div>
            
            {/* Mountain Silhouettes - Full Width */}
            <svg className="absolute bottom-0 w-full h-2/3" viewBox="0 0 1400 600" preserveAspectRatio="none">
              <path 
                d="M0,600 L0,300 L200,100 L400,250 L600,80 L800,200 L1000,60 L1200,180 L1400,120 L1400,600 Z" 
                fill="rgba(0,0,0,0.15)"
              />
              <path 
                d="M0,600 L0,400 L150,250 L350,350 L550,200 L750,300 L950,150 L1150,250 L1400,200 L1400,600 Z" 
                fill="rgba(0,0,0,0.1)"
              />
              <path 
                d="M0,600 L0,500 L100,400 L300,480 L500,350 L700,450 L900,300 L1100,400 L1400,350 L1400,600 Z" 
                fill="rgba(0,0,0,0.05)"
              />
            </svg>
            
            {/* Subtle stars */}
            <div className="absolute top-16 left-1/5 w-1 h-1 bg-amber-200 rounded-full animate-pulse"></div>
            <div className="absolute top-24 right-1/4 w-1 h-1 bg-amber-200 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-32 left-1/2 w-1 h-1 bg-amber-200 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className={`flex items-center justify-center min-h-screen relative z-10 transition-all duration-1000 ${
          isTransitioning ? 'transform scale-75 opacity-0' : 'transform scale-100 opacity-100'
        }`}>
          <div className="text-center px-8">
            {/* Step 1 & 2: Welcome to - Consistent Font & Better Positioning */}
            <div className="mb-8">
              <div className={`transition-all duration-1000 ${
                currentStep >= 1 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}>
                <h1 className="text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-amber-200 via-green-200 to-amber-300 bg-clip-text leading-tight">
                  Welcome
                </h1>
              </div>

              <div className={`transition-all duration-1000 delay-300 ${
                currentStep >= 2 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}>
                <h2 className="text-7xl md:text-8xl font-black text-white leading-tight -mt-4">
                  to
                </h2>
              </div>
            </div>

            {/* Step 3: Logo appears closer with reduced spacing */}
            <div className={`transition-all duration-1500 delay-500 ${
              currentStep >= 3 
                ? 'opacity-100 transform scale-100 translate-y-0' 
                : 'opacity-0 transform scale-75 translate-y-8'
            }`}>
              <div className="relative -mt-6">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-green-400/20 rounded-2xl blur-2xl animate-pulse"></div>
                <Image
                  src="/logo.png"
                  alt="Himalayan Herbs Logo"
                  width={500}
                  height={250}
                  className="object-contain relative z-10 mx-auto"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.3))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Website with Better Colors & Visible Patterns
  return (
    <div className={`min-h-screen transition-all duration-1000 animate-in slide-in-from-bottom-4 relative ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-800 via-green-900 to-amber-900' 
        : 'bg-gradient-to-br from-amber-50 via-green-50 to-amber-100'
    }`}>
      {/* Visible Herbal Patterns Background - Full Coverage */}
      <div className={`absolute inset-0 opacity-20 pointer-events-none ${isDarkMode ? 'opacity-30' : 'opacity-15'}`}>
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="herbPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* More visible leaf patterns */}
              <path d="M20,20 Q30,10 40,20 Q30,30 20,20" fill={isDarkMode ? "#16a34a" : "#15803d"} opacity="0.6"/>
              <path d="M60,60 Q70,50 80,60 Q70,70 60,60" fill={isDarkMode ? "#d97706" : "#c2410c"} opacity="0.6"/>
              <circle cx="15" cy="65" r="2" fill={isDarkMode ? "#3b82f6" : "#1d4ed8"} opacity="0.5"/>
              <circle cx="75" cy="25" r="1.5" fill={isDarkMode ? "#16a34a" : "#15803d"} opacity="0.5"/>
              <path d="M50,15 L53,8 L56,15 L53,22 Z" fill={isDarkMode ? "#d97706" : "#c2410c"} opacity="0.6"/>
              <path d="M10,40 Q15,35 20,40 Q15,45 10,40" fill={isDarkMode ? "#059669" : "#047857"} opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#herbPattern)"/>
        </svg>
      </div>

      {/* Compact Header with Bigger, Left-Aligned Logo */}
      <header className={`backdrop-blur-xl border-b transition-all duration-500 py-4 relative z-10 ${
        isDarkMode 
          ? 'bg-white/5 border-white/10' 
          : 'bg-white/70 border-green-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Left-Aligned Bigger Logo */}
            <div className="flex items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-amber-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <Image
                  src="/logo.png"
                  alt="Himalayan Herbs Logo"
                  width={180}
                  height={90}
                  className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Enhanced Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className={`font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                isDarkMode 
                  ? 'text-white hover:text-green-300' 
                  : 'text-green-800 hover:text-amber-700'
              }`}>
                Home
              </a>
              <a href="#" className={`font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                isDarkMode 
                  ? 'text-white hover:text-green-300' 
                  : 'text-green-800 hover:text-amber-700'
              }`}>
                Products
              </a>
              <a href="#" className={`font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                isDarkMode 
                  ? 'text-white hover:text-green-300' 
                  : 'text-green-800 hover:text-amber-700'
              }`}>
                About
              </a>
              
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-2xl transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                <span className="text-xl">{isDarkMode ? '☀️' : '🌙'}</span>
              </button>

              <button className={`px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-green-600 to-amber-600 text-white hover:shadow-green-500/30'
                  : 'bg-gradient-to-r from-green-700 to-amber-600 text-white hover:shadow-green-600/30'
              }`}>
                Cart (0) 🛒
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section with Better Colors */}
      <section className="min-h-screen flex items-center justify-center text-center px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 animate-in slide-in-from-bottom-6 duration-1000">
            <h2 className={`text-6xl md:text-8xl font-black mb-8 leading-tight transition-colors duration-500 ${
              isDarkMode ? 'text-white drop-shadow-2xl' : 'text-slate-800'
            }`}>
              <span className={`block mb-6 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-green-400 via-amber-400 to-green-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-green-700 via-amber-600 to-green-800 bg-clip-text text-transparent'
              }`}>
                Premium
              </span>
              Natural Products
            </h2>
            
            <p className={`text-2xl md:text-3xl mb-6 font-semibold transition-colors duration-500 ${
              isDarkMode ? 'text-green-200' : 'text-green-800'
            }`}>
              Sourced from the Pristine Himalayas
            </p>
            
            <p className={`text-xl mb-12 transition-colors duration-500 max-w-4xl mx-auto ${
              isDarkMode ? 'text-white/80' : 'text-slate-700'
            }`}>
              Discover our carefully curated collection of authentic Himalayan herbs and 
              natural products - all sourced with care and authenticity from the pristine mountains
            </p>
          </div>

          {/* Enhanced Call to Action */}
          <div className="flex flex-col items-center space-y-8 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="flex flex-col sm:flex-row gap-6">
              <button className={`group px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-green-600 to-amber-600 text-white hover:shadow-green-500/40'
                  : 'bg-gradient-to-r from-green-700 to-amber-600 text-white hover:shadow-green-600/40'
              }`}>
                <span className="relative z-10 flex items-center space-x-4">
                  <span>Explore Products</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300 text-2xl">→</span>
                </span>
              </button>
              
              <button className={`px-8 py-5 rounded-2xl font-semibold text-xl border-2 transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'text-white border-white/30 hover:bg-white/10 hover:border-green-400'
                  : 'text-green-800 border-green-400 hover:bg-green-50 hover:border-amber-500'
              }`}>
                Learn More
              </button>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
            {[
              { number: "500+", label: "Products", color: "green", delay: "delay-0" },
              { number: "100%", label: "Natural", color: "amber", delay: "delay-100" },
              { number: "24/7", label: "Support", color: "blue", delay: "delay-200" },
              { number: "Fast", label: "Delivery", color: "green", delay: "delay-300" }
            ].map((stat, index) => (
              <div key={index} className={`group backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border ${stat.delay} ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20 border-white/20 hover:shadow-2xl' 
                  : 'bg-white/60 hover:bg-white/80 border-green-200 hover:shadow-2xl hover:shadow-green-500/20'
              }`}>
                <div className={`text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300 ${
                  stat.color === 'green' ? (isDarkMode ? 'text-green-400' : 'text-green-700') :
                  stat.color === 'amber' ? (isDarkMode ? 'text-amber-400' : 'text-amber-600') :
                  (isDarkMode ? 'text-blue-400' : 'text-blue-600')
                }`}>
                  {stat.number}
                </div>
                <div className={`font-semibold text-lg ${
                  isDarkMode ? 'text-white/90' : 'text-slate-700'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className={`backdrop-blur-xl border-t py-10 relative z-10 ${
        isDarkMode 
          ? 'bg-black/30 border-white/10' 
          : 'bg-white/70 border-green-200'
      }`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.png"
                alt="Himalayan Herbs Logo"
                width={200}
                height={100}
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="mb-6 space-y-2">
              <p className={`font-bold text-lg ${
                isDarkMode ? 'text-white/90' : 'text-slate-800'
              }`}>
                Contact Us
              </p>
              <div className="space-y-1">
                <p className={`text-base ${
                  isDarkMode ? 'text-white/70' : 'text-slate-600'
                }`}>
                  📧 info@himherbspro.com | 📞 +91 98765 43210 | 🏔️ Himalayan Region, India
                </p>
              </div>
            </div>
            
            <p className={`text-sm ${
              isDarkMode ? 'text-white/50' : 'text-slate-500'
            }`}>
              © 2024 Himalayan Herbs & Products. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}