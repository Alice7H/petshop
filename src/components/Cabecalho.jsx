import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imagem from '../assets/img/doguito.svg'
import '../assets/css/componentes/cabecalho.css'

function Cabecalho() {
  const [active, setActive] = useState('');

  return (
    <header className="cabecalho container">
      <div className={`menu-hamburguer menu-hamburguer--${active}`} 
       onClick={()=>setActive('ativo')}
      >
        <span className="menu-hamburguer__icone"></span>
      </div>
      <div className="cabecalho-container">
        <a href="/" className="flex flex--centro">
          <img className="cabecalho__logo" src={imagem} alt="Logo Doguito" />
          <h1 className="cabecalho__titulo">Petshop</h1>
        </a>
      </div>
      <nav className={`menu-cabecalho menu-cabecalho--${active}`}>
        <button type="button" tabindex="0" className="menu-cabecalho__fechar" 
         onClick={()=>setActive('')} id="fechar" aria-label="Fechar menu"
        />
        <ul className="menu-itens">     
          <li><Link className="menu-item menu-item--entrar" to="#">Entrar</Link></li>
          <li><Link className="menu-item" to="/">Blog</Link></li>
          <li><Link className="menu-item" to="#">Produtos</Link></li>
          <li><Link className="menu-item" to="sobre">Sobre</Link></li>
        </ul>
      </nav>
      <div className="menu--background"></div>
    </header>
  )
}
export default Cabecalho;