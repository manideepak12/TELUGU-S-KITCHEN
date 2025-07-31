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
      <section className="py-8 sm:py-12">
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
                icon: 'whatsapp',
                title: 'WhatsApp',
                info: 'Chat with us',
                subInfo: 'Quick response guaranteed',
                link: 'https://wa.me/918074955963?text=Hello%20Telugu%27s%20Kitchen!%20I%27d%20like%20to%20place%20an%20order.',
                isWhatsApp: true
              },
              {
                icon: 'mail',
                title: 'Email',
                info: 'teluguskitchen@gmail.com',
                subInfo: 'We reply within 24 hours',
                link: 'mailto:teluguskitchen@gmail.com'
              },
              {
                icon: 'location_on',
                title: 'Address',
                info: 'Shankar Nagar',
                subInfo: 'Siddipet, Telangana'
              },
              {
                icon: 'photo_camera',
                title: 'Instagram',
                info: '@telugus_kitchen',
                subInfo: 'Follow for daily updates',
                link: 'https://www.instagram.com/telugus_kitchen?igsh=cm83YnJ4NmpzOXJj',
                isInstagram: true
              }
            ].map((contact, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
                style={{backgroundColor: '#FFD54F'}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {contact.isInstagram ? (
                    <div style={{fontSize: '40px', color: '#D62828'}}>
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  ) : contact.isWhatsApp ? (
                    <div style={{fontSize: '40px', color: '#D62828'}}>
                      <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                  ) : (
                    <span className="material-symbols-outlined" style={{fontSize: '40px', color: '#D62828'}}>
                      {contact.icon}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                  {contact.title}
                </h3>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    target={contact.isInstagram || contact.isWhatsApp ? "_blank" : "_self"}
                    rel={contact.isInstagram || contact.isWhatsApp ? "noopener noreferrer" : ""}
                    className="block hover:opacity-80 transition-opacity duration-300"
                  >
                    <p className="text-base font-semibold mb-1" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>
                      {contact.info}
                    </p>
                  </a>
                ) : (
                  <p className="text-base font-semibold mb-1" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>
                    {contact.info}
                  </p>
                )}
                <p className="text-sm" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                  {contact.subInfo}
                </p>
              </div>
            ))}
          </div>

          {/* Delivery & Services Section - Modified to reduce height */}
          <div className="max-w-6xl mx-auto">
            {/* Main Delivery Highlight - Reduced height */}
            <div className="rounded-3xl shadow-2xl overflow-hidden mb-12" style={{backgroundColor: '#FFD54F'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Delivery Info - Made more compact */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left">
                  <div className="mb-4">
                    <div className="text-5xl mb-3">
                      <span className="material-symbols-outlined" style={{fontSize: '48px', color: '#D62828'}}>
                        delivery_dining
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                      Home Delivery in Siddipet
                    </h2>
                    <p className="text-base mb-4" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                      Enjoy authentic Telugu traditional foods delivered fresh to your doorstep in Siddipet. 
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span className="material-symbols-outlined" style={{fontSize: '20px', color: '#185E20'}}>
                        local_shipping
                      </span>
                      <span className="text-sm font-semibold" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>
                        FREE DELIVERY IN SIDDIPET
                      </span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span className="material-symbols-outlined" style={{fontSize: '20px', color: '#185E20'}}>
                        currency_rupee
                      </span>
                      <span className="text-sm font-semibold" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>
                        AFFORDABLE PRICES
                      </span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span className="material-symbols-outlined" style={{fontSize: '20px', color: '#185E20'}}>
                        verified
                      </span>
                      <span className="text-sm font-semibold" style={{color: '#185E20', fontFamily: 'Frank Ruhl Libre, serif'}}>
                        Fresh & Hot guaranteed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Video Element - Portrait orientation */}
                <div className="relative p-4 flex items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                  <div className="w-full max-w-xs mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto object-cover"
                        style={{
                          maxHeight: '350px',
                          aspectRatio: '9/16'
                        }}
                      >
                        <source 
                          src="https://res.cloudinary.com/duhabjmtf/video/upload/v1753981587/Sc-10_wlgi2t.mp4" 
                          type="video/mp4" 
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action - Made more compact */}
            <div className="rounded-3xl shadow-2xl p-6 sm:p-8 text-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
              <div className="mb-6">
                <div className="text-5xl mb-4">
                  <span className="material-symbols-outlined" style={{fontSize: '48px', color: '#D62828'}}>
                    favorite
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{color: '#D62828', fontFamily: 'Yeseva One, serif'}}>
                  Ready to Order?
                </h2>
                <p className="text-base max-w-2xl mx-auto mb-6" style={{color: '#545454', fontFamily: 'Frank Ruhl Libre, serif'}}>
                  Experience the authentic taste of Telugu tradition delivered fresh to your home.
                </p>
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