import React from "react";
import CardCinza from "./card-cinza";

const CardContainerCinza = () => {
  return (
    <>
      <CardCinza />

      <div className="w-[382px] h-[472px] bg-color2 rounded-[64px] p-10 mt-5">
        <h3 className=" text-color3 font-bold text-2xl leading-10 text-left">
          Pagamento On-line
        </h3>
        <p className="text-color6 text-base font-medium text-left leading-10">
          Segurança e agilidade
        </p>
        <ul className="font-normal text-sm text-left leading-6  tracking-[6] mt-5 mb-10">
          <li>Aceite Pix e Cartão de Crédito</li>
          <li>Antecipação Pix automática </li>
          <li>Não dependa de maquininha de cartão</li>
          <li>Segurança para receber pedidos</li>
          <li>Agilidade para entregar</li>
        </ul>
        <div className="rounded-[32px] bg-color1 flex justify-center items-center mb-10">
          <h3 className="text-color3 font-bold text-xl px-6 py-[14px]">
            2,99% por transação
          </h3>
        </div>

        <button className="w-[302px] h-14 bg-gradient-to-r from-color9 to-color10 border-none rounded-[32px] font-medium text-color1 text-base shadow-lg shadow-color9/30">
          Saiba mais
        </button>
      </div>
    </>
  );
};

export default CardContainerCinza;
