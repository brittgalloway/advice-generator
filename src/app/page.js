'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  let [id, setId] = useState('0');
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
    <>
      <header>
        Made by <em>Brittney Galloway</em> - <a href='https://github.com/brittgalloway/advice-generator'>Github</a>
      </header>
      <main >
        <div className='advice-block'>
          <h1>Advice #{id}</h1>
          <div className='advice'>
            “{advice}”
          </div>
          <div className='divider'></div>
          <button role='button' type='button' title='Click me to get more advice' onClick={handleClick} className='dice'>
            <Image
              src='/icon-dice.svg'
              alt='Dice icon'
              width={25}
              height={25}
            /> 
          </button >
        </div>
      </main>
    </>
  )
}
