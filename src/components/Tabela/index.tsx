import { LinhaHeader, TabelaDeContatos, TabelaBody, TabelaHeader, ColunaNomeHeader, ColunaEmailHeader, ColunaTelHeader } from "./styles"
import { RootReducer } from "../../store"
import { useSelector } from "react-redux"
import Contato from "../Contato"

const Tabela = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)

    const contatosDaLista = itens

    return (
        <TabelaDeContatos>
            <TabelaHeader>
                <LinhaHeader>
                    <ColunaNomeHeader>Nome</ColunaNomeHeader>
                    <ColunaEmailHeader>E-mail</ColunaEmailHeader>
                    <ColunaTelHeader>Telefone</ColunaTelHeader>
                </LinhaHeader>
            </TabelaHeader>
            <TabelaBody>
                {contatosDaLista.map((c) => (
                    <div key={c.nome}>
                        <Contato
                            nome={c.nome}
                            email={c.email}
                            telefone={c.telefone}
                            id={c.id}
                            />
                    </div>
                ))}
            </TabelaBody>
        </TabelaDeContatos>
    )
}

export default Tabela