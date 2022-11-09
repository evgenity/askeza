import { useState, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function Slider ({step, setFormStep, stepsTotal}) { 
    return (
        <div className='flex flex-row my-10 justify-between'>
            {[...Array(stepsTotal).keys()].map((i, v) => 
            <svg onClick={()=> {setFormStep(i)}} key={i} width={(100 / stepsTotal ) - 2 + "%"} height={"10"} className=''>
                <rect width="100%" height="3" className={step == i ? 'fill-blue' : 'fill-white'} />
            </svg>)}
        </div>)
}

const ABOUT_TEXT = [
    {text: `Исследования журнала New England Journal of Medicine показали, 
    что 52% людей бросили курить как минимум на 6 месяцев после того, как поспорили на деньги.
    Мы сделали вывод, что ничто не мотивирует соблюдать правила как деньги. 
    Мы не заплатим тебе, но величайшая награда — это отказаться от вредной привычки.`,
    icon: '💵'},
    {text: `Сформируй аскезу, дав обещание отказаться от вредной привычки на срок 30 или 100 дней.`,
    icon: '1'},
    {text: `Отложи сумму денег, которую не хочешь потерять.
     Мы предлагаем начать с 5 000 рублей, но можно и выбрать более комфортную для тебя сумму.`,
     icon: '2'},
    {text: `Расскажи друзьям, что хочешь отказаться от вредной привычки, поделившись ссылкой. `,
    icon: '3'},
    {text: `Если они заметят тебя за нарушением обещания, то пришлют фото в качестве доказательства. 
    Также, если ты сам нарушил аскезу, то можешь честно заявить об этом.`,
    icon: '4'},
    {text: `Проиграв битву над самим собой, отложенную сумму нужно будет потратить на благотворительность.`, 
    icon: '5'},
    {text: `Не веришь, что эта «игра» поможет достигнуть заветной цели? А ты проверь и быстро втянешься в процесс. 
    Потеряв однажды круглую сумму, вряд ли ты захочешь сделать это снова. 
    К тому же, будет очень стыдно перед друзьями, когда они застукают тебя за нарушением.`,
    icon: '👾'},
]

export function InfoBlock({step, nextFormStep}) {
    
    const textBase = ABOUT_TEXT.map((v,i) => <>
        <p key={i} className="mx-auto text-6xl my-6 text-blue">{v.icon}</p>
        <p className='text-lg font-extralight'>
            {v.text}
        </p>
    </>)

    return (<div className="flex flex-col h-full justify-between">
                { textBase[step] }
                { step < textBase.length - 1 ? 
                <Link onClick={nextFormStep} href='#' className='text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl px-16 py-4 mt-4'>
                    Далее
                </Link> :
                <>
                    <Link href='/create' className='text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl px-16 py-4 mt-4'>
                        Создать аскезу
                    </Link>
                    <Link href='/' className="font-extralight block lowercase mx-auto text-xl text-blue">
                        вернуться на главную
                    </Link>
                </>
                }
            </div>)
}

export default function About() {
    const [formStep, setFormStep] = useState(0);
    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  return (
    <main  className='bg-black-background min-safe-h-screen h-px'>
        <div className='flex flex-col mx-7 h-full justify-between'>
            <Slider stepsTotal={ABOUT_TEXT.length} step={formStep} setFormStep={setFormStep}/>
            <div className='flex flex-col bg-white rounded-xl h-4/6 p-5 mb-20'>
                <InfoBlock step={formStep} nextFormStep={nextFormStep}/>
            </div>
        </div>
    </main>
    
  )
}