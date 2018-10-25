import React from 'react'
import PropTypes from 'prop-types'

const CervezasSnippet = ({nombre,desc, envase}) =>{
  return (
    <article>
      <h1>{nombre}</h1>
      {desc ? <p>{desc}</p>: ''}
      {envase ? <p>Tipo de envase: {envase}</p>: ''}
    </article>
  )
}

CervezasSnippet.propTypes = {
  nombre: PropTypes.string.isRequired,
  desc: PropTypes.string,
  envase: PropTypes.string
}

export default CervezasSnippet

