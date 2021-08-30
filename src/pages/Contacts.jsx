import Footer from "../components/Footer";
import Header from "../components/Header";
import './contacts.scss';

function Contacts() {
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

        </div> 
        <div className="container-contact-forms">
          <p>Ou me mande um email</p>
          <form action="" className="forms">
            <label htmlFor="name">
              <input type="text" name="name"  placeholder="Seu nome"/>
            </label>
            <label htmlFor="email">
              <input type="text" name="email" value="<?php>" placeholder="Seu email"/>
            </label>
            <label htmlFor="subject">
              <input type="text" name="subject" value="<?php>" placeholder="Assunto"/>
            </label>
            <label htmlFor="contentEmail">
              <textarea name="contentEmail" cols="30" placeholder="Sua mensagem" rows="10"/>
            </label>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacts
