import Image from 'next/image'
import styles from './page.module.css'

import { Button } from '@/components/Button/Button'
import { Logo } from '@/components/Logo/Logo'

export default function Home() {
  return (
    <main className={styles.main}>
      <Button variant='transparent' text='text' type='button' />
      <Logo/>
      
    </main>
  )
}
