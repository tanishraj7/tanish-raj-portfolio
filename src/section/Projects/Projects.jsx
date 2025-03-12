import ecom from '../../assets/ecom.png'
import loan from '../../assets/concept.png'
import chatbot from '../../assets/chatbot.jpg'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import cartoon from '../../assets/opencv.png'
import hserver from '../../assets/server.jpg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
            src={ecom}
            link="https://github.com/tanishraj7/React-Advanced-filtering-ecom"
            h3='GINNIs CART'
            p='react ecommerce webapp'/>
            <ProjectCard
            src={hserver}
            link="https://github.com/tanishraj7/my-own-http-server"
            h3='Built my own HTTP server'
            p='GET, POST request and response'/>
            <ProjectCard
            src={chatbot}
            link="https://github.com/tanishraj7/AI-chatbot"
            h3='DATA ASSISTANT'
            p='smart search assistant'/>
            <ProjectCard
            src={cartoon}
            link="https://github.com/tanishraj7/cartoon-image-webapp"
            h3='CARTOONING AN IMAGE'
            p='creates a comic version of an image'/>
            <ProjectCard
            src={loan}
            link="https://github.com/tanishraj7/loan_payment_difficulties_prediction-kagglethon-"
            h3='LOAN PAYMENT PREDICTION'
            p='predict payment difficulties'/>
        </div>
    </section>
  )
}

export default Projects