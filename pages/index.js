import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Authentication from './components/Auth'
import Welcome from './components/Home'
import DarkModeToggle from './components/DarkMode'
import Link from 'next/link'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Toms-profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="Auth">
        <Authentication />
      </div>
      <main className='sideNav'>      
            <header className='Nav' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Welcome />       
            </header>
            <div className='links'>
              <Link href="/"><h1>Home</h1></Link> 
              <Link href="/Todo"><h1>Todo</h1></Link>
              <Link href="/Weather"><h1>Weather</h1></Link>
              <Link href="/components/Calculator"><h1>Calculator</h1></Link>
            </div>
            <DarkModeToggle/>
      </main>
    </>
  )
}

