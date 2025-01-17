import { useEffect } from "react";

export const Stats = () => {
  useEffect(() => {
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);

  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="132" data-purecounter-duration="1" className="purecounter"></span>
              <p>Clients</p>
            </div>
          </div>{/*<-- End Stats Item -->*/}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="94" data-purecounter-duration="1" className="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>{/*<-- End Stats Item -->*/}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="657" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>{/*<-- End Stats Item -->*/}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
              <p>Workers</p>
            </div>
          </div>{/*<-- End Stats Item -->*/}
         
        </div>
      </div>
    </section>
  )
}
