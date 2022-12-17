import React from 'react'
import { useState } from 'react';
import Form from "./components/Form";
import Notas from "./components/Notas";


export default function App() {

  const [titulo, setTitulo] = useState("");
  const [descripsion, setDescripsion] = useState("");
  const [notas, setNotas] = useState(getNotasLs);

  console.log(notas);
  const max = 20;
  const random = Math.floor(Math.random() * 20);
  
  localStorage.setItem("notas", JSON.stringify(notas))
  
  

  return (
    <>
      <Form titulo={titulo} setTitulo={setTitulo} descripsion={descripsion} setDescripsion={setDescripsion}
        notas={notas} setNotas={setNotas} />
      {/* <div className='container'> */}
      <div className='container'>
        <div className='row'>
          
          {
            notas.length === 0 ?
              <h1>No hay notas</h1>
              : notas.map((element) => {
                return (
                 

                  <div className='flex col-lg-3'>

                    
                    <Notas element={element} key={element.id} notas={notas} setNotas={setNotas} />
                    
                  </div>
                )
              })
          }
          
        </div>
      </div>


      {/* </div> */}


    </>
  )

  function getNotasLs() {
    const notas = JSON.parse(localStorage.getItem("notas"));
    if (notas) {
      return notas;
    } else {
      return [];
    }
  }

}
