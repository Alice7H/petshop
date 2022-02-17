import React from 'react'
import ListaPost from '../components/ListaPost'
import { useParams } from 'react-router-dom'

function SubCategoria() {
  const { subcategoria } = useParams();

  return (
    <ListaPost url={`/posts?subcategoria=${subcategoria}`}/>
  )
}

export default SubCategoria;