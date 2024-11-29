import { useState } from "react";

const Tabla2 = () => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(1);
  const botones=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const tabla=[1,2,3,4,5,6,7,8,9,10];

function otronumero(n){
  setTablaSeleccionada(n)
}
  return (
    <div className="container">
      <h3 className="text-center py-4">Tabla II</h3>
      <div className="text-center">
        {botones.map(b => (
          <a key={b} href="#" className="btn btn-info m-1" onClick={() => otronumero(b)}>
            Tabla del {b}
          </a>
        ))}
      </div>
      <div className="col-md-4 mx-auto text-center card my-5 p-2">
       {tabla.map(n => (
          <h3 key={n}>{tablaSeleccionada} * {n} = {tablaSeleccionada * (n)}</h3>
        ))}
      </div>
 
    </div>
  );
};

export default Tabla2;