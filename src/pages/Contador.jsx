import { useState } from "react";


const Contador = () => {
  const [contador, setContador] =useState(58);
  console.log(contador);
  function incrementa() {
    setContador(contador+1);
    console.log(contador)
  }

  return (
    <div className="container">
       <h4 className="text-center py-4">Contador</h4>
       <p className="text-center py-4"><b>Propósito: useState</b> se utiliza para añadir variables de estado a los componentes funcionales en React, lo que permite almacenar y actualizar datos que afectan el renderizado del componente.</p>
      <div className="text-center py-4">
         <button className="btn btn-info m-2" onClick={() => setContador(contador+1)}>Incrementar</button>
         <button className="btn btn-primary m-2" onClick={() => incrementa()}>Incrementar</button>
         <h3 className="py-4">{contador}</h3>
      </div>
      
    </div>
   
  )
}

export default Contador;