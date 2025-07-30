import React from 'react';

export const About = () => {
  // Add Material Symbols font loading
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
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse" style={{backgroundColor: '#D62828'}}></div>
          <div className="absolute top-32 right-16 w-16 h-16 rounded-full animate-bounce" style={{backgroundColor: '#185E20'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full animate-pulse" style={{backgroundColor: '#FFD54F'}}></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full animate-bounce" style={{backgroundColor: '#D62828'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
              <span style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}} className="ml-2">About</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-6 animate-pulse" style={{backgroundColor: '#D62828'}}></div>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
              Our Heritage • Our Passion • Our Story
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          {/* Story Section */}
          <div className="max-w-6xl mx-auto mb-16 sm:mb-24">
            <div className="rounded-3xl shadow-2xl overflow-hidden" style={{backgroundColor: '#FFD54F'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative overflow-hidden h-64 sm:h-80 lg:h-auto">
                  <img
                    src="https://res.cloudinary.com/duhabjmtf/image/upload/v1751303525/check_mktynr.png"
                    alt="Traditional Telugu Kitchen"
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/600x400/FFD700/000000?text=Traditional+Kitchen"; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>

                {/* Content Side */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="mb-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                      Our Story
                    </h2>
                    <p className="text-lg leading-relaxed mb-6" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                      Welcome to Telugu's Kitchen, where culinary traditions meet modern tastes. We are passionate about bringing the authentic and vibrant flavors of Andhra and Telangana cuisine to your table.
                    </p>
                    <p className="text-lg leading-relaxed" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                      Our journey began with a simple desire: to share the rich heritage of South Indian cooking, passed down through generations of loving hands and time-honored recipes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16 sm:mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                Our Values
              </h2>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: 'restaurant',
                  title: 'Authenticity',
                  description: 'Every dish is prepared using traditional recipes passed down through generations, maintaining the true essence of Telugu cuisine.'
                },
                {
                  icon: 'eco',
                  title: 'Fresh Ingredients',
                  description: 'We source only the finest, locally grown ingredients to ensure unparalleled taste and quality in every bite.'
                },
                {
                  icon: 'favorite',
                  title: 'Love & Care',
                  description: 'Each meal is prepared with love and attention to detail, just like it would be in a traditional Telugu home.'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
                  style={{backgroundColor: '#FFD54F'}}
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined" style={{fontSize: '48px', color: '#D62828'}}>
                      {value.icon}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 text-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
              <div className="mb-8">
                <div className="text-6xl mb-6">
                  <span className="material-symbols-outlined" style={{fontSize: '64px', color: '#D62828'}}>
                    favorite
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                  Our Mission
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg sm:text-xl leading-relaxed" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                  Every dish at Telugu's Kitchen is prepared with the freshest, locally sourced ingredients, ensuring unparalleled taste and quality. From the fiery spices of our traditional curries to the comforting sweetness of our authentic desserts, each recipe is a testament to our commitment to authenticity and flavor.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                  We believe that food is not just sustenance, but an experience – a celebration of culture, family, and togetherness. Join us on a gastronomic adventure and discover the true essence of Telugu cuisine.
                </p>
                <div className="pt-6">
                  <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white shadow-xl" style={{backgroundColor: '#185E20'}}>
                    <span className="material-symbols-outlined" style={{fontSize: '24px'}}>
                      celebration
                    </span>
                    <span>Celebrating Heritage Through Food</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
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