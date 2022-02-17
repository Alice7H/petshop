import React, { useEffect, useState } from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import '../assets/css/blog.css'
import { Routes, Route, useParams, Link, useNavigate } from 'react-router-dom'
import { busca } from '../api/api'
import SubCategoria from '../paginas/SubCategoria'
import Pagina404 from '../paginas/Pagina404'

function Categoria() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [subCategorias, setSubCategorias] = useState([])

  useEffect(()=>{
    busca(`/categorias/${id}`, (categoria)=> setSubCategorias(categoria.subcategorias))
    .catch(()=> navigate('/404'))
  },[id, navigate])

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">
          Pet Notícias
        </h2>
      </div>
      <ListaCategorias />

      <ul className="lista-categorias container flex">
        { subCategorias.map((subcategoria)=>(
          <li className={`lista-categorias__categoria 
            lista-categorias__categoria--${id}`} key={subcategoria}>
              <Link to={`${subcategoria}`}>
                {subcategoria}
              </Link>
          </li>
        ))}
      </ul>
      <Routes>
          <Route index element={<ListaPost url={`/posts?categoria=${id}`}/>}/>
          <Route path=':subcategoria' element={<SubCategoria />}/>
          <Route path="*" element={<Pagina404/>} />
      </Routes>
    </>
  )
}

export default Categoria;