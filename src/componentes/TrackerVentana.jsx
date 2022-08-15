import React from "react";

export default function TrackerVentana() {
    const [anchoVentana, setAnchoVentana] = React.useState(window.innerWidth)
    const [altoVentana, setAltoVentana] = React.useState(window.innerHeight)

    React.useEffect(() => {
        function cambiandoMedidas() {
            console.log("Cambiando ancho...")
            setAnchoVentana(window.innerWidth)
            setAltoVentana(window.innerHeight)
        }
        window.addEventListener("resize", cambiandoMedidas)
        return function() {
            console.log("Limpiando...")
            window.removeEventListener("resize", cambiandoMedidas)
        }
    }, [])
    return (
        <div className="max-w-fit rounded-lg px-6 py-8 shadow-2xl bg-white border-x-8 border-indigo-500">
            <h1 className="text-2xl">
            PS: Tu ventana tiene un ancho de {anchoVentana}px y un alto de {altoVentana}px 😉
            </h1>
        </div>
    )
}
