import { useEffect, useState } from 'react';
import './Task.css'

function Task() {

  const [finalizada, setFinalizada] = useState<boolean>(false);
  const [tarefa, setTarefa] = useState<string>("Task não finalizada");

  useEffect(() => {

    if(finalizada === true){
      setTarefa("Tarefa concluída")
    } else {
      setTarefa("Tarefa pendente");
    }
  }, [finalizada]);

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: { tarefa }</h3>
        {finalizada ? (
          <button onClick={ () => { setFinalizada(!finalizada) }}>Retomar a Tarefa</button>
        ) : (
          <button onClick={ () => { setFinalizada(!finalizada) }}>Conclua a Tarefa</button>
        )
        }
    </div>
  )
}

export default Task