import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Sesi from "../assets/Sesi.png";
import Link from "next/link";
import Musculação from "../assets/Musculação.png";
import Funcional from "../assets/Funcional.png";
import HIT from "../assets/Hiit.png";
import Hidroginastica from "../assets/Hidroginastica.png";
import Pilates from "../assets/Pilates.png";
import RetanguloCom from "../assets/WppCom.png";
import RetanguloSem from "../assets/WppSem.png";
import Yoga from "../assets/Yoga.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import Linkedin from "../assets/Linkedin.png";
import Youtube from "../assets/Youtube.png";

// NICOLE ESTA FAZENDO ESSA PÁGINA

export default function Home() {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBg);
  }

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Academia Sesi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../sesiIcon.png" />
      </Head>

      <main className=" w-screen">
        <nav
          className={
            navbar
              ? "flex bg-white fixed z-10 w-full acendeapaga"
              : "acendeapaga w-full flex bg-transparent fixed"
          }
        >
          <div className="mt-5 mb-5 ml-11">
            <Link href="/" locale="home">
              <Image width="112" height="35" src={Sesi} alt="Logo do Senai" />
            </Link>
          </div>
          <ul className="list-none text-lg flex ml-28">
            <li className="mt-6 ml-7 ">
              <Link href="/" locale="home">
                INICIO
              </Link>
            </li>

            <li className="mt-6 ml-7 ">
              <Link
                href="https://sesisc.org.br/sobre-sesi"
                locale="home"
                target="_blank"
              >
                CONHEÇA MAIS
              </Link>
            </li>

            <li className="mt-6 ml-7 ">
              <Link
                href="https://transparencia.sesisc.org.br/fale-conosco?entidade=sesi"
                locale="home"
                target="_blank"
              >
                ENTRE EM CONTATO
              </Link>
            </li>
          </ul>
        </nav>

        <Image
          src={RetanguloCom}
          alt="Imagem azul"
          className="wppCom absolute pointer-events-none ml-auto right-0"
        />

        <Image
          src={RetanguloSem}
          alt="Imagem"
          className="wppSem absolute pointer-events-none ml-auto right-0"
        />

        <div className="z-10 center box md:pt-20 pt-0 md:ml-16 ml-6">
          <div className="flex md:pt-56 pt-32 mr-[700px]">
            <span className=" md:text-6xl text-5xl font-normal">
              CONSTRUA A SAÚDE
              <span className="pl-[2%] colorfullWord md:text-6xl text-5xl font-bold italic align">
                PERFEITA
              </span>
            </span>
          </div>
          <p className="venha pr-10 text-start font-normal text-stone-400 md:text-xl text-base flex md:mr-[900px]">
            Venha conheçar uma das melhores academia da região de São José
          </p>
          <div className="flex mt-12 ">
            <Link
              href="/cadastro"
              locale="home"
              className="b1 bg-sky-600 text-white md:text-base text-sm py-4 px-5 rounded-3xl"
            >
              CRIE UMA CONTA
            </Link>
            <Link
              href="/login"
              locale="home"
              className=" ml-5 border-solid border-2 border-sky-600 md:text-base text-sm text-sky-600 py-3 px-9 rounded-3xl"
            >
              FAÇA LOGIN
            </Link>
          </div>
        </div>

        <div className="conheca pl-16 pt-56 mt-20 pb-2 text-3xl text-center">
          <span className="font-normal">
            Conheça nossas
            <span className="colorfullWord pl-2 font-bold align">
              Modalidades
            </span>
          </span>
        </div>

        <div className=" py-20 gap-14 gap-y-12 list-none flex justify-center flex-wrap">
          <div className=" bg-white w-[343px] h-[440px] rounded-3xl drop-shadow-2xl">
            <div className="relative flex justify-center items-center">
              <Image
                className="rounded-t-3xl"
                src={Musculação}
                alt="Homem masculo aqui"
              />
              <h1 className="absolute text-white font-normal">
                Musculação e condicionamento físico
              </h1>
            </div>
            <p className="text-center px-4 my-3">
              Treinos personalizados de acordo com os objetivos de cada
              praticante. Utilizando o recurso de aparelhos com carga, permite
              que o aluno exercite tanto grandes grupos musculares quanto de
              forma isolada, criando uma grande variabilidade de exercícios.
            </p>
          </div>

          <div className=" bg-white w-[343px] h-[440px] rounded-3xl drop-shadow-2xl">
            <div className="relative flex justify-center items-center">
              <Image
                className="rounded-t-3xl"
                src={Pilates}
                alt="Mulher fazendo pilates"
              />
              <h1 className="absolute  text-white font-normal">Pilates Solo</h1>
            </div>
            <p className="text-center px-4 my-3">
              Para quem gosta de aulas mais tranquilas, mas não menos exigentes,
              o Pilates Solo alia exercícios posturais e respiratórios com
              atividades de força muscular. Ideal para trabalhar a consciência
              corporal, a respiração e o fortalecimento da musculatura postural.
            </p>
          </div>

          <div className=" bg-white w-[343px] h-[440px] rounded-3xl drop-shadow-2xl">
            <div className="relative flex justify-center items-center">
              <Image
                className="rounded-t-3xl"
                src={Yoga}
                alt="Pessoa fazendo yoga"
              />
              <h1 className="absolute text-white font-normal">Yoga</h1>
            </div>
            <p className="text-center px-4 my-3">
              Para aquele momento em que a atividade física alia alongamento,
              meditação e fortalecimento, o Yoga traz em sua técnica milenar
              posições e movimentos voltados ao corpo e à mente.
            </p>
          </div>

          <div className=" bg-white w-[343px] h-[440px] rounded-3xl drop-shadow-2xl">
            <div className="relative flex justify-center items-center">
              <Image
                className="rounded-t-3xl"
                src={Funcional}
                alt="Pessoa fazendo funcional"
              />
              <h1 className="absolute text-white font-normal">
                Treinamento funcional
              </h1>
            </div>
            <p className="text-center px-4 my-3">
              Atividades que usam o peso do corpo e alguns implementos de peso
              livre (kettlebell, anilhas, barras, faixas elásticas) tornam as
              aulas dinâmicas e divertidas.
            </p>
          </div>

          <div className=" bg-white w-[343px] h-[440px] rounded-3xl drop-shadow-2xl">
            <div className="relative flex justify-center items-center">
              <Image className="rounded-t-3xl" src={HIT} alt="Imagem de hit" />
              <h1 className="absolute text-white font-normal">HIT</h1>
            </div>
            <p className="text-center px-4 my-3">
              Treino intervalado de alta intensidade em que os exercícios são
              repetidos até a exaustão, seguidos de breve momento de descanso,
              utilizando os equipamentos da academia ou até mesmo pesos livres
              ou o peso do corpo.
            </p>
          </div>

          <div className=" bg-white w-[343px] h-[440px] rounded-3xl drop-shadow-2xl">
            <div className="relative flex justify-center items-center">
              <Image
                className="rounded-t-3xl"
                src={Hidroginastica}
                alt="Imagem de hidroginastica"
              />
              <h1 className="absolute text-white font-normal">
                Hidroginástica e natação
              </h1>
            </div>
            <p className="text-center px-4 my-3">
              Atividades aquáticas que atuam no condicionamento físico com baixo
              impacto. Ideal para quem tem restrição de movimentos.
            </p>
          </div>
        </div>
      </main>

      <footer className="py-10 justify-center items-center bg-[#006CB5] mt-auto">
        <div className="flex">
          <Image src={Sesi} width="90" height="10" className="ml-8" alt="logo senai" />
          <div className="flex px-auto items-center space-x-4 ml-auto mr-10">
            <Link
              href="https://www.facebook.com/groups/285193339606782/"
              target="blank"
              locale="home"
            >
              <Image
                width="40"
                height="40"
                className=""
                src={Facebook}
                alt="Logo do Faceook"
              />
            </Link>

            <Link
              href="https://twitter.com/SESIsc"
              target="blank"
              locale="home"
            >
              <Image
                width="40"
                height="40"
                className=""
                src={Twitter}
                alt="Logo do Twitter"
              />
            </Link>

            <Link
              href="https://www.instagram.com/sesi.sc/"
              target="blank"
              locale="home"
            >
              <Image
                width="40"
                height="40"
                className=""
                src={Instagram}
                alt="Logo do Instagram"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/company/sesisc/"
              target="blank"
              locale="home"
            >
              <Image
                width="40"
                height="40"
                className=""
                src={Linkedin}
                alt="Logo do Linkedin"
              />
            </Link>

            <Link
              href="https://www.youtube.com/@sesi"
              target="blank"
              locale="home"
            >
              <Image
                width="40"
                height="40"
                className=""
                src={Youtube}
                alt="Logo do Youtube}"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
