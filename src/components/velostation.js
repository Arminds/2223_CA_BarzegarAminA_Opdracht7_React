import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

function velostation(props) {
    return (

        <div className={styles.card}>
                <h4>{props.station.name}</h4>
                <p>{props.station.extra.address}</p>
                <div className={styles.box}>
                  <Image
                    src="/veloIcon.png"
                    alt="gele fiets icoon"
                    className={styles.veloIcon}
                    width={40}
                    height={24}
                    priority
                  />
                  <p>{props.station.free_bikes}</p>
                  <Image
                    src="/pinIcon.png"
                    alt="gele pin icoon"
                    className={styles.veloIcon}
                    width={10}
                    height={20}
                    priority
                  />
                  <p>{props.station.distance * 1000}m</p>
                </div>
              </div>

    );
  }
  
  export default velostation;