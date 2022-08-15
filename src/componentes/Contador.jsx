import React from "react"

export default function Contador({ clicks, setClicks }) {
    function manejarClick() {
        setClicks(prevClicks => prevClicks + 1)
    }
    function reiniciar() {
        setClicks(0)
    }

    return (
    <div className="flex flex-col items-center my-10">
    <main className="flex flex-col items-center px-6 py-8 bg-white rounded-lg shadow-2xl max-w-fit">
        <h1 className="mx-4 my-5 text-6xl text-center font-extrabold">
            ¡Contador de Clicks! 🖱️
        </h1>
        <div className="h-40 w-40 flex justify-center items-center my-4 bg-indigo-500 rounded-full shadow-lg">
            <h1 
            className="text-6xl font-bold text-white">
                {clicks >= 1000 ? reiniciar() : clicks}
            </h1>
        </div>
        <div className="my-5 flex flex-col">
            <button 
                className="p-6 mx-5 mb-6 text-4xl font-bold text-white bg-indigo-500 border border-transparent rounded-lg hover:bg-indigo-600 hover:drop-shadow-xl active:bg-indigo-700"
                onClick={manejarClick}
            >
                ¡Click!
            </button>
            <button 
                className="p-5 text-4xl bg-white border-2 border-indigo-500 rounded-lg hover:bg-indigo-50 active:bg-indigo-100 hover:drop-shadow-xl"
                onClick={reiniciar}
            >
                Reiniciar
            </button>
        </div>
    </main>
    </div>
    )
}
