import React from 'react'
import Image from 'next/image'
import Brazil from '/public/icons/brazil.svg'

const FormPadrao = () => {
  return (
    <div>
      <p className='text-color3 mb-6 mt-2 text-[13px]'>Dê o primeiro passo para aumentar suas vendas</p>
      <div className='flex flex-col gap-y-5'>
        <label className='text-color3 text-xs font-medium flex flex-col' htmlFor="">Nome
          <input className='text-color placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[334px] h-12' type="text" placeholder='José da Silva'/>
        </label>
        <label className='text-color3 text-xs font-medium flex flex-col' htmlFor="">E-mail
          <input type="text" placeholder='josedasilva@email.com' className='text-color placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[334px] h-12'/>
        </label>
        <div className='text-color3 text-xs font-medium flex flex-col' htmlFor="">Telefone

          <div className='flex flex-row border-solid border border-color8 rounded-2xl w-[334px] gap-x-4 mt-[6px]'>
            <div className='bg-color16 w-[100px] h-12 rounded-2xl flex items-center justify-center gap-x-2'>
              <Image src={Brazil} width={24} height={24} alt="Bandeira Brasil"/>
              <span>+55</span>
            </div>
            <input type="text" placeholder='(85) 98899-5432' className='text-color placeholder-color15 w-52 rounded-2xl'/>
          </div>
        </div>
      </div>
      <p className='text-left font-normal text-color6 text-[13px] mt-5 mb-10'>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>
    </div>
  )
}

export default FormPadrao