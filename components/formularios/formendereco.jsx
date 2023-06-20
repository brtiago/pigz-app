import React from 'react';
import ListaDeEstados from '@components/listas/lista-de-estados';
import ListaDeCidades from '@components/listas/lista-de-cidades';

const FormEndereco = () => {
  return (
    <div>
      <p className='text-color3 mb-6 mt-2 text-[13px]'></p>
      <div className='flex flex-col gap-y-5'>
        <label className='text-color3 text-xs font-medium flex flex-col' htmlFor="">CEP
          <input className='text-color placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[334px] h-12' type="text" placeholder='00000-000'/>
        </label>
        <div className='flex flex-row gap-x-[15px]'>
            <label className='text-color3 text-xs font-medium flex flex-col' htmlFor="">Estado
                <ListaDeEstados />
            </label>
            <label className='text-color3 text-xs font-medium flex flex-col' htmlFor="">Cidade
                <ListaDeCidades />
            </label>
        </div>
        <label className='text-color3 text-xs font-medium flex flex-col' htmlFor="">Endereço
          <input type="text" placeholder='Avenida Brasil' className='text-color placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[334px] h-12'/>
        </label>
        <div className='flex flex-row gap-x-[15px]'>
            <label className='text-color3 text-xs font-medium flex flex-col' htmlFor="">Número
                <input type="text" placeholder='123' className='text-color placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[114px]'/>
            </label>
            <label className='text-color3 text-xs font-medium flex flex-col' htmlFor="">Complemento
                <input type="text" placeholder='Sala 1' className='text-color placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[205px]'/>
            </label>
        </div>
      </div>
      
    </div>
  )
}

export default FormEndereco