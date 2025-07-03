import ImageGrid from './ImageGrid';
import ImageCarousel from './ImageCarousel';

const Gallery = () => {
  return (
    <section id="Gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Visual Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the breathtaking landscapes of Indonesia through carefully composed frames that capture the essence of natural beauty
          </p>
        </div>
        
        <ImageCarousel />
        <ImageGrid />
      </div>
    </section>
  );
};

export default Gallery;