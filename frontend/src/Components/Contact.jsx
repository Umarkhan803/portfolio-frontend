import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const handleLogin = async () => {
    let result = await fetch("http://localhost:3500/message", {
      method: "post",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem("userMessage", JSON.stringify(result.user));
      localStorage.setItem("tokenMessage", JSON.stringify(result.auth));
      alert("Message sent successfully ");
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };

  return (
    <>
      <section id="Contact">
        <div class="container">
          <h2>Contact Me</h2>
          <form action="" method="POST">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                autoComplete="off"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                autoComplete="off"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required></textarea>
            </div>
            <button type="submit" onClick={handleLogin}>
              Send Message
            </button>
          </form>
        </div>
        <div class="circle-5"></div>
      </section>
    </>
  );
}

export default Contact;
