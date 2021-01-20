import React from 'react';
import './App.css';

import imgLogo from '../src/assets/Logo.jpg'
import capaLocal from '../src/assets/banner-capa.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Top-bar">
          <img src={imgLogo} className="Logo-Img" />
        </div>

        <div className="Top-Banner">
          <div className="Text-Banner">
            <h1>Bem vindo ao</h1>
            <h1>Vivaz - Belém</h1>
            <p>Um empreendimento com tudo que você sempre sonhou</p>
            <button className="btnSabia">SABIA MAIS</button>
          </div>
        </div>
        <div className="Menu-Icons">
          <img src={capaLocal} style={{ width: '90%'}} />
          <div style={{ textAlign:'left' }}>
            <h3>VIVAZ ESTAÇÃO BELÉM</h3>
            <div style={{ display:'flex', justifyContent:'space-around' }}>
            <p>Chegou o Vivaz Estação Belém. Um empreendimento com tudo que você sempre sonhou, em uma localização especial e com todas as facilidades do Minha Casa Minha Vida. Apartamentos com 1 ou 2 quartos, opção de vaga, opção de varanda</p>
            </div>
          </div>
        </div>
      </header>
      <div className="Video-Local">

      </div>
    </div>
  );
}

export default App;
