import { useEffect } from "react";
import Swiper from "swiper/bundle";
import 'swiper/swiper-bundle.min.css';  // Swiper CSS import

export const Testimonials = () => {
  useEffect(() => {
    // Initialize Swiper after the component mounts
    const swiper = new Swiper('.swiper-container', {
      loop: true,  // Enable continuous loop
      speed: 600,  // Transition speed between slides
      autoplay: {
        delay: 5000,  // Delay between slides
      },
      slidesPerView: 1,  // Default slides per view (1 slide on small screens)
      spaceBetween: 30,  // Space between slides
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,  // Allow clicking on pagination bullets
      },
      breakpoints: {
        320: {
          slidesPerView: 1,  // 1 slide on mobile screens
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,  // 2 slides on tablet screens
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,  // 3 slides on larger screens
          spaceBetween: 40,
        },
      },
    });

    // Cleanup swiper instance on component unmount
    return () => swiper.destroy();
  }, []); // Empty dependency array ensures it runs only once when component mounts

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Swiper Container */}
        <div className="swiper-container">
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
  );
};


