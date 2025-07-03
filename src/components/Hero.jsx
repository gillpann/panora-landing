import React from 'react'
import { Camera, ChevronDown  } from "lucide-react";


const Hero = () => {
  return (
    <section className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/hero_img.jpg')"}} id='Home'>
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
            <div className='text-center px-8 pt-20'>
                <h1 className="text-5xl sm:text-6xl md:text-[72px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg uppercase">
                  panora
                </h1>
                <p className='text-gray-300 mt-4 text-lg md:text-xl max-w-xl mx-auto drop-shadow'>Discover Indonesia’s breathtaking views through your lens.
                </p>
                <div className="mt-16">
                  <a
                    href="#Gallery"
                    className="inline-block px-6 py-3 bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
                  >
                    <span className="flex items-center gap-2">
                      <Camera className="w-5 h-5" />
                      Explore Now
                    </span>
                  </a>
                </div>
            </div>
        </div>
        <div className="absolute text-white bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown  className="w-6 h-6" />
        </div>
    </section>
  )
}

export default Hero