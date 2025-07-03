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
  {[
    {
      title: 'Standard Room',
      desc: 'Cozy and well-appointed...',
      img: '/assets/Bohemy2.jpg',
    },
    {
      title: 'Deluxe Room',
      desc: 'A step up in comfort...',
      img: '/assets/Bohemy2.jpg',
    },
    {
      title: 'Executive Suite',
      desc: 'The ultimate luxury...',
      img: '/assets/Bohemy2.jpg',
    }
  ].map((room, index) => (
    <div key={index} className={`room-card ${index % 2 === 1 ? 'reverse' : ''}`}>
      <div className="room-image">
        <img src={room.img} alt={room.title} />
      </div>
      <div className="room-info">
        <h2>{room.title}</h2>
        <p>{room.desc}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Rooms;
