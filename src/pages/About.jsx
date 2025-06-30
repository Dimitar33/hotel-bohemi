import './About.scss';

function About() {
  return (
    <div className="about">
      <section className="intro">
        <h1>About Bohemi Hotel</h1>
        <p>
          Bohemi Hotel is a boutique oasis where timeless elegance meets modern comfort. Nestled in a
          peaceful yet central location, we offer a refined hospitality experience tailored to both
          leisure and business travelers.
        </p>
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>
          Established in 2005, Bohemi was founded with a vision to create a welcoming home away from home.
          From our carefully curated interiors to our handpicked staff, every detail reflects our
          commitment to warmth, charm, and unforgettable stays.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We strive to offer our guests more than just accommodation. Bohemi is a place to rest, connect,
          celebrate, and be inspired. Whether you're staying for a night or a month, we ensure that every
          moment is filled with comfort and care.
        </p>
      </section>
    </div>
  );
}

export default About;
