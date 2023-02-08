import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Rad list | Home</title>
        <meta name="keywords" content="Rad" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>loremmmmmmmmmmmmmmmmmmmmmmmmmmmm m  mm              m m m m m m m ededed </p>
        <p className={styles.text}>loremmmmmmmmmmmmmmmmmmmmmmmmmmmm m  mm              m m m m m m m ededed </p>
        <p className={styles.text}>loremmmmmmmmmmmmmmmmmmmmmmmmmmmm m  mm              m m m m m m m ededed </p>
        <p className={styles.text}>loremmmmmmmmmmmmmmmmmmmmmmmmmmmm m  mm              m m m m m m m ededed </p>
        <p className={styles.text}>loremmmmmmmmmmmmmmmmmmmmmmmmmmmm m  mm              m m m m m m m ededed </p>
        <p className={styles.text}>loremmmmmmmmmmmmmmmmmmmmmmmmmmmm m  mm              m m m m m m m ededed </p>
        <Link href='/rad' className={styles.btn}>See Rad Listing</Link>
      </div>
    </>
  )
}
