import styles from './CertiStyles.module.css'
import accenture from '../../assets/accenture.png'
import dan from '../../assets/dan.png'
import dsa from '../../assets/dsa.png'
import gssoc from '../../assets/gssoc.png'
import mckin from '../../assets/mckin.jpg'
import nptel from '../../assets/nptel.jpeg'
import oci from '../../assets/oci.png'
import supl from '../../assets/super.png'
import jpmc from '../../assets/jpmc.png'

import React from 'react'

export default function Certi() {
  return (
    <>
        <div className={styles.slider}>
            <div className={styles.track}>
                <img src={oci} />
                <img src={mckin} />
                <img src={gssoc} />
                <img src={nptel} />
                <img src={supl} />
                <img src={dan} />
                <img src={dsa} />
                <img src={jpmc} />
                <img src={accenture} />

                <img src={oci} />
                <img src={mckin} />
                <img src={gssoc} />
                <img src={nptel} />
                <img src={supl} />
                <img src={dan} />
                <img src={dsa} />
                <img src={jpmc} />
                <img src={accenture} />
            </div>
    </div>
    </>
  )
}
