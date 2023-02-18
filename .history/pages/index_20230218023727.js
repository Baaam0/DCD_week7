import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'


export default function Home() {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);

  const apiKey = "BKu0nr7SnBGOqKTSgWfcyr59UwXtwa7g3dY4YQrC";
  const url = `https://api.nasa.gov/techtransfer/patent/?q=10&engine&api_key=${apiKey}`

  const getTechTransferData = async () => {
    const res = await axios.get(url);
    const info = await res.data;
    console.log(info);
    setData(info)
  }

  useEffect(()=> {
    getTechTransferData();
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1>Technologies</h1>
        <div className={styles.description}>
          <p>
          <Link href="/polychromatic">Polychromatic</Link>
          </p>
        </div>
        {
          data && data.results.map((tech, index) => {
            return (
              <div key={index}>
                {
                  tech && tech.map((t,ind) => {
                    if(ind === 10) {
                      return (
                        <div className={styles.box1}>
                          <Image src={t} alt={t} key={ind} width={120} height={120} className={styles.img}/>
                          <div className={styles.box}>
                            {show && <div className={styles.txt}>
                              <h3>{tech[2]}</h3>
                            <div className={styles.txt}>
                              <h3>{tech[2]}</h3>
                              <p>{tech[3]}</p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
            )
          })
        }
      </main>
    </>
  )
}
