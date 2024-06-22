import React, { useState, useEffect } from "react";

function Home() {
  const [text, setText] = useState("");
  const fullText = "# Full Stack Web Applications";
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section class="Main" id="Home">
        <div class="circle-1"></div>
        <div class="tagLine ">
          <h1>MERN Stack Developer </h1>
          <span>Building Dynamic and Scalable </span>
          <p id="text">{text}</p>
          <button class="main-button">
            <a href="#">Check CV</a>
          </button>
        </div>
        <img src="/img1.png" alt="" />
      </section>
    </>
  );
}

export default Home;
