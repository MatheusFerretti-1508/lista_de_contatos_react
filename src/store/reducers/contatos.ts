import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import { RootReducer } from '..'
import { useSelector } from 'react-redux'

type ContatoState = {
    itens: Contato[]
}

const initialState: ContatoState = {
    itens: [
        {
            nome: 'Juliana',
            email: 'julianaNamoradaDoMatheus@gmail.com',
            telefone: '+55 47 9774-7034',
            id: 1
        },
        {
            nome: 'Matheus',
            email: 'matheusNamoradoDaJuliana@gmail.com',
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
        editar: (state, action: PayloadAction<Contato>) => {
            
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const nomeNovoContato = prompt('Digite o nome do contato:')
            const emailNovoContato = prompt('Digite o email do contato:')
            const telefoneNovoContato = prompt('Digite o telefone do contato:')

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

export const { remover, cadastrar, editar } = contatoSlice.actions

export default contatoSlice.reducer