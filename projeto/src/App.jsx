import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>HELLO WORD</h1>
     <h2>Bem-vindo ao meu projeto!</h2>

    {/* Componente */}
     <Mensagem/>
     <Mensagem/>
     <Mensagem/>
     <Mensagem/>
    </>
  )
}

export default App
