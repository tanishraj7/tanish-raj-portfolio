import React from 'react'
import styles from './ExpStyles.module.css';
import ExpCard from '../../common/ExpCard';
import mnit from '../../assets/mnit.png';
import ct from '../../assets/ct.jpg';
import raman from '../../assets/raman.jpg';

export default function Exp() {
  return (
    <>
    <section section id='exp' className={styles.container}>
        <h1 className="sectionTitle">Experience</h1>
        <div className={styles.expContainer}>
          <div className={styles.expCard}>
            <ExpCard
            src={ct}
            h3={"Celebal Technologies"}
            h4={'SDE Intern : May - July 2025'}
            p={'Built scalable, accessible React components aligned with enterprise design systems, leveraging Redux Toolkit to optimize state management and reduce defects and re-renders by 60% within a CI/CD-driven codebase.'}
            a={'https://celebaltech.com/'}
            />
          </div>
          <div className={styles.expCard}>
            <ExpCard
            src={mnit}
            h3={"MNIT Jaipur"}
            h4={'Research & Dev Intern : May - July 2025'}
            p={'Researched real-time A2A communication and 6G paradigms (Federated Learning, Sem-Com, Edge Computing), reducing cloud latency by 75%, and built a GenAI-driven packet inspection pipeline achieving 93% intrusion detection accuracy with LSTM–XGBoost and a local LLM (Gemma3).'}
            a={'https://www.mnit.ac.in/'}
            />
          </div>
          <div className={styles.expCard}>
            <ExpCard
            src={raman}
            h3={'RAMAN Lab'}
            h4={'ML and Data Analysis Intern : May - July 2023'}
            p={'Preprocessed and analyzed 50K+ IMDB reviews using Python, improving data pipeline efficiency by 30%, and built an NLP-based sentiment analysis model achieving 85%+ precision using machine learning techniques.'}
            a={'https://www.linkedin.com/company/raman-lab/?originalSubdomain=in'}
            />
          </div>
        </div>
    </section>
    </>
  )
}
