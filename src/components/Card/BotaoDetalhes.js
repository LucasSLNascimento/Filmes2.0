import { Link } from 'react-router-dom';

export default function BotaoDetalhes({id}) {

    return (
        <div>
            <Link to={`/detalhes/${id}`}>
                <button
                    type="button"
                >
                    Detalhes
                </button>
            </Link>
        </div>
    )
}
