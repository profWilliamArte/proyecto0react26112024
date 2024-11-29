import { useState } from "react";

const Tabla1 = () => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(1);

function otronumero(n){
  setTablaSeleccionada(n)
}
  return (
    <div className="container">
      <h3 className="text-center py-4">Tabla I</h3>
      <div className="text-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(b => (
          <a key={b} href="#" className="btn btn-danger m-1" onClick={() => otronumero(b)}>
            Tabla del {b}
          </a>
        ))}
      </div>
      <div className="col-md-4 mx-auto text-center card my-5 p-2">
       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
          <h3 key={n}>{tablaSeleccionada} * {n} = {tablaSeleccionada * (n)}</h3>
        ))}
      </div>
 
    </div>
  );
};

export default Tabla1;