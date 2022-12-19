import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form  from "./Form";

export default function Notas({ element, notas, setNotas }) {

    const eliminarNota = (id) => {
        const nuevaNota = notas.filter((elem) => {
            if (elem.id !== id) {
                return elem;
            }
        })
        setNotas(nuevaNota);
        
    }

    
   const style = element.color? 'bg-green-700': 'white';


   const style1 = {
    backgroundColor: '#FFFFCC',
    
   }
//    document.card.style =  `background: #FFFFCC`
return (

    <>
                {
                    (element.isChecked === true)?
                    <div className='card' style={{transform: `rotate(${element.rotate}deg)`, backgroundColor: '#EC7063'}} >
                    <div className="card-body">
                        <button className='botonx' style={{backgroundColor: '#EC7063'}} onClick={() => {
                            eliminarNota(element.id)
                        }}><b>x</b></button>
                        <div className='formcontrol'>
                            <h2 className="card-title"><b>{element.titulo}</b></h2>

                            <h3 className="card-text">{element.descripsion} </h3>
                        </div>
                    </div>
                </div>:
                <div className="card" style={{transform: `rotate(${element.rotate}deg)`, backgroundColor: '#FFFFCC'}} >
                <div className="card-body">
                    <button className='botonx' style={{ backgroundColor: '#FFFFCC'}} onClick={() => {
                        eliminarNota(element.id)
                    }}><b>x</b></button>
                    <div className='formcontrol'>
                        <h2 className="card-title"><b>{element.titulo}</b></h2>

                        <h3 className="card-text">{element.descripsion} </h3>
                    </div>
                </div>
            </div>
                }


    </>
)
    console.log(notas.titulo + "desde NOTAS.JS");

}
