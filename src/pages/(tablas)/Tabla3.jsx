import { useState } from "react";

const Tabla3 = () => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(1);
  
  const botones = Array.from({ length: 15 }, (_, i) => i + 1); // Genera números del 1 al 15
  const tabla = Array.from({ length: 10 }, (_, i) => i + 1); // Genera números del 1 al 10
  

  return (
    <div className="container">
      <h3 className="text-center py-4">Tabla III</h3>
      <div className="text-center">
        {botones.map(b => (
          <button 
            key={b} 
            className={`btn m-1 ${tablaSeleccionada === b ? 'btn-info' : 'btn-outline-info'}`} 
            onClick={() => setTablaSeleccionada(b)}
          >
            Tabla del {b}
          </button>
        ))}
      </div>
      <div className="col-md-4 mx-auto text-center card my-5 p-2">
        {tabla.map(n => (
          <h3 key={n}>{tablaSeleccionada} * {n} = {tablaSeleccionada * n}</h3>
        ))}
      </div>
    </div>
  );
};

export default Tabla3;