import React from "react";
import { Juegos } from "./gaming";
import "./listad.css"
const dato = [
    {
        juego: "League of Legends",
        modo: "Videojuego multijugador",
        fecha: "27 de octubre de 2009"
    },
    {
        juego: "Dota",
        modo: "Videojuego multijugador",
        fecha: "2003 "
    },
    {
        juego: "Fortnite",
        modo: "Videojuego multijugador",
        fecha: "21 de julio de 2017"
    }
]
//.map recorreo datos
export const ListadoGmg = () => {

    return (
        <div className="lista_Gamings">
            {dato.map((items,position) =>
                <Juegos
                    juego={items.juego}
                    modo={items.modo}
                    fecha={items.fecha}
                    key={position}
                />
            )
            }
        </div>
    )
}