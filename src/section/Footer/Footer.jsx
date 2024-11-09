import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; 2024 Tanish Raj Singh.<br/>
        All rights reserved.<br/>
        tanishraj.contact@gmail.com<br/>
        For latest updates connect on LinkedIn.</p>
    </section>
  )
}

export default Footer