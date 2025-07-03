// LightboxCarousel.js
import { useEffect } from 'react';

function LightboxCarousel({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" onClick={onClose}>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        onClick={(e) => e.stopPropagation()}
        className="lightbox-image"
      />
      <button className="arrow left" onClick={(e) => { e.stopPropagation(); onPrev(); }}>❮</button>
      <button className="arrow right" onClick={(e) => { e.stopPropagation(); onNext(); }}>❯</button>
    </div>
  );
}

export default LightboxCarousel;
