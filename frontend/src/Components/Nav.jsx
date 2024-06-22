import React from "react";

function Nav() {
  return (
    <>
      <nav class="navBar">
        <div class="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <ul class="nav-item">
          <li class="nav-links">
            <a href="#Home">
              <i class="fas fa-home-lg-alt"></i>Home
            </a>
          </li>
          <li class="nav-links">
            <a href="#About">
              <i class="fa-solid fa-user"></i>About{" "}
            </a>
          </li>
          <li class="nav-links">
            <a href="#Skills">
              <i class="fa-solid fa-briefcase"></i>Skills
            </a>
          </li>
          <li class="nav-links">
            <a href="#Projects">
              <i class="fa-solid fa-gears"></i>Projects
            </a>
          </li>
          <li class="nav-links">
            <a href="#Contact">
              <i class="fa-solid fa-address-card"></i>Contact{" "}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
