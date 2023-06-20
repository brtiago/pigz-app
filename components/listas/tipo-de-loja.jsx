import React from "react";

const lojas = [
  { tipo: "Selecione", id: 0 },
  { tipo: "Restaurantes", id: 1 },
  { tipo: "Açaís e Sorvetes", id: 2 },
  { tipo: "Pizzas", id: 3 },
  { tipo: "Doces e Bolos", id: 4 },
  { tipo: "Cafeterias", id: 5 },
  { tipo: "Burgers e Lanches", id: 6 },
  { tipo: "Orientais", id: 7 },
  { tipo: "Mercados e Farmácias", id: 8 },
  { tipo: "Bares e Eventos", id: 9 },
];

const TipoDeLoja = () => {
  const listItems = lojas.map((loja) => (
    <option key={loja.id}>{loja.tipo}</option>
  ));
  return (
    <select className="bg-white text-color15 placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[334px] font-poppins">
      {listItems}
    </select>
  );
};

export default TipoDeLoja;
