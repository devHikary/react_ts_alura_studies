import React from "react";
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../Lista/Index';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro/>
    </div>
  );
}

export default App;
