import React from "react";

//var = int -0 --> int -5
//let = int -0 --> int -5
//const = int -0 --> int -0

//EXPORTA TU VARIABLE PELICULA DESDE COMPONENTE REACT, LO QUE NE JAVA E SPUBLIC ACA ES EXPORT
export const Pelicula=(props)=>{
    //ver que datos entra en el componente pelicula
    console.log(props);
    //destructurar varibles
    const{entradas,fecha,pelicula}=props;
    const componentePelicula=<p>Pelicula:{pelicula}</p>;
    const componenteEntrada=<p>Entradas:{entradas}</p>;
    const componenteFecha=<p>Fecha:{fecha}</p>;
    //const mensaje=props.msg;
return(
    <div className="lista_Pelicula">
    {/*mensaje*/} <br/>  
    {componentePelicula}
    {componenteEntrada}
    {componenteFecha}
    <button onClick={() => alert(JSON.stringify(props))} >Información</button>
    </div>
)
}
//function Pelicula(){ }

/*
object pelicula{
nombre: spiderman
fecha: 15-07-2022
entradas: 20

}
*/

