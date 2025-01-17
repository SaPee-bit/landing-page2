

export const Projects = () => {
  return (
      <section id="projects" className="text-center py-5">
        <hr className="line"></hr>
        <div className="container py-5">
          <div className="row justify-content-center">
            <h2 className="fw-bold">Projects</h2>
            <p className="lead text-muted mb-5">View some of my latest projects</p>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-4 mx-auto mb-5">
              <div className="card h-100 shadow-lg border-0 bg-light">
                <img className="card-img-top" src="img/projects/project1.png" alt="Project 1"/> 
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Gymmosterous App</h5>
                  <div className="mb-2">
                    <div className="badge bg-primary rounded-pill">Bootstrap</div>
                    <div className="badge bg-primary rounded-pill">React</div>
                    <div className="badge bg-primary rounded-pill">Material UI</div>
                  </div>
                  <p className="card-text">
                    A customized gym fitness forge app built using React 17,
                    Material UI 5 and Bootstrap.
                  </p>
                </div>
                <div className="card-footer bg-transparent mb-3">
                  <a
                    className="btn btn-outline-primary btn-sm text-uppercase"
                    href="https://gymfittnessbysapee.netlify.app/"
                    target="_blank"
                  >
                  {/*--target="_blank"- sets the link to load on a new page--*/}
                    <span className="material-icons-outlined me-1">code</span>
                    site Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mx-auto mb-5">
              <div className="card h-100 shadow-lg border-0 bg-light">
                <img className="card-img-top" src="img/projects/project2.png" alt="Project 2" />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Portfolio Website</h5>
                  <div className="mb-2">
                    <div className="badge bg-primary rounded-pill">PHP</div>
                    <div className="badge bg-primary rounded-pill">React</div>
                    <div className="badge bg-primary rounded-pill">Material UI</div>
                  </div>
                  <p className="card-text">
                    A portfolio website built using PHP, Vite.js and
                    Material UI 5 that uses a PostgreSQL database to store
                    data.
                  </p>
                </div>
                <div className="card-footer bg-transparent mb-3">
                  <a
                    className="btn btn-outline-primary btn-sm text-uppercase"
                    href="src/maintenace.html"
                    target="_blank"
                  >
                    <span className="material-icons-outlined me-1">code</span>
                    Site Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mx-auto mb-5">
              <div className="card h-100 shadow-lg border-0 bg-light">
                <img className="card-img-top" src="img/projects/ligtMode.PNG" alt="Project 3" />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Mode Switch Application</h5>
                  <div className="mb-2">
                    <div className="badge bg-primary rounded-pill">Bootstrap</div>
                    <div className="badge bg-primary rounded-pill">React</div>
                    <div className="badge bg-primary rounded-pill">Material UI</div>
                  </div>
                  <p className="card-text">
                    A light mode and dark mode app built using React 17,
                    Material UI 5 and Bootstrap.
                  </p>
                </div>
                <div className="card-footer bg-transparent mb-3">
                  <a
                    className="btn btn-outline-primary btn-sm text-uppercase"
                    href="https://mode-switchbysapee.netlify.app/"
                    target="_blank"
                  >
                    <span className="material-icons-outlined me-1">code</span>
                    Site Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
