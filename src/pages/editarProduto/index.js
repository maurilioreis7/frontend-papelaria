import { useEffect, useState } from "react"
import Menu from "../componentes/menu"
import Head from "../componentes/head"
import {useNavigate,useParams, Link} from "react-router-dom"
import Barrasuperior from "../componentes/barrasuperior"

import '../../global.css'

export default function Editarproduto(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [status,setStatus] = useState("")
    const [descricao,setDescricao] = useState("")
    const [quantidade_minima,setQuantidade_minima] = useState()
    const [quantidade_maxima,setQuantidade_maxima] = useState([])


    const produto={
        id:id,
        status,
        descricao,
        quantidade_minima,
        quantidade_maxima,
    };

    useEffect(()=>{
       
        exibirdados()
    },[])


    const exibirdados=()=>{
    
        const banco = JSON.parse(localStorage.getItem("produtos")|| "[]")
        banco.filter(linha=>{
           return linha.id===id
        }
        ).map(value=>{
            
                setStatus(value.status)
                setDescricao(value.descricao)
                setQuantidade_minima(value.quantidade_minima)
                setQuantidade_maxima(value.quantidade_maxima)
          

            
        }
       
        )
     
        
      
    
    }
    const salvardados=(e)=>{
      e.preventDefault();
     const banco = JSON.parse(localStorage.getItem("produtos")|| "[]")
     const dadosvelhos = banco.filter(linha=>
        {
            return linha.id!=id
        }
        )
     dadosvelhos.push(produto)
     console.log(dadosvelhos)
     localStorage.setItem("produtos",
      JSON.stringify(dadosvelhos))
    alert("Dados Salvos com Sucesso!!!!!")
     navigate("/listaproduto")
    }
    return(
        <div className="dashboard-container">
                <Barrasuperior/>
                <div className="header">
                    <div className="menu">
                        <Menu />
                    </div>
                    <div className="main">
                        <Head title="Editar Produto" />
                        <form onSubmit={salvardados} >
                    
                           <input
                           type="text"
                           placeholder="Status"
                           value={status}
                           onChange={(e)=>setStatus(e.target.value)}
                    
                           />
                           <input
                           type="text"
                           placeholder="Descrição"
                           value={descricao}
                           onChange={(e)=>setDescricao(e.target.value)}
                           />
                           <input
                           type="text"
                           placeholder="Quantidade Minima"
                           value={quantidade_minima}
                           onChange={(e)=>setQuantidade_minima(e.target.value)}
                           />
                           <input
                           type="text"
                           placeholder="Quantidade Maxima"
                           value={quantidade_maxima}
                           onChange={(e)=>setQuantidade_maxima(e.target.value)}
                           />
                           <button className="btn-salvar">
                            Salvar
                           </button>
                    
                        </form>
                    </div>
                </div>
        </div>
            )
}