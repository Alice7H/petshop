import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/post.css'

function Post() {
  const [post, setPost] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    busca(`/posts/${id}`, setPost)
    .catch(()=>{
      navigate('/404')
    })
  },[id,navigate])

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">
          {post.title}
        </h2>
        <p className="cartao__texto">
          {post.body}
        </p>
      </article>
    </main>
  );
}

export default Post;