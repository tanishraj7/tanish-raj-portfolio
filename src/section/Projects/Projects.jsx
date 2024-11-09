import ecom from '../../assets/ecom.png'
import loan from '../../assets/loan.png'
import chatbot from '../../assets/chatbot.jpg'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
            src={ecom}
            link="https://github.com/tanishraj7/React-Advanced-filtering-ecom"
            h3='GINNIs CART'
            p='ecommerce webapp'/>
            <ProjectCard
            src={chatbot}
            link="https://github.com/tanishraj7/AI-chatbot"
            h3='MY ASSISTANT'
            p='ai chatbot and visionbot'/>
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