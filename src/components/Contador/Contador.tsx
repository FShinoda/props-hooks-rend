import { useState } from 'react';
import './Contador.css'

function Contador() {

  const [valor, setValor] = useState(0);

  return (
    <div className="container">
        <p>O valor é: { valor }</p>
        <button onClick={() => { setValor(valor+1) }}>Adicionar +1</button>
    </div>
  )
}

export default Contador