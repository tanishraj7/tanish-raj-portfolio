import React from 'react'
import { useState } from 'react'
import styles from './HeroStyles.module.css'
import sun from '../../assets/sun.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import moon from '../../assets/moon.svg'
import CV from '../../assets/tanish-raj-cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import me from '../../assets/pfp.jpg'
import me2 from '../../assets/pixar_pfp.png'

function Hero() {
    const {theme, toggleTheme}= useTheme();
    const themeIcon= theme === 'light'? sun: moon;
    const linkedinIcon= theme === 'light'? linkedinLight: linkedinDark;
    const githubIcon= theme === 'light'? githubLight: githubDark;
    const clickHandler= ()=>{
        alert('Resume saved in files.')
    }

    const [alt, setAlt] = useState('profile-pic')
    const [img, setImg] = useState(me)
    const picHandler = () =>{
        if (alt === 'profile-pic'){
            setAlt('pixar-pic')
            setImg(me2)
        }else{
            setAlt('profile-pic')
            setImg(me)
        }
    }
    return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img src={img} alt={alt} className={styles.hero} onClick={picHandler}></img>
            <img src={themeIcon} alt='theme icon' className={styles.colorMode} onClick={toggleTheme}></img>
        </div>
        <div className={styles.info}>
            <h1>Tanish Raj <br/> Singh</h1>
            <h3>MANIPAL UNIVERSITY JAIPUR'26</h3>
            <span>
                <a href='https://www.linkedin.com/in/tanishrajsingh/' target='_blank'>
                <img src={linkedinIcon} alt='linkedin'></img>
                </a>
                <a href='https://github.com/tanishraj7' target='_blank'>
                <img src={githubIcon} alt='github'></img>
                </a>
            </span>
            <p><i>Versatile Computer Science undergrad with hands-on experience in software development, AI model pipelines, and NLP-powered search assistants. Built enterprise-level products and GenAI pipelines. Passionate about building scalable tech that thinks, acts, and delivers measurable impact.</i></p>
            <a href={CV} download>
                <button className='hover' onClick={clickHandler}>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero