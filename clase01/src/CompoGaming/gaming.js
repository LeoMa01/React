import React from "react";

export const Juegos=(props)=>{
   
    console.log(props);
 
    const{juego,modo,fecha}=props;
    const componenteJuego=<p>Juego:{juego}</p>;
    const componenteModo=<p>Modo:{modo}</p>;
    const componenteFecha=<p>Fecha:{fecha}</p>;

return(
    <div className="lista_Gamings">
    <br/>  
    {componenteJuego}
    {componenteModo}
    {componenteFecha}
    <button onClick={() => alert(JSON.stringify(juego))} >Juego</button>
    <button onClick={() => alert(JSON.stringify(props))} >Información</button>
    </div>
)
}