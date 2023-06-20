import React from 'react';
import Image from 'next/image';
import StoreFront from '/public/icons/storefront_black_24dp.svg';
import SmartPhone from '/public/icons/smartphone_black_24dp.svg';
import PigzGestao from '/public/icons/Grupo 3545.svg';
import Printer from '/public/icons/print_black_24dp.svg';



const Subhero = () => {
  return (
    <div className="flex flex-col items-center w-81 mt-24 mx-16 mb-9 justify-center">
      <h2 className="font-bold text-center text-3xl text-color3">
        Você tem um novo Pigzdido!
      </h2>
      <div className='flex flex-col gap-y-5 mt-10 mb-20'>
        <div className="flex flex-col justify-center items-center w-65 h-60 bg-color2 rounded-3xl hover:border-2 border-color15 ease-out duration-300">
          <Image
            src={StoreFront}
            width={72}
            height={72}
            alt="Marketplace icon"
          />
          <h3 className="font-semibold text-xl text-color3">Marketplace</h3>
          <span className="font-normal text-base text-color3">
            Pra sua loja vender mais
          </span>
        </div>

        <div className="flex flex-col justify-center items-center w-65 h-60 bg-color2 rounded-3xl hover:border-2 border-color15 ease-out duration-300">
          <Image
            src={SmartPhone}
            width={72}
            height={72}
            alt="Smartphone icon"
          />
          <h3 className="font-semibold text-xl text-color3">
            É fácil e rápido
          </h3>
          <span className="font-normal text-base text-color3">
            Fazer um pedido no Pigz
          </span>
        </div>

        <div className="flex flex-col justify-center items-center w-65 h-60 bg-color2 rounded-3xl hover:border-2 border-color15 ease-out duration-300">
          <Image src={PigzGestao} width={72} height={72} alt="Pigz icon" />
          <h3 className="font-semibold text-xl text-color3">Pigz Gestão</h3>
          <span className="font-normal text-base text-color3">
            Você no controle, sempre
          </span>
        </div>

        <div className="flex flex-col justify-center items-center w-65 h-60 bg-color2 rounded-3xl hover:border-2 border-color15 ease-out duration-300">
          <Image src={Printer} width={72} height={72} alt="Printer icon" />
          <h3 className="font-semibold text-xl text-color3">
            Vias de impressão
          </h3>
          <span className="font-normal text-base text-color3">
            Personalizáveis
          </span>
        </div>
      </div>

      <h2 className="font-bold text-3xl text-center text-color3 mb-5">
        Tudo que você precisa por apenas R$199/mês
      </h2>
      <p className="text-center text-base text-color3">
        Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por
        cada venda, sem letrinhas miúdas.
      </p>
    </div>
  );
}

export default Subhero