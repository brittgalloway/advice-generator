'use client'
import { useState } from 'react';
import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
  let [id, setId] = useState('1');
  let [advice, setAdvice] = useState('Click the dice');

  function handleClick(){
    
    const url = 'https://api.adviceslip.com/advice';
    fetch(url).then(response => { 
            return response.json() ;
        }).then(data => {
            const adviceObj = data.slip;
            
            setId(adviceObj.id);
            setAdvice(adviceObj.advice);
        })
 
  }
  return (
    <main >
      <div className='advice-block'>
        <h1>Advice #{id}</h1>
        <div className='advice'>
          "{advice}"
        </div>
        <div className='divider' >
          <Image
            src='/pattern-divider-mobile.svg'
            width={100}
            height={10}
          />
        </div>
        <button role='button' onClick={handleClick} className='dice'>
          <Image
            src='/icon-dice.svg'
            alt='Dice icon'
            width={30}
            height={30}
          />
        </button >
      </div>
    </main>
  )
}
