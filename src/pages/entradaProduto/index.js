import { useState } from "react";
import Menu from "../componentes/menu";
import Head from "../componentes/head";
import Barrasuperior from "../componentes/barrasuperior";
import { useNavigate } from "react-router-dom";

import '../../global.css'

export default function Entradaproduto(){
    const navigate = useNavigate();
    const [id_produto,setId_produto] = useState("")
    const [quantidade,setQuantidade] = useState(0)
    const [valor_unitario,setValor_unitario] = useState("")
    const [data_entrada,setData_entrada] = useState("")


    
    const entrada={
        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
        id_produto,
        quantidade,
        valor_unitario,
        data_entrada,
    };
    function mostrarprodutos(){
        const banco = JSON.parse(localStorage.getItem("produtos")|| "[]")
        setQuantidade(banco.length)
        setId_produto(banco);
        setQuantidade(banco);
        setValor_unitario(banco);
        setData_entrada(banco);
    }
    function editarentrada(id){
     alert(`Estou editando produto de id:${id}`)
     navigate(`/listaentrada/${id}`)
    }
    
      const  excluirentrada = (id) => {
            confirmAlert({
              title: 'Excluir produto',
              message: 'Deseja realmente excluir esse produto?',
              buttons: [
                {
                  label: 'Sim',
                  onClick: () => {
                    const banco = JSON.parse(localStorage.getItem("produtos")|| "[]")
                    const dadosvelhos = banco.filter(linha=>
                      {
                          return linha.id!=id
                      }
                      )
                      localStorage.setItem("produtos",JSON.stringify(dadosvelhos))
                      mostrarprodutos();
                  }
                },
                {
                  label: 'Não',
                  onClick: () => alert('Ação cancelada!')
                }
              ]
            });
          };
    
    return(
    <div className="dashboard-container">
                <Barrasuperior />
            <div className="header">
                <div className="menu">
                    <Menu />
                </div>

                <div className="main">
            <Head title="Lista de entrada" />
            <div>

                <Link to="/listaentrada" className='btn-novo'>Novo</Link>
            </div>
           <table>
            <tr>
             <th>ID</th>
             <th>Id_Produto</th>
             <th>Quantidade</th>  
             <th>valor_Unitário</th>
             <th>Data_Entrada</th>
             <th></th>
             <th></th>
            </tr>
            
                {
                  entrada.map((linha)=>{
                     return(
                        <tr key={linha.toString()}>
                        <td>{linha.id_produto}</td>
                        <td>{linha.quantidade}</td>
                        <td>{linha.valor_unitario}</td>
                        <td>{linha.data_entrada}</td>
                        <td>
                            <FiEdit size={24} color="blue" cursor="pointer" onClick={(e)=>{editarentrada(linha.id)}} />
                        </td>
                        <td>
                            <FiTrash size={24} color="red" cursor="pointer" onClick={(e)=>{excluirentrada(linha.id)}}/>
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
 );
}
