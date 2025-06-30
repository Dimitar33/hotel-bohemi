import './Rooms.scss';

function Rooms() {
  return (
    <div className="rooms">
      <h1>Rooms & Suites</h1>
      <p className="intro">
        At Bohemi Hotel, every room is designed to offer comfort, style, and a touch of luxury. Choose from
        our range of accommodations to suit your travel needs and personal taste.
      </p>

      <div className="room-list">
        <div className="room-card">
          <h2>Standard Room</h2>
          <p>
            Cozy and well-appointed, our Standard Rooms are perfect for solo travelers or short stays.
            Enjoy a queen-size bed, work desk, free Wi-Fi, and a modern en-suite bathroom.
          </p>
        </div>

        <div className="room-card">
          <h2>Deluxe Room</h2>
          <p>
            A step up in comfort and space, our Deluxe Rooms feature a king-size bed, seating area,
            premium linens, and stunning views of the city or garden.
          </p>
        </div>

        <div className="room-card">
          <h2>Executive Suite</h2>
          <p>
            The ultimate luxury experience. The Executive Suite offers a separate living area, king bed,
            soaking tub, espresso machine, and VIP amenities for a truly indulgent stay.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
