import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="intro">
        We'd love to hear from you. Whether you have a question, a special request, or want to make a
        booking — just get in touch!
      </p>

      <div className="contact-content">
        <div className="form-section">
          <form>
            <label>
              Name:
              <input type="text" placeholder="Your full name" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message:
              <textarea placeholder="Your message..." required />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="info-section">
          <h2>Hotel Information</h2>
          <p><strong>Address:</strong> 123 Serenity Street, City Center</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> info@bohemihotel.com</p>

          <div className="map-container">
            <iframe
              title="Bohemi Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d32238.809351807104!2d27.66564606594351!3d42.68184582276968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x40a69faadb19c6ef%3A0xf82b86b9ebc03cb3!2sSunny%20Beach%2C%208240%20Sunny%20Beach!3m2!1d42.687019299999996!2d27.705183899999998!5e0!3m2!1sen!2sbg!4v1751287746009!5m2!1sen!2sbg"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
