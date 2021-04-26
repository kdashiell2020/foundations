import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const { id } = router.query
  const [organization, setOrganization] = useState();

  useEffect(async () => {
    if (id == undefined) { return; }
    const result = await axios(
      `http://localhost:3000/api/organizations/${id}`,
    );
    setOrganization(result.data)
  }, [id]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h3>Account Information</h3>
        <ul>
          <li>Name: { organization?.name }</li>
          <li>URL: { organization?.url }</li>
          <li>ID: { organization?.id }</li>
        </ul>

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
