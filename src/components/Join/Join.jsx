import React,{useRef} from 'react'
import'./Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form=useRef()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jj0igai', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="Join" id="join-us">
        <div className="left-join">
            <hr/>
        <div>
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY </span>
            <span className='stroke-text'>WITH US?</span>
        </div>
        </div>
        <div className="right-join">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type='email' name='user-email' placeholder='Enter your Email'>
                </input>
                <button className='btn btn-j'>Join Now</button>

            </form>
            <div className="contact-us">
        <h2>Contact Us</h2>
        <p> +91 98765 43210</p>
        <p> +91 91234 56789</p>
      </div>
        </div>
    </div>
  )
}

export default Join