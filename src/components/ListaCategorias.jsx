import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'

function ListaCategorias() {
  const navigate = useNavigate()
  const [categorias, setCategorias] = useState([])

  useEffect(()=>{
    busca('/categorias', setCategorias).catch(()=> navigate('/404'))
  },[navigate])

  return (
    <ul className="lista-categorias container flex">
      {
        categorias.map((categoria)=> (
          <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
              {categoria.nome}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default ListaCategorias;