import React from "react";

const cidades = [
    { nome: "Rio Branco", id: 1 },
    { nome: "Maceió", id: 2 },
    { nome: "Macapá", id: 3 },
    { nome: "Manaus", id: 4 },
    { nome: "Salvador", id: 5 },
    { nome: "Fortaleza", id: 6 },
    { nome: "Brasília", id: 7 },
    { nome: "Vitória", id: 8 },
    { nome: "Goiânia", id: 9 },
    { nome: "São Luís", id: 10 },
    { nome: "Cuiabá", id: 11 },
    { nome: "Campo Grande", id: 12 },
    { nome: "Belo Horizonte", id: 13 },
    { nome: "Belém", id: 14 },
    { nome: "João Pessoa", id: 15 },
    { nome: "Curitiba", id: 16 },
    { nome: "Recife", id: 17 },
    { nome: "Teresina", id: 18 },
    { nome: "Rio de Janeiro", id: 19 },
    { nome: "Natal", id: 20 },
    { nome: "Porto Alegre", id: 21 },
    { nome: "Porto Velho", id: 22 },
    { nome: "Boa Vista", id: 23 },
    { nome: "Florianópolis", id: 24 },
    { nome: "São Paulo", id: 25 },
    { nome: "Aracaju", id: 26 },
    { nome: "Palmas", id: 27 },
];

const ListaDeCidades = () => {
  const listItems = cidades.map((cidade) => (
    <option key={cidade.id}>{cidade.nome}</option>
  ));

  return (
    <select className='bg-white text-color15 placeholder-color15 border-solid border border-color8 rounded-2xl mt-[6px] pt-[14px] pb-[14px] pl-4 w-[205px] font-poppins'>        
      {listItems}
    </select>
  );
};

export default ListaDeCidades;
