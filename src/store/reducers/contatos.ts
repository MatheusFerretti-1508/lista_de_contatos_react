import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
    itens: Contato[]
}

type Props = {
    nome: string,
    email: string, 
    telefone: string,
    id: number
}

const initialState: ContatoState = {
    itens: [
        {
            nome: 'Juliana',
            email: 'juliana.domf@gmail.com',
            telefone: '+55 47 9774-7034',
            id: 1
        },
        {
            nome: 'Matheus',
            email: 'matheus.ownr.ofj@gmail.com',
            telefone: '+55 47 9172-3301',
            id: 2
        }
    ]
}

const contatoSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((contato) => contato.id !== action.payload)
        },
        // editar: (state, action: PayloadAction<Contato>) => {
            
        // },
        cadastrar: (state) => {
            const nomeNovoContato: string = prompt('Digite o nome do contato:')
            const emailNovoContato: string = prompt('Digite o email do contato:')
            const telefoneNovoContato: string = prompt('Digite o telefone do contato:')

            const novoContato: Props = {
                nome: nomeNovoContato,
                email: emailNovoContato,
                telefone: telefoneNovoContato,
                id: 99
            }
            state.itens.push(novoContato)
            }
        },
    }
)

export const { remover, cadastrar, /*editar*/ } = contatoSlice.actions

export default contatoSlice.reducer