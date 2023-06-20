import React from "react";

const estados = [
  { sigla: "AC", id: 1 },
  { sigla: "AL", id: 2 },
  { sigla: "AP", id: 3 },
  { sigla: "AM", id: 4 },
  { sigla: "BA", id: 5 },
  { sigla: "CE", id: 6 },
  { sigla: "DF", id: 7 },
  { sigla: "ES", id: 8 },
  { sigla: "GO", id: 9 },
  { sigla: "MA", id: 10 },
  { sigla: "MT", id: 11 },
  { sigla: "MS", id: 12 },
  { sigla: "MG", id: 13 },
  { sigla: "PA", id: 14 },
  { sigla: "PB", id: 15 },
  { sigla: "PR", id: 16 },
  { sigla: "PE", id: 17 },
  { sigla: "PI", id: 18 },
  { sigla: "RJ", id: 19 },
  { sigla: "RN", id: 20 },
  { sigla: "RS", id: 21 },
  { sigla: "RO", id: 22 },
  { sigla: "RR", id: 23 },
  { sigla: "SC", id: 24 },
  { sigla: "SP", id: 25 },
  { sigla: "SE", id: 26 },
  { sigla: "TO", id: 27 },
];

const ListaDeEstados = () => {
  const listItems = estados.map((estado) => (
    <option key={estado.id}>{estado.sigla}</option>
  ));

  return (
    <select className="bg-white text-color15 placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[114px] font-poppins">
      {listItems}
    </select>
  );
};

export default ListaDeEstados;
