import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Velostation from '@/components/velostation.js'
import useNetwork from '@/data/network'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Home() {
    const { network, isLoading, isError } = useNetwork()
    const router = useRouter()
    
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    
    const station = network.stations.find(station => station.id === router.query.stationId);

    return (
      <>
      <header className={styles.header}>
          <h1 className={styles.titleB}>{station.name}</h1>
      </header>

      <main>
        <div className={styles.cards}>
        <h4>{station.name}</h4>
        <p>{station.extra.address}</p>
        <div className={styles.box}>
          <Image
            src="/veloIcon.png"
            alt="gele fiets icoon"
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
            width={8}
            height={16}
            priority
          />
          <h6>{station.distance * 1000}m</h6>
        </div>
        </div>

        </main>
        <footer>
          <div className={styles.footBox}>
            <Link style={{textDecoration: 'none'}} href="/" className={styles.foot}>back</Link>
          </div>
        </footer>
      </>
    )
  }