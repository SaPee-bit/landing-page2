import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Contact = () => {
  return (
    <section id="contact" className="contact section">
      {/* Google Map Section */}
      <div style={{ height: "400px", width: "100%" }}>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ height: "100%", width: "100%" }}
            center={{ lat: 9.05785, lng: 7.49508 }} // Coordinates for Abuja
            zoom={12}
          >
            {/* Add a marker for Abuja */}
            <Marker position={{ lat: 9.05785, lng: 7.49508 }} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Contact Information and Form Section Below Google Map */}
      <div className="container" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: "40px" }}>
        <div className="row">
          {/* Left Column - Contact Info (Address, Phone, Email) */}
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>Zone A, Plot 233 Vertican Garden Estate, Orozo, FCT Abuja, ABJ 900100</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+234 8085269015</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>davidskels@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
