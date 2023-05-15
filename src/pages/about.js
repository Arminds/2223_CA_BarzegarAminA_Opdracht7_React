import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import useNetwork from '@/data/network'




export default function About() {

    const { network, isLoading, isError } = useNetwork()

     
      if (isLoading) return <div>Loading...</div>
      if (isError) return <div>Error</div>


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
        <h1 className={styles.title}>About us</h1>
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
      </main>
    </>
  )
}
