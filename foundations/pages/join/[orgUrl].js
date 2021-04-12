import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Registration from '../Registration'

import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { org_url } = router.query

  return <p>Org Url: {org_url}</p>
}

const Home = () => {
  const router = useRouter()
  const { orgUrl } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Registration orgUrl={ orgUrl }/>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home