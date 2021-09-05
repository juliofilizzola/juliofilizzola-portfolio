import React from "react";
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Footer from "../components/Footer";
import Header from "../components/Header";
import contactIcon from "../image/contact.png"
import './contacts.css';

function Contacts() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/contacts'){
      document.title='Contato';
      document.getElementById("favicon").href = contactIcon;
    }
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z050pzt', 'template_lf37z1n', e.target, 'user_KYJsNzAu6PTiq9l5r0vLd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div>
      <Header />
      <div className="container-contact">
        <h1>Contact Me</h1>
        <div className="contact">

          <a 
            href="https://www.linkedin.com/in/julio-filizzola/"
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/juliofilizzola/"
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            Instagram
          </a>
          <a
            href="https://twitter.com/Juliofilizzola"
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            Twitter
          </a>
          <a
            href="https://github.com/juliofilizzola"
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            Github
          </a>

        </div> 
        <div className="container-contact-forms">
          <div className="separator">Ou me mande um email</div>
          <form action="" className="forms" onSubmit={sendEmail}>
            <label htmlFor="name">
              <input type="text" name="name"  placeholder="Seu nome"/>
            </label>
            <label htmlFor="email">
              <input type="text" name="email" placeholder="Seu email"/>
            </label>
            <label htmlFor="subject">
              <input type="text" name="subject" placeholder="Assunto"/>
            </label>
            <label htmlFor="massage">
              <textarea name="massage" cols="30" placeholder="Sua mensagem" rows="10"/>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacts
