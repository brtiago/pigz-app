import React from 'react'
import Image from 'next/image';
import FormContainer from './form-container';

import Burger from '/public/images/burguer_2.png';
import Pigzpigz from '/public/icons/Grupo 3535.svg';


const Hero = () => {
  return (
    <div className='bg-gradient-to-tl from-color9 to-color10 w-screen flex flex-col items-center pt-[140px] px-4 pb-[105px]'>
        <Image  className='absolute z-0 top-[108px] right-[-90px]' src={Burger} width={250} height={250} alt="Burger image"/>
        <h1 className='text-[40px] text-left font-bold text-color1 leading-[48px] relative mb-2'>Pigz: tudo que você precisa<br/> pra vender<br/> ainda mais!</h1>
        <p className='text-color1 text-base font-normal mt-5 mb-10 leading-6'>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>
        <FormContainer />
        <Image src={Pigzpigz} width={205.3} height={140} alt="PigzPiz icon" className='absolute z-0 top-[1058px]'/>
    </div>
  )
}

export default Hero