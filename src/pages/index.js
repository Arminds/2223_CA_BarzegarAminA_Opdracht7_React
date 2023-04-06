import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Velodashboard from '@/components/Velodashboard.js'
import {useState} from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cycle-Studio</title>
        <meta name="description" content="Cycle studio application - school project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cycle-studio-favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        </div>
      </main>
    </>
  )
}
