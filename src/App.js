import React from "react";
import Contador from "./componentes/Contador";
import Footer from "./componentes/Footer";
import Ventana from "./componentes/Ventana";

function App() {
  const [clicks, setClicks] = React.useState(0)
  const [mostrarTracker, setMostrarTracker] = React.useState(false)

  return (
    <div>
      <Contador clicks={clicks} setClicks={setClicks} />
      <Ventana mostrarTracker={mostrarTracker} setMostrarTracker={setMostrarTracker} />
      <Footer />
    </div>
  );
}

export default App;
