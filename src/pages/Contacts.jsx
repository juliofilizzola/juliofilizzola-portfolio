import React from "react";
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import contactIcon from "../image/contact.png";
import SocialNetworks from "../components/SocialNetworks";
import SendEmail from "../Hooks/SendEmail";
import './style/contacts/contacts.css';

function Contacts() {
  const [getName, setGetName] = React.useState('');
  const [getEmail, setGetEmail] = React.useState('');
  const [getSubject, setGetSubject] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/contacts'){
      document.title='Contato';
      document.getElementById("favicon").href = contactIcon;
    }
  });

  const verifyMessages = () => {
    if(getName.trim() && getEmail.trim() && getSubject.trim() ) {
      setDisabled(false);
    }
  }

  React.useEffect(() => {
    verifyMessages();
  });

  return (
    <div>
      <Header />
      <div className="container-contact">
        <h1>Contact Me</h1>
        <div className="contact">
          <SocialNetworks />
        </div> 
        <div className="container-contact-forms">
          <div className="separator">Ou me mande um email</div>
          <form action="" className="forms" onSubmit={() => disabled && SendEmail}>
            <label htmlFor="name">
              <input type="text" name="name"  placeholder="Seu nome"
              onChange={({target})=> setGetName(target.value)}
              />
            </label>
            <label htmlFor="email">
              <input type="text" name="email" placeholder="Seu email"
              onChange={({target}) => setGetEmail(target.value)}
              />
            </label>
            <label htmlFor="subject">
              <input type="text" name="subject" placeholder="Assunto"/>
            </label>
            <label htmlFor="massage">
              <textarea name="massage" cols="30" placeholder="Sua mensagem" rows="10" 
              onChange={({target}) => setGetSubject(target.value)}/>
            </label>
            <button disabled={disabled} type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
