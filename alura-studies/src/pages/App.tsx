import React from "react";
import Formulario from '../components/Formulario';
import Lista from '../Lista/Index';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
