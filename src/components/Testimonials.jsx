import { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css' // Swiper CSS import

export const Testimonials = () => {
  useEffect(() => {
    // Initialize Swiper after the component mounts
    const swiper = new Swiper('.swiper', {
      loop: true,
      centeredSlides: true, // Center the active slide
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 30, // Space between slides
      loopAdditionalSlides: 5, // Clone 5 additional slides for a smoother loop
      slidesPerView: 'auto', // Dynamic slides per view
      // Responsive breakpoints
      breakpoints: {
       768: {
          slidesPerView: 1, // Show 1 slide on mobile/tablets
        },
        // When screen width is greater than 768px (for desktop)
        769: {
          slidesPerView: 3, // Show 3 slides on desktop
          loopAdditionalSlides: 3,
          spaceBetween: 40,
        },
      },
      initialSlide: 0, // Start from the first slide
    })

    window.addEventListener("load", swiper)
  }, [])

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Swiper Container */}
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Testimonial 1 */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure dignissim donec porttitor...
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem...
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-2.png" className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum...
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos...
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-4.png" className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam...
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}
