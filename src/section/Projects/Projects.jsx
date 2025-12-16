import ecom from '../../assets/ecom.png'
import chatbot from '../../assets/chatbot.jpg'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import cicd from '../../assets/connect4.png'
import ola from '../../assets/ola.jpg'
import aexp from '../../assets/aexp.jpg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
            src={ecom}
            link="https://github.com/tanishraj7/gc-full-stack-with-ai-agent"
            h3='GINNIs CART'
            p='ecom with AI shopping agent'/>
            <ProjectCard
            src={chatbot}
            link="https://github.com/tanishraj7/smart-search-assistant"
            h3='EduBud'
            p='RAG based AI assistant'/>
            <ProjectCard
            src={cicd}
            link="http://15.207.190.7:3000/"
            h3='Connect4'
            p='CI/CD pipeline for distributed system'/>
            <ProjectCard
            src={ola}
            link="https://github.com/tanishraj7/ola-da-project"
            h3='Ola Rides Data Analysis'
            p='Advanced analysis to identify key business trends'/>
            <ProjectCard
            src={aexp}
            link="https://github.com/tanishraj7/ae-user-exit-webapp"
            h3='AEXP Churn prediction app'
            p='ANN-based churn prediction model with TensorFlow'/>
        </div>
    </section>
  )
}

export default Projects