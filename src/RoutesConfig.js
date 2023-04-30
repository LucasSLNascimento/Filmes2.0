import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';
import Cadastro from './pages/cadastro';
import Erro from './pages/erro';

export default function RoutesConfig(){
    return(
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='planos' element={<Planos />} />
            <Route path='sobre/:Lucas' element={<Sobre />} />
            <Route path='detalhes/:filme' element={<Detalhes />} />
            <Route path='cadastro' element={<Cadastro />} />
            <Route path='*' element={<Erro />} />
        </Routes>
    )
}