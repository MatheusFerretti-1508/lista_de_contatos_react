import { useDispatch, useSelector } from "react-redux"
import { LinhaBody, ColunaNomeBody, ColunaEmailBody, ColunaTelBody, ColunaBody, BotaoEditar, BotaoRemover } from "./styles"
import { RootReducer } from "../../store"
import { remover, editar, cadastrar } from "../../store/reducers/contatos"
import ContatoClass from '../../models/Contato'
import { useState } from "react"

type Props = ContatoClass   


const Contato = ({
    nome,
    email,
    telefone,
    id
}: Props) => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const dispatch = useDispatch()
    
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    let contatosDaLista = itens
    return ( 
        <>
        <LinhaBody>
            <ColunaNomeBody>{nome}</ColunaNomeBody>
            <ColunaEmailBody>{email}</ColunaEmailBody>
            <ColunaTelBody>{telefone}</ColunaTelBody>
            <ColunaBody>
                <BotaoEditar onClick={() => {
                    return (<input type="text" />)
                    }}>Editar</BotaoEditar>
                <BotaoRemover onClick={() => dispatch(remover(id))}>Remover</BotaoRemover>
            </ColunaBody>
        </LinhaBody>
        </>
    )
}

export default Contato

// alteraNome()
//                     alert('Deseja alterar "nome"?')
//                     let resposta1 = prompt('S/N')
//                     if (resposta1 === 'S') {
//                         let novoNome  = prompt('Digite o novo nome')
//                         let nomeParaAlterar = contatosDaLista.find((n) => n === e.target.value)
//                         nomeParaAlterar = novoNome
//                         alert(nomeParaAlterar)
//                     } else if (resposta1 === 'N') {
//                         alert('b')
//                     }

/*dispatch(editar(contatosDaLista))}*/