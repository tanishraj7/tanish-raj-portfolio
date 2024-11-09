import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className="sectionTitle">CONTACT</h1>
        <form action="https://formspree.io/f/xyzywndp" method='POST'>
            <div className="formGroup">
                <label htmlFor="name" hidden>Name</label>
                <input type='text' name='name' id='name' placeholder="Name" required/>
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>Email</label>
                <input type='email' name='email' id='email' placeholder="Email" required/>
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>Message</label>
                <textarea name='message' id='message' placeholder="Send a message to TANISH RAJ" required/>
            </div>
            <input className='hover btn' type='submit' value="Submit"/>
        </form>
    </section>
  )
}

export default Contact