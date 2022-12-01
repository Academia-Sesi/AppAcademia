function removeLogou() {
  for (let i = 0; i < sessionStorage.length; i++) {
    if (sessionStorage.key(i).startsWith("logou")) {
      const conta = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
      sessionStorage.setItem(
        conta.cpf,
        sessionStorage.getItem(sessionStorage.key(i))
      );
      sessionStorage.removeItem(`logou${conta.cpf}`);
    }
  }
}

function verificaLogou() {
  for (let i = 0; i < sessionStorage.length; i++) {
    if (sessionStorage.key(i).startsWith("logou")) {
      const conta = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
      return conta;
    }
  }
  return false
}

function carregarLista() {
  const contas = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    let conta = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
    contas.push(conta);
  }
  return contas;
}

function isBlankOrEmpty(value) {
  return value.match(/^(\s)+$/) || value == "";
}

//Funções do CRUD

function criarConta(nome, cpf, senha) {
  if (isBlankOrEmpty(nome)) throw Error;
  if (isBlankOrEmpty(cpf)) throw Error;
  if (isBlankOrEmpty(senha)) throw Error;
  const contas = carregarLista();

  if (contas.find((conta) => conta.cpf == cpf)) throw Error;

  let conta = { nome, cpf, senha };
  let contaSerialized = JSON.stringify(conta);
  sessionStorage.setItem(cpf, contaSerialized);
  return "Conta criada com sucesso!";
}

function entrarConta(cpf, senha) {
  if (isBlankOrEmpty(cpf)) throw Error;
  if (isBlankOrEmpty(senha)) throw Error;

  if (cpf == "000.000.000-00" && senha == "admin") return "/admin";

  const contas = carregarLista();

  const conta = contas.find((conta) => conta.cpf == cpf);

  if (!conta) return;
  if (conta.senha != senha) return;

  let contaSerialized = JSON.stringify(conta);
  sessionStorage.setItem(`logou${conta.cpf}`, contaSerialized);
  sessionStorage.removeItem(conta.cpf);
  return "/homeusuario";
}

function excluirConta(key) {
  sessionStorage.removeItem(key);
}

function editarConta(nome, senha) {
  let conta;

  for (let i = 0; i < sessionStorage.length; i++) {
    if (sessionStorage.key(i).startsWith("logou")) {
      conta = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
    }
  }
  if (isBlankOrEmpty(nome)) throw Error;
  if (isBlankOrEmpty(senha)) throw Error;

  const contas = carregarLista()

  conta.nome = nome;
  conta.senha = senha;

  sessionStorage.setItem(`logou${conta.cpf}`, JSON.stringify(conta))
}

export default {
  removeLogou,
  verificaLogou,
  carregarLista,
  criarConta,
  entrarConta,
  excluirConta,
  editarConta,
};