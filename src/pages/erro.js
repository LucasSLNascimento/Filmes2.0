import { useLocation } from 'react-router-dom';

export default function Erro() {
    const location = useLocation();

    return (
    <div class='text-center'>
        <div class="alert alert-danger" role="alert" col-8>
            <h4 class="alert-heading">Erro inesperado</h4>
            <p>Olá usuário parece que você está tentando acessar {location.pathname}.</p>
            <p class="mb-0">Porém ela não existe em nosso site, por favor tente uma de nossas opções no menu na parte superior da tela.</p>
            <p>Ou clique em <a href="/" class="alert-link">HOME</a>. Para voltar para a página principal.</p>
        </div>
    </div>
        


    )

}