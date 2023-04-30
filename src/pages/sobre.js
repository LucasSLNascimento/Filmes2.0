import React from 'react';
import {useParams} from 'react-router-dom';
import Title from '../components/Titulo';

function Sobre(){
    const {name} = useParams();

    return(
        <div>
            <Title title={'Sobre'} text='Um pouco sobre nós'/>
            <p>Olá usuário {name} seja bem vindo a este catálogo de filmes</p>
        </div>
    )
}
export default Sobre;