"use client";
import React, { useState } from "react";
import FormLoja from "@components/formularios/formloja";
import FormEndereco from "@components/formularios/formendereco";
import FormPadrao from "@components/formularios/formpadrao";


const FormQueroVender = () => {
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Quero vender no Pigz",
    "Onde fica a sua loja?",
    "Me conta um pouco sobre a sua loja",
  ];

  const ButtonTitles = ["Continuar", "Próximo", "Concluir"];

  function nextPage() {
    setPage(page + 1);
  }

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <FormPadrao />;
        break;
      case 1:
        return <FormEndereco />;
        break;
      default:
        return <FormLoja />;
        break;
    }
  };

  return (
    <div className="w-[382px] min-h-[547px] bg-white rounded-3xl pt-8 px-6 pb-6">
      <h3 className='text-[28px] font-semibold text-color3'>{FormTitles[page]}</h3>
      {PageDisplay()}
      <button
        onClick={nextPage}
        disabled={page == 2}
        className="bg-color9 rounded-2xl from-neutral-50 text-base text-white px-32 pt-3 pb-3 absolute bottom-6 w-[334px] h-12"
      >
        {ButtonTitles[page]}
      </button>
    </div>
  );
};

export default FormQueroVender;
