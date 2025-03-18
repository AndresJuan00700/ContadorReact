import React from 'react'

const Controles = ({setContador, contador}) => {
  return (
    <div>
          <button
     onClick={()=>setContador(contador+1)}
     >Incrementar</button>

<button
onClick={()=>setContador(contador-1)}

>decrementar</button>

<button
onClick={()=>setContador(0)}

>reiniciar</button>
    </div>
  )
}

export default Controles
