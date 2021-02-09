import React from 'react'
import { Link } from "react-router-dom";
import imgLogo from './assets/Logo.jpg'
import {Helmet} from "react-helmet";

export default function FinalForm() {
    return (
        <div className="App-header">
            <Helmet>
                <title>Obrigado pelo contato</title>
                
            </Helmet>
            <div className="Top-Banner-Final">
                <div className="Text-Banner">
                    <h1 className="TitleFinal">MUITO OBRIGADO!</h1>
                    <h5>Cadastro realizado com sucesso. Em breve entraremos em contato.</h5>
                    <Link to="/"><button className="btnSabia" >Voltar para o site</button></Link>
                    <div style={{position:'fixed', bottom: '15%', width: '100%', backgroundColor: 'white'}}>
                    <img src={imgLogo} style={{width:'40%', maxWidth:200}} alt="Logo da Vivaz"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
