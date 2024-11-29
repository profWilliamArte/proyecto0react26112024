import { useState } from "react";

const Tabla4 = () => {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(1);
  const [hasta, setHasta] = useState(10); // Estado para controlar hasta dónde mostrar la tabla
  const botones = Array.from({ length: 15 }, (_, i) => i + 1); // Genera números del 1 al 15
  const limites = [10, 20, 30, 40, 50]; // Posibles límites para la tabla

  return (
    <div className="container">
      <h3 className="text-center py-4">Tabla IV</h3>
      
      {/* Botones para seleccionar el límite superior */}
      <div className="text-center py-4">
        {limites.map(h => (
          <button 
            key={h} 
            className={`btn m-1 ${hasta === h ? 'btn-success' : 'btn-outline-success'}`} 
            onClick={() => setHasta(h)} // Cambia el límite superior
          >
            Hasta {h}
          </button> 
        ))}
      </div>

      {/* Botones para seleccionar la tabla de multiplicar */}
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

      {/* Renderiza la tabla de multiplicar hasta el límite seleccionado */}
      <h3 className="text-center py-4">Tabla del {tablaSeleccionada} hasta {hasta}</h3>
      <div className="col-md-4 mx-auto text-center card my-5 p-2">
        {Array.from({ length: hasta }, (_, n) => (
          <h3 key={n + 1}>{tablaSeleccionada} * {n + 1} = {tablaSeleccionada * (n + 1)}</h3>
        ))}
      </div>
    </div>
  );
};

export default Tabla4;