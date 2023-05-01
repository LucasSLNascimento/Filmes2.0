import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Title from '../components/Titulo';
import Comments from './../components/Comments/index';
import Card from '../components/Card';

function Detalhes({key, nota}) {
    const { id } = useParams();
    const [data, setData] = useState('');

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${key}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
    }, [key])
    console.log(data)

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="Detalhes do filme selecionado" />
            <div className="container">

                    <div class='row' style={{ border: '1px solid #d3d3d3' }}>
                        <div class='col-6' style={{ marginLeft: '190px', width: '500px' }}>
                            <img src={data.poster} alt={data.titulo} className="card-img-top" />
                        </div>
                        <div class='col-4'>
                            <div class='card'>
                                <div class='card-header'>
                                    <p style={{ textAlign: 'center' }}>{data.titulo}</p>
                                </div>

                                <div>
                                    <p>Ano: {data.ano}</p>
                                    <p>Nota: {data.nota}</p>
                                    <p>Sinopse: {data.sinopse}</p>
                              
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Detalhes;

{/*

    <Comments filme={data.titulo} />
*/}