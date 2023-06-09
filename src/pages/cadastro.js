import React from 'react';
import './pages.css';
import Title from '../components/Titulo';

export default function Cadastro() {
   
    function Cad() {
        window.alert('Cadastro efetuado')
    }
    return (
        <div className='container text-center' >
            <Title text={'Cadastro de assinante'} />
            <div style={{ display: 'flex' }}>
                <div className='infosPlanos_pessoal'>
                    <h5>Dados pessoais</h5>
                    <input className='options' type="text" name="pessoal" id="nome" placeholder="Informe seu nome" /> <br />
                    <input className='options' type="tel" name="pessoal" id="telefone" placeholder='Informe seu telefone' /> <br />
                    <input className='options' type="text" name="pessoal" id="ender" placeholder='Endereço' />

                    <h5>Plano escolhido</h5>
                    <div className='planos'>
                        <input type="radio" name="plano" id="basico" value='basico' />
                        <label for="basico">Básico</label>
                        <input type="radio" name="plano" id="gold" value='gold' />
                        <label for="gold">Gold</label>
                        <input type="radio" name="plano" id="diamond" value='diamond' />
                        <label for="diamond">Diamond</label>
                    </div>
                </div>

                <div className='infosCartao'>
                    <div>
                        <h5>Dados do cartão</h5>
                        <input className='cartao' type="text" name="cartao" id="nameCard" placeholder='Nome do cartão' /> <br />
                        <input className='cartao' type="text" name="cartao" id="numCard" maxLength='20' placeholder='Número do cartão' /> <br />
                        <input className='cartao' type="password" name="cartao" id="CVC" maxLength='3' placeholder='CVC' />
                    </div>
                </div>

            </div>
    
            <button onClick={Cad}>Assinar</button>
        </div>
    )
}