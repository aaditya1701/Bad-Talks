import emailjs from 'emailjs-com';

const sendEmail = (formData) => {
  const serviceID = 'service_u5tje7b';
  const templateID = 'template_j2o8cah';
  const userID = 'YOUR_USER_ID';

  const templateParams = {
    name: formData.name,
    email: formData.email,
    ticketId: formData.ticketId,
  };

  emailjs.init('L33E4Y71oiTUO6lH-');

  emailjs.send(serviceID, templateID, templateParams)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

export default sendEmail;
