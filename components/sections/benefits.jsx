import React from "react";
import CardContainer from "./card-container";
import Image from "next/image";
import Whatsapp from "/public/icons/Icon awesome-whatsapp.svg";
import CardContainerCinza from "./card-container-cinza";

const Benefits = () => {
  return (
    <>
      <CardContainer />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-[32px] mx-10 text-center text-color3 leading-10">
          E mais: suporte que realmente funciona!
        </h3>
        <p className="text-center text-base text-color3 mx-16 mt-4 leading-6 mb-10">
          Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
          disponível pra ajudar você e seus clientes.
        </p>
      </div>
      
      <CardContainerCinza />

      <div className="flex flex-row justify-around w-[366px] h-14 my-10">
        <p className="text-base text-color3 text-left">
          Fale com a Pigz
        </p>
        <div className="text-base text-color3 text-left flex flex-row h-[23px]">
          <Image className="text-color-3" src={Whatsapp} width={18} height={18} alt="Whatsapp Logo" />
          <p className="text-[13px] ml-[7px]">95</p> <p className="ml-[3px]">3224-2603</p>
        </div>
      </div>
    </>
  );
};

export default Benefits;
