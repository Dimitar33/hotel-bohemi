import { useState } from 'react';
import GalleryCarousel from '../components/GalleryCarousel'
import './Gallery.scss';

function Gallery() {
  const images = [
      '/assets/Bohemy2.jpg',
      '/assets/Bohemy3.jpg',
      '/assets/Bohemy4.jpg',
      '/assets/Bohemy5.jpg',
      '/assets/Bohemy6.jpg',
      '/assets/Bohemy7.jpg',
  ];

const [currentIndex, setCurrentIndex] = useState(null);

const handlePrevious = () => {
  setCurrentIndex((prev) => (prev === 0 ? images.length -1 : prev - 1));
};

const handleNext = () => {
  setCurrentIndex((prev) => (prev === images.length -1 ? 0 : prev + 1 ));
};

  return (
    <div className="gallery">
      <h1>Photo Gallery</h1>
      <p className="intro">
        Discover the elegance, charm, and comfort of Bohemi Hotel through our curated photo gallery.
      </p>

      <div className="image-grid">
        {images.map((src, index) => (
          <div className="image-item" key={index}>
            <img src={src} alt={`Gallery image ${index + 1}`} onClick={() => setCurrentIndex(index)} />
          </div>
        ))}
        {currentIndex !== null && (
        <GalleryCarousel
          images={images}
          currentIndex={currentIndex}
          onClose={() => setCurrentIndex(null)}
          onPrev={handlePrevious}
          onNext={handleNext} 
        />
      )}
      </div>
    </div>
  );
}

export default Gallery;
