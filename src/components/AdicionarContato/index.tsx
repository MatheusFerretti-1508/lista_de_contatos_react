import { useDispatch } from "react-redux"
import { BotaoAdicionar } from "./styles"
import { cadastrar } from "../../store/reducers/contatos"


const AdicionarContato = () => {
    const dispatch = useDispatch()

    return (
        <>
        <BotaoAdicionar onClick={() => dispatch(cadastrar()) }>Adicionar Contato</BotaoAdicionar>
        </>
    )
}

export default AdicionarContato