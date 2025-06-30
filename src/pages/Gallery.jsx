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

  return (
    <div className="gallery">
      <h1>Photo Gallery</h1>
      <p className="intro">
        Discover the elegance, charm, and comfort of Bohemi Hotel through our curated photo gallery.
      </p>

      <div className="image-grid">
        {images.map((src, index) => (
          <div className="image-item" key={index}>
            <img src={src} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
