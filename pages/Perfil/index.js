import Link from "next/link";
import { useState, useEffect } from "react";
import auth from "../../services/auth.js";

export default function Perfil() {
  const [conta, setConta] = useState("");
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

  useEffect(() => {
    const conta = auth.verificaLogou();
    if (!conta) window.location.pathname = "/Login";
    setConta(conta);
    setNome(conta.nome);
    setCpf(conta.cpf);
    setSenha(conta.senha);
  }, []);

  return (
    <div class="main">
      <div class="head"></div>
      <div class="user">
        <h1 class="bemvindo">Informações do aluno</h1>
        <div class="user-infos">
          <div class="input-label">
            <p>Nome</p>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            ></input>
          </div>
        </div>
        <div class="user-infos">
          <div class="input-label">
            <p>CPF</p>
            <input
              type="text"
              value={cpf}
              maxLength={14}
              disabled
            ></input>
          </div>
        </div>
        <div class="user-infos">
          <div class="input-label">
            <p>Senha</p>
            <input
              type="text"
              placeholder="Password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <Link href="../">
        <button class="button-sair" onClick={() => auth.removeLogou()}>
          Sair
        </button>
      </Link>
      <button className="p-3 bg-green-500 text-white rounded-2xl mb-6" onClick={() => auth.editarConta(nome, senha)}>
        Salvar
      </button>
    </div>
  );
}
