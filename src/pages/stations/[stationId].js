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
        <div className={styles.veloBox}>
        <div className={styles.veloFoto}>
          <Image
            src="/velo-haadee-foto.jpeg"
            alt="background-picture-of-velo-antwerpen-bikes"

            priority          
            layout="fill"
            objectFit="cover"
          />
        </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.pusher}>
            <Image
              src="/location-icon.png"
              alt="gele fiets icoon"
              width={16}
              height={20}
              priority
            />
          </div>
          <h4 className={styles.haavier}>{station.name}</h4>
          <p className={styles.pee}>{station.extra.address}</p>
          <div className={styles.boxDrie}>
            <div className={styles.boxTwee}>
              <Image
                src="/veloIcon.png"
                alt="gele fiets icoon"
                width={34}
                height={17}
                priority
              />
              <div>
                <h6 className={styles.haazes}>{station.free_bikes}</h6>
              </div>
              <Image
                src="/pinIcon.png"
                alt="gele pin icoon"
                width={8}
                height={16}
                priority
              />
              <h6 className={styles.haazes}>{station.distance * 1000}m</h6>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <div>
            <button className={styles.koop}><span>Koop</span> een dagticket</button>
          </div>
          <div>
            <button className={styles.reserveer}><span>Reserveer</span> je fiets</button>
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