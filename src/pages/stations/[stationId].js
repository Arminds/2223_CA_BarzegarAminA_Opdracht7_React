import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Velostation from '@/components/velostation.js'
import useNetwork from '@/data/network'
import { useRouter } from 'next/router'





export default function Home() {

    const { network, isLoading, isError } = useNetwork()
    const router = useRouter()
    
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    
    const station = network.stations.find(station => station.id === router.query.stationId);

    return (
      <>
      <main>
        <div className={styles.cards}>
            <div className={styles.cards_content}></div>
        <h4>{station.name}</h4>
        <p>{station.extra.address}</p>
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
            <h6>{station.free_bikes}</h6>
          </div>
          <Image
            src="/pinIcon.png"
            alt="gele pin icoon"
            className={styles.veloIcon}
            width={8}
            height={16}
            priority
          />
          <h6>{station.distance * 1000}m</h6>
        </div>
        </div>

        </main>
      </>
    )
  }

  /*  <main>
          <div className={styles.cards}>
            <div className={styles.cards_content}>
              {stations.map(station => 
                <Velostation station={station} key={station.id}/>
              )}
            </div>
        </div>
      </main> */