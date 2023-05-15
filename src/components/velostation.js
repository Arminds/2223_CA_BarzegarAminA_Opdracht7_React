import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';

// import StationImage from '@/components/StationImage.js'

function velostation(props) {
    return (
      <Link style={{textDecoration: 'none'}} href={`/stations/${props.station.id}`}className={styles.card}>     
        <h4>{props.station.name}</h4>
        <p>{props.station.extra.address}</p>
        <div className={styles.box}>
          <Image
            src="/veloIcon.png"
            alt="gele fiets icoon"
            className={styles.veloIcon}
            width={34}
            height={17}
            priority
          />
          <div  className="bikesEnAfstand">
            <h6>{props.station.free_bikes}</h6>
          </div>
          <Image
            src="/pinIcon.png"
            alt="gele pin icoon"
            className={styles.veloIcon}
            width={8}
            height={16}
            priority
          />
          <h6>{props.station.distance * 1000}m</h6>
        </div>
      </Link>
    );
  }
  
  export default velostation;