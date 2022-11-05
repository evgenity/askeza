import { useState, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function Slider ({step, setFormStep}) { 
    return (
        <div className='flex flex-row my-10 justify-between'>
            {[...Array(4).keys()].map((i, v) => 
            <svg onClick={()=> {setFormStep(i)}} key={i} width={"23%"} height={"10"} className=''>
                <rect width="100%" height="3" className={step == i ? 'fill-blue' : 'fill-white'} />
            </svg>)}
        </div>)
}

export function InfoBlock({step, nextFormStep}) {
    const Page0 = <p className='my-auto text-lg font-extralight mb-5'>
        Ничто не мотивирует соблюдать правила как деньги. Нет, мы не заплатим тебе, но величайшая награда — это отказаться от вредной привычки.
    </p>
    const Page1 = <p className='my-auto text-lg font-extralight mb-5'>
        Исследования журнала New England Journal of Medicine показали, что более половины людей (52%), которые поспорили на деньги, бросили курить как минимум на 6 месяцев.
    </p>
    const Page2 = <div className='my-auto text-lg font-extralight mb-5'>
        Мы предлагаем тебе отложить сумму, которую не захочешь потерять (5000 рублей).
        <ol className="list-decimal list-inside">
            <li>Расскажи друзьям, что хочешь отказаться от вредной привычки, поделившись ссылкой.</li>
            <li>Если они заметят тебя за нарушением обещания, то пришлют фото в качестве доказательства.</li>
            <li>Проиграв битву над самим собой, отложенную сумму нужно будет потратить на благотворительность.</li>
        </ol>
    </div>
    const Page3 = <p className='my-auto text-lg font-extralight mb-5'>
    Не веришь, что эта «игра» поможет достигнуть заветной цели? А ты проверь и быстро втянешься в процесс. Потеряв однажды круглую сумму, вряд ли ты захочешь сделать это снова. К тому же, будет очень стыдно перед друзьями, когда они застукают тебя за нарушением.
</p>
    const textBase = {
        0: Page0,
        1: Page1,
        2: Page2,
        3: Page3,
    }
    return (<div className="flex flex-col h-full">
                {textBase[step]}
                {step < 3 ? 
                <Link onClick={nextFormStep} href='#' className='text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl px-16 py-4'>
                    Далее
                </Link> :
                <Link href='#' className='text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl px-16 py-4'>
                    Создать аскезу
                </Link>
                }
            </div>)
}

export default function About() {
    const [formStep, setFormStep] = useState(0);
    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  return (
    <div className='flex flex-col min-safe-h-screen mx-7 justify-between'>
        <Slider step={formStep} setFormStep={setFormStep}/>
        <div className='flex flex-col bg-white rounded-xl p-5 mb-20'>
            <InfoBlock step={formStep} nextFormStep={nextFormStep}/>
        </div>
    </div>
    
  )
}