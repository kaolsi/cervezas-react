/*import React, { Component } from 'react'

export default class CervezasList extends Component {
  render() {
    return (
      <p>Lista de cervezas</p>
    )
  }
}*/

import React from 'react'
import PropTypes from 'prop-types'
import CervezasSnippet from '../components/Cervezas/CervezasSnippet';

const CervezasList = ({cervezas}) => {
  return (
    <div>
      {cervezas.map(cerveza=>(
      <CervezasSnippet 
      key={cerveza.nombre} 
      nombre={cerveza.nombre} 
      desc={cerveza.descripción}
      envase={cerveza.envase}/>
      ))}
    </div>
  )
}

CervezasList.propTypes = {
  cervezas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre:PropTypes.string.required,
      desc: PropTypes.string
    })
  ).isRequired
}

export default CervezasList

