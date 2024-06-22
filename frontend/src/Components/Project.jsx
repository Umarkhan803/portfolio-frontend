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
                  src="https://files.oaiusercontent.com/file-rGEfOwwMNd2XIbyeSVPWJAJd?se=2024-06-18T13%3A24%3A07Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6a4db4b2-3ad4-46c0-836e-2e25637897d2.webp&sig=Xz8gqbgsKv5Slwi9ecSx/i2eEa7tknP/Evl5C0DXIvA%3D"
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
