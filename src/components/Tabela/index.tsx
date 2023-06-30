import { LinhaHeader, TabelaDeContatos, TabelaBody, TabelaHeader, ColunaNomeHeader, LinhaBody, ColunaNomeBody, ColunaBody, ColunaEmailHeader, ColunaTelHeader, ColunaEmailBody, ColunaTelBody, BotaoEditar, BotaoRemover} from "./styles"
import {remover} from '../../store/reducers/contatos'
import { RootReducer } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import Contato from "../Contato"

const Tabela = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const dispatch = useDispatch()

    let contatosDaLista = itens

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