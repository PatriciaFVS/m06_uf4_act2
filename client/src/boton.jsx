import React from 'react';
import './boton.css'
const Boton = ({ text, onClick, esClick }) => {
  
  const botonClass = esClick ? 'btnClick' : 'btnReiniciar';

  return (
    <button className={botonClass} onClick={onClick}>
      {text}
    </button>
  );
}

export default Boton;
