import React from "react";
import TipoDeLoja from "@components/listas/tipo-de-loja";

const FormLoja = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-5 mt-[30px]">
        <label
          className="text-color3 text-xs font-medium flex flex-col"
          htmlFor=""
        >
          Nome da loja
          <input
            className="text-color placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[334px] h-12"
            type="text"
            placeholder="Restaurante Todo Mundo Gosta"
          />
        </label>
        <label
          className="text-color3 text-xs font-medium flex flex-col"
          htmlFor=""
        >
          CNPJ da loja
          <input
            className="text-color placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[334px] h-12"
            type="text"
            placeholder="12.345.678/0001-99"
          />
        </label>
        <label
          className="text-color3 text-xs font-medium flex flex-col"
          htmlFor=""
        >
          Tipo de loja
          <TipoDeLoja />
        </label>
      </div>
    </div>
  );
};

export default FormLoja;
