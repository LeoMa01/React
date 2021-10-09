import React from "react";
import { Pelicula } from "./pelicula";
import "./lista.css"

const datos = [
    {
        pelicula: "Spiderman",
        entradas: "5",
        fecha: "15/05/2022"
    },
    {
        pelicula: "Boku no piko xd",
        entradas: "2",
        fecha: "05/12/2022"
    },
    {
        pelicula: "Boku no hero",
        entradas: "9",
        fecha: "24/01/2023"
    }
]
//.map recorreo datos
export const Listado = () => {

    return (
        <div className="listado_Pelicula">
            {datos.map((items,position) =>
                <Pelicula
                    pelicula={items.pelicula}
                    entradas={items.entradas}
                    fecha={items.fecha}
                    key={position}
                />
            )
            }
        </div>
    )
}