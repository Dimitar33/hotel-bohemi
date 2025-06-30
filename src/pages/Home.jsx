import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Bohemi Hotel</h1>
        <p>Experience luxury, comfort, and elegance in every stay.</p>
         <Link to={'/rooms'} className='explore-button'>Explore Rooms</Link>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Prime Location</h2>
          <p>Located in the heart of the city, minutes away from attractions.</p>
        </div>
        <div className="feature">
          <h2>Elegant Rooms</h2>
          <p>Beautifully designed rooms with modern amenities and cozy interiors.</p>
        </div>
        <div className="feature">
          <h2>Friendly Staff</h2>
          <p>Our team is dedicated to making your stay unforgettable.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
