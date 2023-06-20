import React from 'react'

const CardCinza = () => {
  return (
    <>
    <div className="w-[382px] h-[472px] bg-color2 rounded-[64px] p-10">
        <div>
          <h3 className=" text-color3 font-bold text-2xl leading-10 text-left">
            Pigz
          </h3>
          <p className="text-color6 text-base font-medium text-left leading-10">
            Tudo o que você precisa
          </p>
        </div>
        <ul className="font-normal text-sm text-left leading-6  tracking-[6] mt-5 mb-10">
          <li>Pigz Marketplace</li>
          <li>Página exclusiva</li>
          <li>Pigz Gestão Desktop e Mobile</li>
          <li>Gestão de entregadores</li>
          <li>Vias de impressão personalizáveis</li>
        </ul>

        <div className="w-40 h-14 rounded-[32px] bg-color1 flex justify-center items-center mb-10">
          <h3 className="text-color3 font-bold text-xl px-6 py-[14px]">
            R$199/mês
          </h3>
        </div>

        <button className="w-[302px] h-14 bg-gradient-to-r from-color9 to-color10 border-none rounded-[32px] font-medium text-color1 text-base shadow-lg shadow-color9/30">
          Vender no Pigz agora
        </button>
      </div>
    </>
  )
}

export default CardCinza
