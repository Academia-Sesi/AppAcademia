import Link from "next/link";
import { useState, useEffect } from "react";
import auth from "../../services/auth.js";

export default function Admin() {
  const [contas, setContas] = useState([]);
  const [conta, setConta] = useState("");
  const [contasExcluidas, setContasExcluidas] = useState(0);

  useEffect(() => {
    const contas = auth.carregarLista();
    setContas(contas);
    setConta("");
  }, [contasExcluidas]);

  return (
    <div className="main">
      <form>
        <select onChange={(e) => setConta(e.target.value)}>
          <option value={""}>Selecionar aluno</option>
          {contas.map((conta) => (
            <option key={conta.cpf} value={conta.cpf}>
              {conta.nome}
            </option>
          ))}
        </select>
      </form>
      {conta ? (
        <p
          onClick={() => {
            auth.excluirConta(conta);
            setContasExcluidas(contasExcluidas + 1);
          }}
          className="exConta"
        >
          Excluir conta
        </p>
      ) : (
        ""
      )}
      <Link href="../">
        <button className="button-sair">Sair</button>
      </Link>
    </div>
  );
}
