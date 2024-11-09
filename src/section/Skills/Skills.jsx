import c from '../../assets/c.png'
import python from '../../assets/python.jpg'
import html from '../../assets/html.jpg'
import css from '../../assets/css.jpg'
import js from '../../assets/js.png'
import r from '../../assets/react.png'
import node from '../../assets/node.png'
import sql from '../../assets/sql.png'
import styles from './SkillsStyles.module.css'
import SkillsList from '../../common/SkillsList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className="sectionTitle">SKILLS</h1>
        <div className={styles.skillList}>
            <SkillsList src={c} skill='C lang'/>
            <SkillsList src={python} skill='Python'/>
            <SkillsList src={html} skill='HTML'/>
            <SkillsList src={css} skill='CSS'/>
            <SkillsList src={js} skill='JavaScript'/>
            <SkillsList src={r} skill='ReactJS'/>
            <SkillsList src={node} skill='NodeJS'/>
            <SkillsList src={sql} skill='SQL'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <p>Data Structures and Algorithms</p>
            <p>Object Oriented Programming</p>
            <p>Machine Learning</p>
            <p>Data Analysis</p>
            <p>Natural Language Processing</p>
        </div>
        <hr/>
    </section>
  )
}

export default Skills