import {PureIncrement} from 'pure_counter'

export const Stats = ({ isDarkMode }) => {
  return (
    <section id="stats"
    className={`stats section  ${isDarkMode ? 'darkFooter-background' : 'light-background'}`}
    >

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <PureIncrement start={0} end={132} duration={1} className="purecounter" />
              <p>Clients</p>
            </div>
          </div>{/*<-- End Stats Item -->*/}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <PureIncrement start={0} end={94} duration={1} className="purecounter" />
              <p>Projects</p>
            </div>
          </div>{/*<-- End Stats Item -->*/}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <PureIncrement start={0} end={657} duration={1} className="purecounter" />
              <p>Hours Of Support</p>
            </div>
          </div>{/*<-- End Stats Item -->*/}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <PureIncrement start={0} end={12} duration={1} className="purecounter" />
              <p>Workers</p>
            </div>
          </div>{/*<-- End Stats Item -->*/}
         
        </div>
      </div>
    </section>
  )
}
