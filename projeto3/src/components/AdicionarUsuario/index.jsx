import './style.css'
import { useState } from 'react'

export default function AdicionarUsuario() {
   const [personagem, setPersonagem] = useState('')
   const [ator, setAtor] = useState('')
   const [lista, setLista] = useState([])

   const adicionar = (event) => {
    event.preventDefault()
    if (personagem && ator){
        setLista([...lista, {personagem, ator}])
        setPersonagem('')
        setAtor('')
    }
   }

    return (
        <div className='formulario'>
            <h2>🎭 Cadastro de Personagens</h2>

            <form onSubmit={adicionar}>
                <input 
                type="text"
                placeholder='Personagem (Ex: Professor)'
                value={personagem}
                onChange={(e) => setPersonagem(e.target.value)} 
                />

                <input 
                type="text"
                placeholder='Ator (Ex: Álvaro Morte)'
                value={ator}
                onChange={(e) => setAtor(e.target.value)} 
                />

                <button type='submit'> Adicionar </button>
            </form>

            <hr />

            <h2>📺 Lista da Série</h2>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        🔴 {item.personagem} — {item.ator}
                    </li>
                ))}
            </ul>
        </div>
    )
}