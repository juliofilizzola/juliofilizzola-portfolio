import Footer from "../components/Footer";
import Header from "../components/Header";
import './contacts.scss';

function Contacts() {
  return (
    <div>
      <Header />
      <div className="container-contact">
        <p>Contact Me</p>
        <div>
          LinkedIn
          Twitter
          Instagram  
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
