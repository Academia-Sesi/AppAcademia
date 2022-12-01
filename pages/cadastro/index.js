import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Sesi from "../../public/Sesi.png";

import { useState } from "react";
import auth from "../../services/auth.js";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  };

  return (
    <div className="bodyequivalent">
      <Head>
        <title>Cadastro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="MainCadastro">
        <Link href="/" locale="cadastro">
          <Image
            width="112"
            height="35"
            className=" mt-8 mb-5 ml-11"
            src={Sesi}
            alt="Logo do Senai"
          />
        </Link>
        <div id="elementosesquerda">
          {" "}
          {/*div da esquerda, informações*/}
          <div id="bemvindo">
            <h1 className="bemvindo">Bem-vindo!</h1>
            <h1>Olá, digite as suas informações.</h1>
          </div>
          <div className="inputs">
            <h1 className="nometxt">Nome</h1>
            <input
              type="text"
              placeholder="Nome Completo Aqui"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            ></input>
            <h1 className="cpftxt">CPF</h1>
            <input
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              maxLength={14}
              onChange={(e) => setCpf(cpfMask(e.target.value))}
            ></input>
            <h1 className="senhatxt">Senha</h1>
            <div id="password">
              <input
                type="password"
                placeholder="Password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              ></input>
            </div>
          </div>
          <button
            id="botao"
            className="b1 bg-sky-600 text-white md:text-base text-sm py-4 px-5"
            onClick={() => {
              auth.criarConta(nome, cpf, senha);
              setNome("");
              setCpf("");
              setSenha("");
              window.location.pathname = "/login";
            }}
          >
            Criar conta
          </button>
          <div id="login">
            <h1>Já possui uma conta?</h1>
            <Link className="loginlink" href="../../login">
              <h1>Faça Login</h1>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
