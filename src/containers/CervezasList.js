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

const CervezasList = () => {
  const {cervezas} = this.props
  return (
    <div>
      {cervezas.map(cerveza=>(
      <CervezasSnippet nombre={cerveza.nombre} desc={cerveza.desc}/>
      ))}
    </div>
  )
}

CervezasList.propTypes = {
  cervezas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre:PropTypes.string.required,
      desc: PropTypes.string
    }).required
  )
}

export default CervezasList

