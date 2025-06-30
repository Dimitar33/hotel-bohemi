import './Amenities.scss';

function Amenities() {
  return (
    <div className="amenities">
      <h1>Hotel Amenities</h1>
      <p className="intro">
        At Bohemi Hotel, we provide a wide range of premium amenities to make your stay comfortable,
        relaxing, and memorable.
      </p>

      <div className="amenity-grid">
        <div className="amenity">
          <h2>Spa & Wellness</h2>
          <p>
            Recharge your body and mind in our tranquil spa. We offer massages, facials, sauna access, and
            holistic treatments to help you unwind.
          </p>
        </div>

        <div className="amenity">
          <h2>Fitness Center</h2>
          <p>
            Stay active in our fully equipped gym featuring modern cardio and strength equipment. Open 24/7
            for your convenience.
          </p>
        </div>

        <div className="amenity">
          <h2>Breakfast Buffet</h2>
          <p>
            Start your day with a delicious and diverse breakfast buffet — freshly baked goods, fruits,
            cheeses, hot dishes, and more.
          </p>
        </div>

        <div className="amenity">
          <h2>Free Wi-Fi</h2>
          <p>
            High-speed wireless internet is available throughout the hotel so you can stay connected with
            ease.
          </p>
        </div>

        <div className="amenity">
          <h2>Room Service</h2>
          <p>
            Enjoy gourmet meals and beverages in the comfort of your room. Available daily from 7 AM to
            11 PM.
          </p>
        </div>

        <div className="amenity">
          <h2>Private Parking</h2>
          <p>
            Secure on-site parking is available to all guests. EV charging stations are also provided.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
