import { Instagram, Github  } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="glass-dark rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            PANORA
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Thank you for joining me on this visual journey through Indonesia's most captivating landscapes. 
            Every frame tells a story, every story connects us to nature.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.instagram.com/gillpaan_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://github.com/gillpann" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Panora. All rights reserved. | Crafted with ❤️ for nature lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;