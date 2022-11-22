import Head from "next/head";
import Image from "next/image";
import Sesi from "../public/Sesi.png";
import Link from "next/link";
import Masculo from "../public/masculo.png";

// NICOLE ESTA FAZENDO ESSA PÁGINA

export default function Home() {
  return (
    <div>
      <Head>
        <title>Academia Sesi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wpp">
        <nav className="flex bg-transparent fixed">
          <Image
            width="112"
            height="35"
            className=" mt-9 ml-11"
            src={Sesi}
            alt="Logo do Senai"
          />
          <lu className="list-none text-lg flex ml-28">
            <li className="mt-10 ml-7 ">
              <Link href="/" locale="home">
                INICIO
              </Link>
            </li>

            <li className="mt-10 ml-7 ">
              <Link
                href="https://sesisc.org.br/sobre-sesi"
                locale="home"
                target="_blank"
              >
                CONHEÇA MAIS
              </Link>
            </li>

            <li className="mt-10 ml-7 ">
              <Link
                href="https://transparencia.sesisc.org.br/fale-conosco?entidade=sesi"
                locale="home"
                target="_blank"
              >
                ENTRE EM CONTATO
              </Link>
            </li>
          </lu>
        </nav>
        {/* <Image
          className=" float-right"
          width="860"
          src={Retangulo}
          alt="Parede retangular"
        /> */}
        <Image
          className=" absolute left-1/2 mt-32 md:flex hidden max-w-full h-auto"
          src={Masculo}
          alt="Homem masculo aqui"
        />
        <div className=" pl-16 flex pt-64 mr-[700px]">
          <span className=" text-6xl font-normal">
            CONSTRUA A SAÚDE
            <span className="perfeita text-6xl font-bold italic align">
              PERFEITA
            </span>
          </span>
        </div>
        <p className="pl-16 font-normal text-stone-400 text-xl flex mr-[900px]">
          Venha conheçar uma das melhores academia da região de São José
        </p>
        <div className="display-flex mt-12">
          <Link
            href="/cadastro"
            locale="home"
            className="b1 bg-sky-600 text-white ml-16 py-3 px-5 rounded-3xl"
          >
            CRIE UMA CONTA
          </Link>
          <Link
            href="/login"
            locale="home"
            className=" ml-5 border-solid border-2 border-sky-600 text-sky-600 py-3 px-9 rounded-3xl"
          >
            FAÇA LOGIN
          </Link>
        </div>
        <p className="flex justify-center relative pt-96 mt-96">
          Conheça nossas Modalidades
        </p>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
