import React from 'react';

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

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
              <span style={{color: '#185E20', fontFamily: 'Sree Krushnadevaraya, serif'}} className="inline-block transform hover:scale-110 transition-transform duration-300">తె</span>
              <span style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}} className="ml-2">Contact Us</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-6 animate-pulse" style={{backgroundColor: '#D62828'}}></div>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
              Get in Touch • We're Here to Help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
              Reach Out to Us
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
              We'd love to hear from you and answer any questions you may have
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: 'call',
                title: 'Phone',
                info: '+91 98765 43210',
                subInfo: 'Call us anytime'
              },
              {
                icon: 'mail',
                title: 'Email',
                info: 'info@teluguskitchen.com',
                subInfo: 'We reply within 24 hours'
              },
              {
                icon: 'location_on',
                title: 'Address',
                info: '123 Food Street',
                subInfo: 'Siddipet, Telangana'
              },
              {
                icon: 'photo_camera',
                title: 'Instagram',
                info: '@teluguskitchen',
                subInfo: 'Follow for daily updates'
              }
            ].map((contact, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
                style={{backgroundColor: '#FFD54F'}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined" style={{fontSize: '40px', color: '#D62828'}}>
                    {contact.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                  {contact.title}
                </h3>
                <p className="text-base font-semibold mb-1" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>
                  {contact.info}
                </p>
                <p className="text-sm" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                  {contact.subInfo}
                </p>
              </div>
            ))}
          </div>

          {/* Delivery & Services Section */}
          <div className="max-w-6xl mx-auto">
            {/* Main Delivery Highlight */}
            <div className="rounded-3xl shadow-2xl overflow-hidden mb-12" style={{backgroundColor: '#FFD54F'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Delivery Info */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left">
                  <div className="mb-6">
                    <div className="text-6xl mb-4">
                      <span className="material-symbols-outlined" style={{fontSize: '64px', color: '#D62828'}}>
                        delivery_dining
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                      Home Delivery in Siddipet
                    </h2>
                    <p className="text-lg mb-6" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                      Enjoy authentic Telugu traditional foods delivered fresh to your doorstep in Siddipet. 
                      Experience the rich flavors of our heritage cuisine from the comfort of your home.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="material-symbols-outlined" style={{fontSize: '24px', color: '#185E20'}}>
                        schedule
                      </span>
                      <span className="text-base font-semibold" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>
                        Delivery Time: 30-45 minutes
                      </span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="material-symbols-outlined" style={{fontSize: '24px', color: '#185E20'}}>
                        currency_rupee
                      </span>
                      <span className="text-base font-semibold" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>
                        Free delivery on orders above ₹500
                      </span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="material-symbols-outlined" style={{fontSize: '24px', color: '#185E20'}}>
                        verified
                      </span>
                      <span className="text-base font-semibold" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>
                        Fresh & Hot guaranteed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative p-8 sm:p-12 lg:p-16 flex items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="text-8xl mb-4 animate-bounce">
                        <span className="material-symbols-outlined" style={{fontSize: '96px', color: '#185E20'}}>
                          restaurant
                        </span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse" style={{backgroundColor: '#D62828'}}></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full animate-pulse" style={{backgroundColor: '#FFB300'}}></div>
                    </div>
                    <p className="text-xl font-bold mt-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                      Traditional • Authentic • Delicious
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Highlight */}
            <div className="rounded-3xl shadow-2xl p-8 sm:p-12 text-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
              <div className="mb-8">
                <div className="text-6xl mb-6">
                  <span className="material-symbols-outlined" style={{fontSize: '64px', color: '#D62828'}}>
                    location_on
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                  Find Us in Siddipet
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                  Located in the heart of Siddipet, we serve the finest traditional Telugu cuisine to our local community and beyond.
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8 mb-8 min-h-64 flex items-center justify-center">
                <div className="text-center">
                  <span className="material-symbols-outlined text-8xl mb-4" style={{color: '#D62828'}}>
                    map
                  </span>
                  <p className="text-xl font-semibold mb-2" style={{color: '#545454'}}>Interactive Map</p>
                  <p className="text-lg" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>123 Food Street, Siddipet, Telangana</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-white shadow-xl" style={{backgroundColor: '#185E20'}}>
                <span className="material-symbols-outlined" style={{fontSize: '24px'}}>
                  call
                </span>
                <span>Call Now: +91 98765 43210</span>
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