import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Form({ titulo, setTitulo, descripsion, setDescripsion, notas, setNotas }) {
    const inputHandler = (e) => {
        if (e.target.id === "titulo") {
            setTitulo(e.target.value);
        } else {
            setDescripsion(e.target.value);
        }
        // console.log(titulo, descripsion);
    }
    const [isChecked, setIsChecked] = useState(false);

    // const [cambiarColor, setCambiarColor] = useState(false);

    const inputCheck = () => {
        // setCambiarColor(!cambiarColor);
        
        setIsChecked(!isChecked);
            
        
        console.log(isChecked)
        


    };

    class InputText extends React.Component {
        constructor(props) {
            super(props)
            this.actualizarState = this.actualizarState.bind(this);
            this.state = { activo: false };
        }
        actualizarState(e) {

            const {checked} = e.target;
            this.setState({activo:checked});
            this.props.actualizarState({value:checked})
        }
    }

    // const color = inputCheck

    const MySwal = withReactContent(Swal);

    const addNotes = (e) => {
        e.preventDefault();
        if (titulo !== "" && descripsion !== "") {

            setNotas((notas) => {
                return (
                    [...notas, {
                        titulo: titulo,
                        descripsion: descripsion,
                        id: new Date().getTime(),
                        rotate: Math.floor(Math.random() * 20),
                        isChecked: isChecked,
                    }]
                )
            })
        }
        if (descripsion === "") {
            MySwal.fire({
                title: <strong>Mmmm...</strong>,
                html: <i>Por favor, debes añadir una descripción!</i>,
                icon: 'error'
            });
        }
        if (descripsion !== "" && titulo === "") {
            MySwal.fire({
                title: <strong>UPS</strong>,
                html: <i>Se añadió la nota sin título, puedes eliminarla en la x!</i>,
                icon: 'question'
            });
            setNotas((notas) => {
                return (
                    [...notas, {
                        titulo: 'Sin título',
                        descripsion: descripsion,
                        id: new Date().getTime(),
                        rotate: Math.floor(Math.random() * -5),
                        isChecked: isChecked,
                    }]
                )
            })
        }
        // if (descripsion==="") {

        // }
        setTitulo("");
        setDescripsion("");
    }
    return (
        <>
            <div className='container'>

                <h1><b>Post It Simulator!</b></h1>

                <form class="form-inline">

                    <input style={{ width: 255 }} type="text" id="titulo" placeholder="Título"
                        value={titulo}
                        onChange={inputHandler} />

                    <input style={{ width: 450 }} type="text" id="desc" name='desc' placeholder="Descripción" required value={descripsion} onChange={inputHandler} />

                    <div>
                <input type="checkbox" value={!isChecked} className='form-check-input' id='imp' checked={isChecked} onChange={inputCheck} />
               
                <label>Importante </label>
            </div>
                    <button className='btn' onClick={addNotes}>AGREGAR</button>
                </form>
            </div>
        </>
    )
}
