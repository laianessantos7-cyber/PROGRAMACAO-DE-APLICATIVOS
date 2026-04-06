import './style.css'
import { useState } from 'react'


export default function AdicionarUsuario() {
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [listaDeUsuarios, setListaDeUsuarios] = useState([])

   // FunçãO para adicionar usuarios em uma lista.
   const handlerAdicionarUsuario =(event) => {
    event.preventDefault()
    if (nome && email){
        // Adicionar novo usuario.

        setListaDeUsuarios([...listaDeUsuarios, {nome, email}])
        // Definindo os campos como vazio.
        setNome ('')
        setEmail ('')
    }
    
   }
    return (
        // Criando HTML da pagina.

        <div className='formulario'>
            <h2>Adicionar usuario</h2>
            <form onSubmit= {handlerAdicionarUsuario}>
                <input 
                type="text"
                placeholder='Nome'
                value={nome}
                onChange={(e) => setNome (e.target.value)} 
                />
                <input 
                type="text"
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail (e.target.value)} 
                />

                <button type='submit'> Adicionar </button>
                
            </form>

                <hr />

                <h2>Usuarios Adicionados </h2>
                <ul>
                    {/* Usando o map para mostrar cada usuario na lista
                    com base no indice. */}
                    {listaDeUsuarios.map((usuario, index) => (
                    <li key={index}>
                            {usuario.nome} - {usuario.email}
                    </li>
                    ))}
                    
                </ul>
        </div>
    )
   
}

