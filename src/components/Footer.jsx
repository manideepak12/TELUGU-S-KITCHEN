import React from 'react';

export const Footer = () => {
  // Add Lora font loading
  React.useEffect(() => {
    const href = "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap";
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <footer style={{backgroundColor: '#D62828'}} className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Brand */}
          <div className="mb-4">
            <h3 className="text-xl font-bold">
              <span className="ml-2">Telugu's Kitchen</span>
            </h3>
          </div>

          {/* Copyright */}
          <div className="text-sm" style={{fontFamily: 'Lora, serif'}}>
            <p>&copy; 2025 Telugu's Kitchen. All rights reserved.</p>
            <p className="mt-2">Crafted in Siddipet with tradition💛</p>
          </div>
        </div>
      </div>
    </footer>
  );
};