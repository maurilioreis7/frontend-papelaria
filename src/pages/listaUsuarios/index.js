import React,{useState,useEffect} from "react";
import '../../global.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit,FiTrash } from "react-icons/fi";
import Barrasuperior from "../componentes/barrasuperior";

export default function Listausuarios(){
const navigate = useNavigate();
const [usuarios,setUsuarios] = useState([]);
const [quantidade,setQuantidade] = useState(0);

function mostrarusuarios(){
    const banco = JSON.parse(localStorage.getItem("usuarios")|| "[]")
    setQuantidade(banco.length)
    setUsuarios(banco);
}
function editarusuario(id){
 alert(`Estou editando usuário de id:${id}`)
 navigate(`/editarusuario/${id}`)
}

  const  excluirusuario = (id) => {
        confirmAlert({
          title: 'Excluir usuário',
          message: 'Deseja realmente excluir esse usuário?',
          buttons: [
            {
              label: 'Sim',
              onClick: () => {
                const banco = JSON.parse(localStorage.getItem("usuarios")|| "[]")
                const dadosvelhos = banco.filter(linha=>
                  {
                      return linha.id!=id
                  }
                  )
                  localStorage.setItem("usuarios",JSON.stringify(dadosvelhos))
                  mostrarusuarios();
              }
            },
            {
              label: 'Não',
              onClick: () => alert('Ação cancelada!')
            }
          ]
        });
      };

useEffect(()=>{
    mostrarusuarios()
},[])
    return(
<div className="dashboard-container">
<Barrasuperior />
<div className="header">
        <div className="menu">
            <Menu />
        </div>
        <div className="main">
            <Head title="Lista de Usuários" />
            <div>

                <Link to="/cadastrousuario" className='btn-novo'>Novo</Link>
            </div>
           <table>
            <tr>
             <th>ID</th>
             <th>Nome</th>
             <th>Email</th>
             <th></th>
             <th></th>
            </tr>
            re
                {
                  usuarios.map((linha)=>{
                     return(
                        <tr key={linha.toString()}>
                        <td>{linha.id}</td>
                        <td>{linha.nome}</td>
                        <td>{linha.email}</td>
                        <td>
                            <FiEdit size={24} color="blue" cursor="pointer" onClick={(e)=>{editarusuario(linha.id)}} />
                        </td>
                        <td>
                            <FiTrash size={24} color="red" cursor="pointer" onClick={(e)=>{excluirusuario(linha.id)}}/>
                        </td>
                        </tr>
                     )
                  })  
                }
     
             <tr>
              <th colSpan={5}>Total de Registros:{quantidade}</th>
   
             </tr>
           </table>



        </div>
        </div>
        
</div>
    )
}