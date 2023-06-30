import { useDispatch } from "react-redux"
import { LinhaBody, ColunaNomeBody, ColunaEmailBody, ColunaTelBody, ColunaBody, BotaoEditar, BotaoRemover } from "./styles"
import { remover } from "../../store/reducers/contatos"
import ContatoClass from '../../models/Contato'
type Props = ContatoClass   


const Contato = ({
    nome,
    email,
    telefone,
    id
}: Props) => {
    const dispatch = useDispatch()
    
    
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