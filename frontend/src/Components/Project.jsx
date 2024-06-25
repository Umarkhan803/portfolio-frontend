import React, { useEffect } from "react";
function Project() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <section id="Projects">
        <div class="container">
          <h2>My Projects</h2>
          <div class="project-grid">
            <div class="project-card ">
              <div class="card-content hidden">
                <img src="/Capture.PNG" alt="Project 1" />
                <div class="project-info">
                  <h3>Restaurant</h3>
                  <p>Short description of the project goes here.</p>
                  <a href="https://restaurant-a4b5.onrender.com">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            <div class="project-card">
              <div class="card-content  hidden">
                <img src="/Capture2.PNG" alt="Project 2" />
                <div class="project-info">
                  <h3>TravelO</h3>
                  <p>Short description of the project goes here.</p>
                  <a href="https://github.com/Umarkhan803/travel_app_frontend.git">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            <div class="project-card">
              <div class="card-content hidden ">
                <img
                  src="/Capture2.PNG
                  "
                  alt="Project 3"
                />
                <div class="project-info">
                  <h3>Quize App</h3>
                  <p>Short description of the project goes here.</p>
                  <a href="https://github.com/Umarkhan803/quizeApp.git">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="circle-4"></div>
      </section>
    </>
  );
}

export default Project;
