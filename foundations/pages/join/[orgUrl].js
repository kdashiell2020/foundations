import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Registration from '../Registration'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const { orgUrl } = router.query
  let orgExists;

  useEffect(async () => {
    const result = await axios(
      'http://localhost:3000/api/organizations',
    );
    console.log('inside effect')
    console.log(orgUrl);
    orgExists = result.data.some((org) => org.url === orgUrl);
    console.log(result);
    console.log(result.data);
    console.log(orgExists);
  }, [orgUrl]);

  console.log('in component');
  console.log(orgExists);

  return orgExists ? (
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
  ) : (
    <div>
      Oops
    </div>
  )
}

export default Home
