import { useState, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function Slider ({step, setFormStep}) { 
    return (
        <div className='flex flex-row my-10 justify-between'>
            {[...Array(5).keys()].map((i, v) => 
            <svg onClick={()=> {setFormStep(i)}} key={i} width={"19%"} height={"10"} className=''>
                <rect width="100%" height="3" className={step >= i ? 'fill-blue' : 'fill-gray-100'} />
            </svg>)}
        </div>)
}

export function PageName ({ formData, setFormData }) {
   const handlechange = (e) => setFormData({
        ...formData,
        name: e.target.value,
      });
    return (
         <div className='flex flex-col my-auto text-lg mt-[30%] '>
            <label className="mb-2">Имя</label>
            <input className="py-2 border-b border-gray-500 text-xl" onChange={handlechange} value={formData.name}></input>
        </div>
    )
}

export function PageEmail ({ formData, setFormData }) {
    const handlechange = (e) => setFormData({
        ...formData,
        email: e.target.value,
      });
    return (
         <div className='flex flex-col my-auto text-lg mt-[30%] '>
            <label className="mb-2">Электронная почта</label>
            <input className="py-2 border-b border-gray-500 text-xl" onChange={handlechange} value={formData.email}></input>
        </div>
    )
}

export function PageAskeza ({ formData, setFormData }) {
    const askezaChoiceSmoke = () => {setFormData({
        ...formData,
        askeza: true,
      })}
    const askezaChoiceAlcohol = () => {setFormData({
        ...formData,
        askeza: false,
      })}
    return (
         <div className='flex flex-col my-auto text-lg mt-[30%] w-full justify-between'>
            <label className="mb-2">Хочу отказаться от</label>
            <div className="flex flex-row">
                <div onClick={askezaChoiceSmoke} className={"flex flex-col w-full rounded-xl m-1 py-16 " + (formData.askeza ? ' bg-violet-background text-white' : ' bg-gray-200 text-gray-900') }>
                    <div className="mx-auto mb-5 text-3xl">💨</div>
                    <div className="mx-auto">Курение</div>
                </div>
                <div  onClick={askezaChoiceAlcohol} className={"flex flex-col w-full rounded-xl m-1 py-16 " + (!formData.askeza ? 'bg-violet-background text-white' : ' bg-gray-200 text-gray-900') }>
                    <div className="mx-auto mb-5 text-3xl">🍷</div>
                    <div className="mx-auto">Алкоголь</div>
                </div>
            </div>
        </div>
    )
}

export function PageDays ({ formData, setFormData }) {
    const askezaChoice30 = () => {setFormData({
        ...formData,
        days: 30,
      })}
    const askezaChoice100 = () => {setFormData({
        ...formData,
        days: 100,
      })}
    return (
         <div className='flex flex-col my-auto text-lg mt-[30%] w-full justify-between'>
            <label className="mb-2">На сколько дней?</label>
            <div className="flex flex-row">
                <div onClick={askezaChoice30} className={"flex flex-col w-full rounded-xl m-1 py-16 " + (formData.days == 30 ? ' bg-violet-background text-white' : ' bg-gray-200 text-gray-900') }>
                    <div className="mx-auto mb-5 text-3xl">⚡️</div>
                    <div className="mx-auto">30 дней</div>
                </div>
                <div  onClick={askezaChoice100} className={"flex flex-col w-full rounded-xl m-1 py-16 " + (formData.days == 100 ? 'bg-violet-background text-white' : ' bg-gray-200 text-gray-900') }>
                    <div className="mx-auto mb-5 text-3xl">💥</div>
                    <div className="mx-auto">100 дней</div>
                </div>
            </div>
        </div>
    )
}

export function Commit ({ formData }) {
    return (
    <div className='flex flex-col my-auto text-lg mt-[30%] w-full justify-between'>
    <label className="mb-2 mx-auto">Аскеза</label>
    <div className="flex flex-col">
        <p className="mb-2">Я, {formData.name || 'анонимно'}, обещаю {formData.askeza ? "отказаться от курения" : "отказаться от алкоголя"} на срок {formData.days} дней.</p>
        <p className="mb-2">В случае нарушения обещания обязуюсь перевести 5000 рублей на благотворительность.</p>
        <p className="mb-2">Если же мне удастся продержаться данный период и не прибегнуть к вредной привычке, то это положит начало моего здорового образа жизни.</p>
    </div>
</div>)
}


export function InfoBlock({step, nextFormStep, prevFormStep, formData, setFormData}) {
    
    const textBase = {
        0: <PageName formData={formData} setFormData={setFormData}/>,
        1: <PageEmail formData={formData} setFormData={setFormData}/>,
        2: <PageAskeza formData={formData} setFormData={setFormData}/>,
        3: <PageDays formData={formData} setFormData={setFormData}/>,
        4: <Commit formData={formData}/>
    }
    return (<div className="flex flex-col h-full">
                {textBase[step]}
                <div className="flex flex-row w-full">
                    {step > 0 ? <Link href="" onClick={prevFormStep} className='text-center font-extralight text-xl text-gray-900 bg-gray-200 rounded-xl px-12 py-3'>
                            Назад
                    </Link> : <span></span>}
                    {step < 4 ? <Link onClick={nextFormStep}
                            href='' 
                            className={'w-full text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl py-3 mx-2' }>
                        Далее
                    </Link> : <></>}
                    {step == 4 ? <Link
                        href='' 
                        className={'w-full text-center font-extralight text-xl text-gray-100 bg-violet-background rounded-xl py-3 mx-2' }>
                    Подписать
                    </Link> : <></>}
                </div>
            </div>)
}

export default function Create() {
    const [formStep, setFormStep] = useState(0);
    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        askeza: true,
        days: 30,
      });

  return (
    <div className='bg-white flex flex-col min-safe-h-screen h-full mx-7'>
        <Slider step={formStep} setFormStep={setFormStep}/>
        <div className='flex flex-col rounded-xl h-full mb-20'>
            <InfoBlock step={formStep} nextFormStep={nextFormStep} prevFormStep={prevFormStep} formData={formData} setFormData={setFormData}/>
        </div>
    </div>
    
  )
}