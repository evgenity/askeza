import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const Box = () => ( 
    <svg width={"19%"} height={"10"} className=''>
        <rect width="100%" height="3" className='fill-blue' />
    </svg>
)

export default function About() {
    
  return (
    <div className='flex flex-col h-screen mx-7 justify-between'>
        <div className='flex flex-row my-10 justify-between'>
            {[...Array(5).keys()].map(
                (i, v) => <Box key={i}></Box>)
                }
        </div>
        <div className='flex flex-col bg-white rounded-xl p-5 h-2/3 mb-20'>
            <p className='my-auto text-lg font-extralight'>
                Ничто не мотивирует соблюдать правила как деньги. Нет, мы не заплатим тебе, но величайшая награда — это отказаться от вредной привычки.
            </p>
        <Link href="/about" className='text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl px-16 py-4'>
            Далее
          </Link>
        </div>
    </div>
    
  )
}