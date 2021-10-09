import React from "react";
import ItemPelicula from './item-pelicula';
import './estilos.css';
//.js: HTML/JAVASCRIPT/CSS.
//.ts: JAVASCRIPT/TYPESCRIPT.
//.tsx: HTML/JAVASCRIPT/CSS/TYPESCRIPT.

//REACT:
//CLASES
//COMPONENTES
class ListadoPelicula extends  React.Component<any,any>{
     constructor(props:any){
        super(props);
        this.state={
            variable_Mensaje:"HOLA MUNDO DESDE COMPONENTE CLASE !!",
            lista_pelicula:[],
            item_Pelicula:{}
        }
     }
     //funcion fecha
     cambiar_Mensaje =()=>{
        this.setState({variable_Mensaje:'Usted cambio el mensaje'});
        console.log('Cambio de estado de variable_Mensaje')
     }
     onChange=(nuevoEstado:any)=>{
         this.setState({
             item_Pelicula:{
                 ...this.state.item_Pelicula,
                ...nuevoEstado
             }
         })
     }
     guardarPelicula =()=>{
        const{item_Pelicula,lista_pelicula}=this.state;
         this.setState({
             lista_pelicula: [
                ...lista_pelicula,    
                item_Pelicula]

         })
     }
     //FUNCION RENDER LO PREPARA ANTES DE EJECUTAR
     render(){
         const{variable_Mensaje, lista_pelicula, item_Pelicula}=this.state;
         console.log(lista_pelicula);
         return(
             <>
             <div className="Formulario">
                <label>FORMULARIO</label>
                <br/>
                <input onChange={(e)=>this.onChange({pelicula: e.target.value})} type="text" placeholder="Pelicula" value={item_Pelicula.pelicula}></input>
                <br/>
                <input onChange={(e)=>this.onChange({descripcion: e.target.value})} type="text" placeholder="Descripcion" value={item_Pelicula.descripcion}></input>
                <br/>
                <button onClick={this.guardarPelicula}>Guardar</button>
             </div>
             <div className="Listado">
                 <h1>Listado</h1>
                 {
                 lista_pelicula.map((item:any,position:number)=>{
                     const pelicula=item.pelicula;
                     const descripcion=item.descripcion;
                     return(
                     <ItemPelicula
                     key={position}
                     pelicula={item.pelicula}
                     descripcion={item.descripcion}
                     />
                     )
                 })
                }
             </div>
             </>
         )
     }
}
export default ListadoPelicula;
/*render(){
    const{variable_Mensaje}=this.state;
    return(
        <div>
            {variable_Mensaje}
            <br/>
            <button onClick={() => this.cambiar_Mensaje()}>Cambiar Mensaje</button>
        </div>
    )
}*/