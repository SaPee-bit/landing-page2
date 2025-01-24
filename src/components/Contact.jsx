import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"

export const Contact = () => {
  const [userInfo, setUserInfo] = useState()
  
  // Initialize the form with react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  // Prohibited words for message validation
  const prohibitedWords = ['spam', 'scam', 'fuck', 'fool']

  // Custom validation for Message
  const validateMessage = (value) => {
    if (!value.trim()) {
      return "Message is required."
    }
    if (value.length < 10) {
      return "Message must be at least 10 characters long."
    }
    if (value.length > 500) {
      return "Message must be less than 500 characters."
    }
    if (prohibitedWords.some(word => value.toLowerCase().includes(word))) {
      return "Message contains prohibited words."
    }
    if (/[<>]/.test(value)) {
      return "Message contains forbidden characters (<, >)."
    }
    return true
  };

  // Custom validation for Email
  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!value.trim()) {
      return "Email is required."
    }
    if (!emailPattern.test(value)) {
      return "Please enter a valid email address."
    }
    return true
  };

  // Custom validation for Name
  const validateName = (value) => {
    if (!value.trim()) {
      return "Name is required."
    }
    if (value.length < 3) {
      return "Name must be at least 3 characters long."
    }
    if (/[^a-zA-Z\s]/.test(value)) {
      return "Name can only contain letters and spaces."
    }
    if (prohibitedWords.some(word => value.toLowerCase().includes(word))) {
      return "Message contains prohibited words."
    }
    if (/[<>]/.test(value)) {
      return "Message contains forbidden characters (<, >)."
    }
    return true
  }

  // Custom validation for Subject
  const validateSubject = (value) => {
    if (!value.trim()) {
      return "Subject is required."
    }
    if (value.length > 50) {
      return "Subject must be less than 50 characters."
    }
    if (/[^a-zA-Z\s]/.test(value)) {
      return "Subject can only contain letters and spaces."
    }
    if (prohibitedWords.some(word => value.toLowerCase().includes(word))) {
      return "Message contains prohibited words."
    }
    if (/[<>]/.test(value)) {
      return "Message contains forbidden characters (<, >)."
    }
    return true
  }

  // Handle form submission
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log("Form Submitted:", data)
    axios
      .get("http://localhost:5000/", {
        params: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
      })
      .then(() => {
        console.log("Message sent successfully!")
        reset() // Reset form after successful submission
      })
      .catch(() => {
        console.log("Failed to send message.")
      })
  }

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
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    {...register('name', {
                      validate: validateName,  // Apply custom name validation
                    })}
                  />
                  {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    {...register('email', {
                      validate: validateEmail,  // Apply custom email validation
                    })}
                  />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    {...register('subject', {
                      validate: validateSubject,  // Apply custom subject validation
                    })}
                  />
                  {errors.subject && <p style={{ color: 'red' }}>{errors.subject.message}</p>}
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    {...register('message', {
                      validate: validateMessage,  // Apply custom message validation
                    })}
                  ></textarea>
                  {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error"></div>
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
  )
}