import React, { useState, useEffect } from 'react'
import './Frases.scss'


const frases = [
    "Hago muchas cosas, pero lo que más me gusta es crear",
    "Solvitur ambulando",
    "Silencio Bruno",
    "Fortis Fortuna Adiuvat",
    "Todo en lo que creas, existe",
    "No es un día más, es un día menos",
    "Don't let the fear destroy you"
]

const Frases = () => {

    const [fraseActual, setFraseActual] = useState(frases[0])
    const largoFrases = frases.length

    useEffect(() => {
        const timer = setInterval(() => {
            let numAleatorio = Math.floor(Math.random() * largoFrases)
            setFraseActual(frases[numAleatorio])
            
        }, 10000);
        return () => {
            clearInterval(timer)
        }
    }, [setInterval])

    return <div
            className='frase'>
            "{fraseActual}"
        </div>
}

export default Frases