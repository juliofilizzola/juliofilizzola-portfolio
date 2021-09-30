import emailjs from 'emailjs-com';

const SendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_z050pzt', 'template_lf37z1n', e.target, 'user_KYJsNzAu6PTiq9l5r0vLd')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();  
};

export default SendEmail;