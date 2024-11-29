import { useState } from "react";


const Contador = () => {
  const [contador, setContador] =useState(58);
  let contador2=10;

  function incrementa() {
    setContador(contador+1);
    console.log(contador)
    
  }
  function incremento2() {
    contador2++;
    console.log(contador2)
    alert(contador2)
  }
  return (
    <div className="container">
       <h4 className="text-center py-4">Contador</h4>
       <p className="text-center py-4"><b>Propósito: useState</b> se utiliza para añadir variables de estado a los componentes funcionales en React, lo que permite almacenar y actualizar datos que afectan el renderizado del componente.</p>
      <div className="text-center py-4 col-md-4 mx-auto bg-black ">
        <button className="btn btn-danger m-2" onClick={() => incremento2()}>Incrementar</button>
        <h3 className="py-4">{contador2}</h3>
      </div>
     
      <div className="text-center py-4 mt-4 col-md-4 mx-auto bg-black">
         <button className="btn btn-info m-2" onClick={() => setContador(contador+1)}>Incrementar</button>
         <button className="btn btn-primary m-2" onClick={() => incrementa()}>Incrementar</button>
         <h3 className="py-4">{contador}</h3>
      </div>
    </div>
   
  )
}

export default Contador;