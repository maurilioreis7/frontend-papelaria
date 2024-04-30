import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Logon from './pages/logon'
import Dashboard from './pages/dashboard'

import Cadastrousuario from './pages/cadastroUsuario'
import Listausuarios from './pages/listaUsuarios'
import Editarusuario from './pages/editarUsuario'

import Listaprodutos from './pages/listaProdutos'
import Cadastroproduto from './pages/cadastroProduto'
import Editarproduto from './pages/editarProduto'

import Entradaproduto from './pages/entradaProduto'







export default function Rotas(){
    return(
     <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Logon />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/cadastrousuario"  element={<Cadastrousuario />} />
        <Route path="/listausuario"  element={<Listausuarios />} />
        <Route path="/listaproduto"  element={<Listaprodutos />} />
        <Route path="/cadastroproduto"  element={<Cadastroproduto />} />
        <Route path="/editarusuario/:id"  element={<Editarusuario />} />
        <Route path="/editarproduto/:id"  element={<Editarproduto />} />
        <Route path="/listaentrada/:id"  element={<Entradaproduto />} />
        

        </Routes>
     
     </BrowserRouter>

    )
}

