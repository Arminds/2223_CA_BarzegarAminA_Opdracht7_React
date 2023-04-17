import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Velodashboard from '@/components/Velodashboard.js'
import Velostation from '@/components/velostation.js'
import {useState} from 'react';
import useNetwork from '@/data/network'


export default function Home() {

    const { network, isLoading, isError } = useNetwork()
   
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>console.error();</div>

    const stations = network.stations;

  return (
    <>
      <Head>
        <title>Cycle-Studio</title>
        <meta name="description" content="Cycle studio application - school project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cycle-studio-favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
                    src="/logo-velo-app.png"
                    alt="logo icon"
                    className={styles.veloIcon}
                    width={60}
                    height={60}
                    priority
          />
        </div>
        <h1 className={styles.title}>Stations</h1>
        <div className={styles.icon}>
          <a>
          <Image
                    src="/logo-velo-app.png"
                    alt="logo icon"
                    className={styles.veloIcon}
                    width={60}
                    height={60}
                    priority
          />
          </a>
        </div>
      </header>


      <main>
        <div className={styles.cards}>
          <div className={styles.cards_content}>
            {stations.map(station =>  
              <Velostation station={station} key={station.id}/>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
