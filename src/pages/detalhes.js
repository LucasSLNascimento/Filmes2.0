import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Titulo';
import Comments from './../components/Comments/index';



import { useEffect, useState } from "react";

function Detalhes() {
    const { filme } = useParams();
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/{id}')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
    }, [])

    const filmeEscolhido = data.filter(f =>
        f.id === filme
    );

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="Detalhes do filme selecionado" />
            <div className="container">
                <div class='row' style={{border: '1px solid #d3d3d3'}}>
                    <div class='col-6' style={{marginLeft: '190px', width:'500px'}}>
                        <img src={'/assets/images/Vingadores.jpg'} alt={filmeEscolhido.titulo} className="card-img-top" />
                    </div>
                    <div class='col-4'>
                        <div class='card'>
                            <div class='card-header'>
                                <p style={{textAlign:'center'}}>{filmeEscolhido.id}</p>
                            </div>
                            
                            <div>
                                <p>Descrição: {filmeEscolhido.descricao}</p>
                                <p>Gênero: {filmeEscolhido.genero}</p>
                            </div>
                        </div>

                    </div>                    
                </div>
                <Comments filme={filmeEscolhido.titulo} />
            </div>
        </div>
    )
}

export default Detalhes;