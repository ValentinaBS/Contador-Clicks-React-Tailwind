import React from "react";
import TrackerVentana from "./TrackerVentana";

export default function Ventana({ mostrarTracker, setMostrarTracker }) {
    
    function activarTrackerVentana() {
        setMostrarTracker(prevMostrarTracker => !prevMostrarTracker)
    }

    return (
        <div className="flex flex-col items-center">
            <button 
            className="px-6 py-8 mb-5 text-xl text-white bg-indigo-500 rounded-lg max-w-fit hover:bg-indigo-600 active:bg-indigo-700 hover:drop-shadow-xl" 
            onClick={activarTrackerVentana}>
                {mostrarTracker ? <p>Desactivar rastreador de ventana</p> : <p>Activar rastreador de ventana</p>}
            </button>
            {mostrarTracker && <TrackerVentana className="duration-300 ease-out"/>}
        </div>
    )
}