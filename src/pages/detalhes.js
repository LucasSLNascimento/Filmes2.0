import React from 'react';
import { useEffect, useState } from "react";
import Title from '../components/Titulo';
import Comments from './../components/Comments/index';
import { useParams } from 'react-router-dom';

function Detalhes({ id, nota }) {
    const [idFilm] = useParams()
    const [data, setData] = useState('');

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="Detalhes do filme selecionado" />
            <div className="container">

                {(() => {
                    if (data === null) {
                        console.log(data.value)
                        return (
                            <div>
                                <p>Não será possível exibir os detalhes deste filme pois parece que há informações faltando</p>
                                <p>Nossa equipe pede perdão pelo transtorno e faremos o possível para que não ocorra novamente</p>
                            </div>

                        )
                    } else {
                        return (
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
                                            <p>Nota: {}</p>
                                            <p>Sinopse: {data.sinopse}</p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                })()}

            </div>
        </div>
    )
}

export default Detalhes;

{/*
    <Comments filme={data.titulo} />
*/}