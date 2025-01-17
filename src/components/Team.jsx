

export const Team = () => {
  return (
    <section id="team" className="team section light-background">

      {/*-- Section Title --*/}
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/*-- End Team Member --*/}

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member">
              <div className="member-img">
                <img src="img/team/team-1.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Davids Kelechi</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>{/*-- End Team Member --*/}

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member">
              <div className="member-img">
                <img src="img/team/team-2.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>{/*-- End Team Member --*/}

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="team-member">
              <div className="member-img">
                <img src="img/team/team-3.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>{/*-- End Team Member --*/}

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="team-member">
              <div className="member-img">
                <img src="img/team/team-4.jpg" className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>{/*-- End Team Member --*/}

        </div>

      </div>

    </section>
  )
}