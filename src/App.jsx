import { useState } from "react";
import Contador from "./components/Contador";
import Controles from "./components/Controles";
import Props from "./components/Props";



function App() {
  const [contador, setContador]= useState(0);
const apellidos ="Benitez Muñoz";
  return (
    <>
     <Props  nombre="Andres juan" apellidos={apellidos} />
     <Contador   contador={contador}   />
     <Controles contador={contador} setContador={setContador}  />
    </>
  )
}

export default App
