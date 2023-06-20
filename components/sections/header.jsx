import React from "react";
import Image from "next/image";
import Logo from "/public/icons/Pigz Gestão - Logo.svg";

const Header = () => {
  return (
    <header className="bg-white h-28 pt-14 px-4 pb-4 flex fixed z-[100] w-full opacity-90 justify-center">
      <div className="flex max-w-[1366px] w-full justify-between">
        <Image src={Logo} width={63.99} height={32} alt="Pigz Logo" />
        <button
          type="button"
          name="btnParceiro"
          className="bg-gradient-to-r from-color9 to-color10 border-none w-40 h-8 rounded-full 
                  text-color1 font-medium shadow-lg shadow-color9/30"
        >
          Já sou parceiro
        </button>
      </div>
    </header>
  );
};

export default Header;
