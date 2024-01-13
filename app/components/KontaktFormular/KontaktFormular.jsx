'use client'
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './styles.module.css'

function ContactForm() {

  const [state, handleSubmit] = useForm("xpzvwdjg");

  if (state.succeeded) {
      return <p>Deine Nachricht wurde versendet. Vielen Dank</p>;
  }

  return (
      <form onSubmit={handleSubmit} 
      className={styles.contactForm}>
      <div>
      <label htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>

        <div>
        <label htmlFor="message">
        Nachricht
      </label>      
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
      
      <button type="submit" 
      disabled={state.submitting}
      className='button'>
        absenden
      </button>
    </form>
  );
}
function KontaktFormular() {
  return (
    <ContactForm />
  );
}
export default KontaktFormular;