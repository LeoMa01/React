import React from "react";
import { isPropertySignature } from "typescript";

interface IPelicula{
    pelicula:String,
    descripcion:String
}
const ComponenteItem=(props:IPelicula)=>{
    return(
        <div>
           
           <label>  {props.pelicula}</label>
           <p>{props.descripcion}</p>
                
        </div>
    )

}
export default ComponenteItem;