import React from 'react'
import '../../global.css'
import Head from '../componentes/head'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'

export default function Dashboard(){
   return(
    <div className="dashboard-container">
        <div className='menu'>
     
        <Menu />
        </div>
        <div className="maian">
            <Head />
            
        <h1>Página Principal</h1>
        </div>
    </div>

   )

}