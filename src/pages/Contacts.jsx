import Footer from "../components/Footer";
import Header from "../components/Header";
import './contacts.scss';

function Contacts() {
  return (
    <div>
      <Header />
      <div className="container-contact">
        <h1>Contact Me</h1>
        <div>
          <a 
            href="https://www.linkedin.com/in/julio-filizzola/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/juliofilizzola/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/Juliofilizzola"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>

        </div> 
        <div className="container-contact-forms">
          <p>Ou me mande um email</p>
          <form action="" className="forms">
            <label>
              <input type="text" name="email" />
            </label>
            <label>
              <input type="text" name="email" value="<?php>" />
            </label>
            <label>
              <input type="text" name="email" value="<?php>" />
            </label>
            <label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacts
