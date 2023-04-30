import React from 'react';
import './pages.css';

export default function Cadastro() {
    function Cad() {
        window.prompt('Cadastro efetuado')
    }
    return (
        <div>
            <div className='container'>
                <h5>Dados pessoais</h5>
                <input className='options' type="text" name="nome" id="name" placeholder="Informe seu nome" /> <br />
                <input className='options' type="tel" name="telefone" id="fone" placeholder='Informe seu telefone' /> <br />
                <input className='options' type="text" name="endereco" id="ender" placeholder='Endereço' />
            </div>
            <div className='container'>
                <h5>Plano escolhido</h5>


            </div>
            <div className='container'>
                <div style={{marginLeft: '500px', marginTop: '100px'}}>
                    <h5>Dados do cartão</h5>
                    <input className='cartao' type="text" name="userCard" id="nameCard" placeholder='Nome do cartão' /> <br />
                    <input className='cartao' type="text" name="numberCard" id="numCard" maxLength='20' placeholder='Número do cartão' /> <br />
                    <input className='cartao' type="text" name="CVCCard" id="CVC" maxLength='3' placeholder='CVC' />
                </div>


            </div>
            <button onClick={Cad}>Assinar</button>
        </div>
    )
}