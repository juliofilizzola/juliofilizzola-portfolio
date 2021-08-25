import Footer from "../components/Footer"
import Header from "../components/Header"

function Contacts() {
  return (
    <div>
      <Header />
      <div>
        <p>Contact Me</p>
        <div>
          LinkedIn
          Twitter
          Instagram  
        </div> 
        <div>
          <p>Ou me mande um email</p>
          <form action="">
            <label>
              <input type="text" name="email" value="<?php>" />
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
