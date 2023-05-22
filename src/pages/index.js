import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Velodashboard from '@/components/Velodashboard.js'
import Velostation from '@/components/velostation.js'
import {useState, useEffect} from 'react';
import useNetwork from '@/data/network'


import {getDistance} from '@/components/getDistance.js';
import Link from 'next/link';



export default function Home() {

    const { network, isLoading, isError } = useNetwork()

      const [filter, setFilter] = useState('');
      const [location, setLocation] = useState({});
    
      // use effect gebruiken om bv iets op te roepen enkel bij opstart van de app
      useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            (error) => {
              console.error(error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      }, []);
     
      if (isLoading) return <div>Loading...</div>
      if (isError) return <div>Error</div>
    
      const stations = network.stations.filter(station => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
    
      // map stations to add disrance to current location
      stations.map(station => {
        station.distance = getDistance(location.latitude, location.longitude, station.latitude, station.longitude).distance/1000;
      });
    
      // sort stations by distance
      stations.sort((a, b) => a.distance - b.distance);
    
      function handleFilterChange(e) {
        setFilter(e.target.value);
      }
      console.log(stations)



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
        <input className={styles.zoekbalk} type="text" value={filter} onChange={handleFilterChange} placeholder="zoek een station of adres..."/>
          <div className={styles.cards_content}>
            {stations/*.slice(0,9)*/.map(station =>  //slice: voor een limiet
              <Velostation station={station} key={station.id}/>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
//Link href={`/stations/${station.id}`}
// <Link href={`/stations/${station.id}`} key={station.id}>{station.name</Link>
