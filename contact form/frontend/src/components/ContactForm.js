import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/form-data/send-mail', {
        email,
        subject,
        mailMessage: message,
      });
      setSent(true);
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <div>
      <h1 className='contact-form'>Contact Form</h1>
      {sent ? (
        <p>Message Sent Successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
