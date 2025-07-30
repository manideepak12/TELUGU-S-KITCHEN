import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const featuredProducts = [
    {
      name: 'Sakinalu',
      telugu: 'సకినాలు',
      image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753897576/sakinalu_xvnccr.jpg',
      description: 'Crispy spiral snacks made with rice flour and sesame seeds'
    },
    {
      name: 'Ariselu',
      telugu: 'అరిసెలు',
      image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753898150/ARI_f4okfn.png',
      description: 'Sweet rice flour cakes coated with jaggery syrup'
    },
    {
      name: 'Bondhi Laddu',
      telugu: 'బొంది లడ్డు',
      image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753898501/LD_-2_hr07aa.png',
      description: 'Sweet spherical desserts made from gram flour pearls'
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Improved Material Symbols font loading
  React.useEffect(() => {
    const href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFB300'}}>
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 rounded-full animate-pulse" style={{backgroundColor: '#D62828'}}></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 rounded-full animate-bounce" style={{backgroundColor: '#185E20'}}></div>
          <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-10 sm:w-20 h-10 sm:h-20 rounded-full animate-pulse" style={{backgroundColor: '#FFD54F'}}></div>
          <div className="absolute bottom-10 sm:bottom-20 right-1/3 w-14 sm:w-28 h-14 sm:h-28 rounded-full animate-bounce" style={{backgroundColor: '#D62828'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
          {/* Main Hero */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-3 sm:mb-4 animate-fade-in">
                <span style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}} className="ml-2 sm:ml-3">Telugu's</span>
                <span style={{color: '#185E20', fontFamily: 'Yeseva One, serif'}} className="ml-1 sm:ml-2">Kitchen</span>
              </h1>
              <div className="w-20 sm:w-32 h-1 mx-auto mb-4 sm:mb-6 animate-pulse" style={{backgroundColor: '#D62828'}}></div>
              <p className="text-lg sm:text-2xl md:text-3xl font-medium px-4" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                Traditionally Made • Telangana Foods
              </p>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 animate-fade-in px-4" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
              Experience the rich heritage of Telangana cuisine with our authentic, 
              handcrafted traditional foods made from time-honored family recipes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link
                to="/products"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                style={{backgroundColor: '#D62828'}}
              >
                <span>Explore Products</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg border-2 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                style={{color: '#185E20', borderColor: '#185E20', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
              Featured Delicacies
            </h2>
            <p className="text-lg sm:text-xl px-4" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
              Discover our most loved traditional treats
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="rounded-2xl shadow-2xl overflow-hidden" style={{backgroundColor: '#FFD54F'}}>
              <div className="grid grid-cols-1 md:grid-cols-2 h-[28rem] md:h-80 lg:h-96">
                {/* Image Side */}
                <div className="relative overflow-hidden h-full">
                  <img
                    src={featuredProducts[currentSlide].image}
                    alt={featuredProducts[currentSlide].name}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/500x400/FFD700/000000?text=Traditional+Food"; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>

                {/* Content Side */}
                <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center text-center">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                      {featuredProducts[currentSlide].name}
                    </h3>
                    <p className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4" style={{color: '#185E20', fontFamily: 'NTR, sans-serif'}}>
                      {featuredProducts[currentSlide].telugu}
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                      {featuredProducts[currentSlide].description}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="flex gap-2">
                      {featuredProducts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'scale-125' : 'opacity-50'
                          }`}
                          style={{backgroundColor: '#D62828'}}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
              Why Choose Us?
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
              We bring you the authentic taste of Telangana with uncompromised quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'workspace_premium',
                title: 'Premium Quality',
                description: 'We use only the finest ingredients sourced from trusted suppliers to ensure authentic taste and premium quality.'
              },
              {
                icon: 'temple_hindu',
                title: 'Traditional Recipes',
                description: 'Our recipes have been passed down through generations, preserving the authentic flavors of Telangana cuisine.'
              },
              {
                icon: 'calendar_clock',
                title: 'Fresh Daily',
                description: 'All our products are made fresh daily using traditional methods to maintain the original taste and texture.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
                style={{backgroundColor: '#FFD54F'}}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined" style={{fontSize: '48px', color: '#D62828'}}>
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improved global styles */}
      <style>{`
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: inherit;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 48;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};