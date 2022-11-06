import { useState, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function CircleProgress () {
      const roundRadius = 45
      const roundPercent = 21/30 * 100
      const roundCircum = 2 * roundRadius * Math.PI
      const roundDraw = roundPercent * roundCircum / 100
    return (
            <div className="flex flex-col">
                <svg className="mx-auto" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="100" cy="100" r={roundRadius} style={
                    {   
                        'transform-origin': '50% 100%',
                        transform: 'rotate(-90deg)',
                        fill: 'none',
                        stroke: 'lightgrey',
                        'stroke-width': '10',
                        'stroke-linecap': 'round',
                    }
                }/>
                <circle cx="100" cy="100" r={roundRadius} style={
                    {   
                        transition: 'all 1s ease-in-out',
                        'transform-origin': '50% 100%',
                        transform: 'rotate(-90deg)',
                        fill: 'none',
                        stroke: '#4F5EE3',
                        'stroke-width': '10',
                        'stroke-linecap': 'round',
                        'stroke-dasharray': roundDraw  + ' 999',
                    }
                }/>  
                </svg>
            </div>)
}

// export function ProfileBlock({step, nextFormStep}) {
//     const Page0 = <p className='my-auto text-lg font-extralight'>
//         Ничто не мотивирует соблюдать правила как деньги. Нет, мы не заплатим тебе, но величайшая награда — это отказаться от вредной привычки.
//     </p>
//     return (<div className="flex flex-col h-full">
//                 { Page0}
//                 { step < 3 ? 
//                 <Link onClick={nextFormStep} href='#' className='text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl px-16 py-4 mt-4'>
//                     Далее
//                 </Link> :
//                 <Link href='/create' className='text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl px-16 py-4 mt-4'>
//                     Создать аскезу
//                 </Link>
//                 }
//             </div>)
// }

export default function About() {
    const [formStep, setFormStep] = useState(0);
    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  return (
    <main  className='bg-black-background min-safe-h-screen overflow-auto'>
        <div className="mt-10 mx-7">
            <Image className="" src="/assets/img/logo_text-grad-black.svg" alt="Vercel Logo" width={100} height={20} priority={true}/>
        </div>
        <div className="mt-16 mx-7">
            <h2 className="text-white text-xl mb-3">Твоя ссылка для друзей:</h2>
            <a className="text-white text-xl font-extralight underline">askeza.com/AT3TY3</a>
        </div>
        <div className='flex flex-col mx-7 mt-5 h-full justify-between'>
            <div className='flex flex-col bg-white rounded-xl h-full p-5 mb-20'>
                <h1 className="text-3xl mx-auto">Евгений</h1>
                <p className="text-xl mx-auto mt-5 font-extralight">отказываюсь от</p>
                <div className="text-white mx-auto bg-black-background rounded-3xl px-8 py-2 mt-4">
                    <p>🍷 Алкоголь</p>
                </div>
                <p className="text mx-auto mt-3 mb-3">на 30 дней</p>

                <div>
                    <div className="relative">
                        <CircleProgress/>
                        <div className="flex flex-col text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <p className="ms-auto text-sm">осталось</p>
                            <p className="mx-auto">21</p>
                        </div>
                    </div>
                </div>

                <Link href='/create' className='text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl px-8 py-4 mt-8'>
                    Сообщить о нарушении
                </Link>
            </div>
        </div>
    </main>
    
  )
}