import Detalhes from "../../pages/detalhes"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function BotaoDetalhes({ id, nota }) {
    const [notaAtual, setNota] = useState('')

    function getNota(){
        setNota = nota;
        return notaAtual
    }

    return (
        <div>
            <Link to={`/detalhes/${id}`}>
                <button
                    type="button"
                    onClick={ () => getNota}
                >
                    Detalhes
                </button>
            </Link>
        </div>
    )
} 