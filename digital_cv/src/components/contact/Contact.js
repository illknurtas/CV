import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gq70dp1', 'template_1ngny5c', form.current, 'q7GhB-99-2kpEu4NW')
    e.target.reset()
    }
  return (
    <section id='contact'>
      <h2>Contact</h2>
      <div className='container contact_container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name='message' rows='7' placeholder="Your message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact