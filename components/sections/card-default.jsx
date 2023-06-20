import React from 'react';
import Image from 'next/image';


const CardDefault = ({ text, imagem, caption }) => {
  return (
    <div className='flex flex-col items-center w-[382px] h-[400px] bg-gradient-to-bl from-color9 to-color10 rounded-[64px]'>
        <p className='text-center font-light text-[15px] leading-[21px] w-[302px] h-[105px] text-white mt-10 mx-10'>{text}</p>
        <Image className='mt-[55px]' src={imagem} width={382} height={200} alt={caption} />
    </div>
  )
}

export default CardDefault