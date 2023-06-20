import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/icons/pigz-logotipo-colorido.svg";
import SeloAppStore from "/public/icons/selo-app-store.svg";
import SeloGooglePlay from "/public/icons/selo-google-play.svg";
import IconeFaleConosco from "/public/icons/icone-fale-conosco.svg";
import IconeLinkedin from "/public/icons/linkedin-with-circle.svg";
import IconeInstagram from "/public/icons/instagram-with-circle.svg";
import IconeFacebook from "/public/icons/facebook-with-circle.svg";
import IconeYoutube from "/public/icons/youtube-with-circle.svg";
import LogoOrangeHorizontal from "/public/icons/logo-orange-horizontal-branco.png";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-color2 pl-4 pr-4 pt-16 pb-7 border-b-4 border-color12">
      <div className="flex flex-col justify-between gap-y-16 container mx-auto">
        <div className="flex flex-col md:flex-row gap-y-12 justify-between container mx-auto">
          <div className="flex flex-col gap-y-6 justify-evenly">
            <div className="flex flex-col gap-y-2">
              <Image src={Logo} width={80} height={40} alt="Pigz Logo cinza" />
              <span className="text-color5 text-xs">
                Tudo que você precisa.
              </span>
            </div>

            <div className="flex flex-col gap-y-4">
              <h2 className="text-color5 font-semibold">Baixe o APP</h2>
              <div className="flex gap-x-2">
                <Link
                  href="https://apps.apple.com/br/app/pigz/id1526557835"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={SeloAppStore}
                    width={89.75}
                    height={30}
                    alt="Selo App Store"
                  />
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=app.pigz.mart&hl=pt_BR&gl=US"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={SeloGooglePlay}
                    width={101.25}
                    height={30}
                    alt="Selo Google Play"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h2 className="text-color5 font-semibold">Pigz</h2>
            <ul className="flex flex-col gap-y-6">
              <li>
                <Link href="/" target="_blank" className="text-color5">
                  Sobre o Pigz
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" className="text-color5">
                  Portal do Parceiro
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" className="text-color5">
                  Quero ser um Pigz Partner
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-y-6">
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-4">
                <Image
                  src={IconeFaleConosco}
                  width={24}
                  height={24}
                  alt="Ícone Fale Conosco"
                />
                <h2 className="text-color5 font-semibold">Fale conosco</h2>
              </div>
              <Link
                className="text-color5"
                target="_blank"
                href="mailto:falecom@pigz.com.br"
              >
                falecom@pigz.com.br
              </Link>

              <Link
                href="https://wa.me/+559531983939"
                target="_blank"
                className="text-color5"
              >
                (95) 3224-2603
              </Link>
            </div>

            <div className="flex flex-col gap-y-4">
              <h2 className="text-color5 font-semibold">Pigz nas redes</h2>
              <ul className="flex gap-x-4">
                <li>
                  <Link
                    href="https://br.linkedin.com/company/pigz"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={IconeLinkedin}
                      width={25}
                      height={25}
                      alt="Ícone Linkedin"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/pigzapp/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={IconeInstagram}
                      width={25}
                      height={25}
                      alt="Ícone Instagram"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/pigzapp"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={IconeFacebook}
                      width={25}
                      height={25}
                      alt="Ícone Facebook"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/" rel="noreferrer" target="_blank">
                    <Image
                      src={IconeYoutube}
                      width={25}
                      height={25}
                      alt="Ícone Youtube"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:flex md:justify-between border-t border-color14 items-center container mx-auto">
          <ul className="flex gap-x-7 pt-4">
            <li className="text-color5 text-xs">
              <Link href="/">Nossos termos</Link>
            </li>
            <li className="text-color5 text-xs">
              <Link href="/">Privacidade</Link>
            </li>
            <li className="text-color5 text-xs">
              <Link href="/">Ajuda</Link>
            </li>
          </ul>

          <div className="flex h-8 items-center sd:gap-x-6 mt-4">
            <span className="text-color5 text-xxs md:ml-8">
              © Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs
              Tecnologia LTDA. CNPJ 34.895.008/0001-85
            </span>
            <Image
              className="h-5"
              src={LogoOrangeHorizontal}
              width={70}
              height={20}
              alt="Logo Orange horizontal branco"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
