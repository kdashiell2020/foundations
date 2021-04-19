import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Registration from '../Registration'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const [org, setOrg] = useState(false);

  const { orgUrl } = router.query
  // let orgExists;

  useEffect(async () => {
    const result = await axios(
      'http://localhost:3000/api/organizations',
    );

    // console.log('inside effect')
    // console.log(orgUrl);
    const orgExist = result.data.some((org) => org.url === orgUrl);
    if (orgExist){
      setOrg(true)
    }

    // console.log(result);
    // console.log(result.data);
    // console.log(orgExists);
  }, [orgUrl]);

  console.log('in component');
  console.log(org);

  return org ? (
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
      Oops {/* Set up err page */}
    </div>
  )
}

export default Home
