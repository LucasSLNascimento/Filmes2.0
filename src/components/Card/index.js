import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Detalhes from "../../pages/detalhes";
import BotaoDetalhes from "./BotaoDetalhes";
import "./Card.css";

function Assitido({ javisto }) {
  if (javisto) {
    return (
      <div>
        <button onClick={Assistindo}>Assistir novamente</button>
      </div>
    )
  }
  return (
    <div>
      <button onClick={Assistindo}>Assistir</button>
    </div>
  )
}
function Assistindo() {
  window.alert('Assistindo')
}

export default function Card() {
  const [data, setData] = useState(null);
  const [film_Tit, setFilm_Tit] = useState('');
  const [ordena, setOrdena] = useState('titulo');


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, []);

  if (!data) {
    return <p>Carregando...</p>
  }

  function handleTitChange(event) {
    setFilm_Tit(event.target.value);
  }
  const busca = data.filter((movie) =>
    movie.titulo.toLowerCase().includes(film_Tit.toLowerCase())
  );

  const handleOrdChange = (event) => {
    setOrdena(event.target.value);
  }
  data.sort((film1, film2) => {
    if (ordena === 'titulo') {
      return film1.titulo.localeCompare(film2.titulo);
    } else if (ordena === 'ano') {
      return new Date(film1.ano) - new Date(film2.ano);
    } else {
      return film2.nota - film1.nota;
    }
  })

  return (
    <div className="container text-center">
      <input className="buscador" type="search" name="busca" id="buscaFilme" value={film_Tit} onChange={handleTitChange} placeholder="Busca por filmes aqui" />
      <div class='col-sm'>
        <label>Ordenar por</label>
        <select onChange={handleOrdChange} value={ordena}>
          <option value="titulo">Titulo</option>
          <option value="ano">Ano</option>
          <option value="nota">Nota</option>
        </select>
      </div>

      <div className="row">
        {(() => {
          if (film_Tit !== '') {
            return (
              <div class='row' >
                {busca.map((filme, i) => (
                  <div className="col-3" key={i}>
                    <div className="card" >
                      <img src={filme.poster} alt={filme.titulo} className="card-img-top" style={{ height: '400px', width: '200px', marginLeft: '50px', marginTop: '5px' }} />
                      <div className="card-body">
                        <h5 className="card-title">{filme.titulo} ({filme.ano}) </h5>
                        <p>Nota: {filme.nota}</p>
                        <Assitido
                          javisto={filme.assistido}
                        />

                        <Detalhes id={filme.id} nota={filme.nota} />

                      </div>
                    </div>

                  </div>
                ))}
              </div>

            )

          } else {
            return (
              <div class='row'>
                {data.map((filme, i) => (
                  <div className="col-3" key={i}>
                    <div className="card">
                      <img src={filme.poster} alt={filme.titulo} className="card-img-top" style={{ height: '400px', width: '200px', marginLeft: '50px', marginTop: '5px' }} />
                      <div className="card-body">
                        <h5 className="card-title">{filme.titulo}  </h5>
                        <h5 className="card-title">({filme.ano})</h5>
                        <p>Nota: {filme.nota}</p>
                        <Assitido
                          javisto={filme.assistido}
                        />

                        <BotaoDetalhes id={filme.id} nota={filme.nota} />

                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )
          }
        })()}
      </div>
    </div>

  )
}
