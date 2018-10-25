import React, { Component } from 'react'
import Searchbox from '../components/SearchBox'
import CervezasList from '../containers/CervezasList'
//import PropTypes from 'prop-types'


export default class CervezasPage extends Component {
  //Implemetacion ajax: rccp
  state = {
    cervezas: [],
    error: '',
    cervezasfiltradas: []
  }
  componentDidMount=()=> {
    this.setState({error: ''})
    //console.log("Inicio fetch")
    fetch('http://localhost:8080/api/cervezas')
      .then(response => {
        console.log("recibiendo respuesta")
        return response.json()
      })
      .then(cervezas => {
        this.setState({ cervezas })
        console.log("estado seteado")
      })
      .catch(error=>{
        console.log("Este es el error: "+error)
        this.setState({error})
      })
  }
  //Fin Implemetacion ajax

  //Dos listas una con todas las cervezas y otra con filtradas
  //Función filtrado
  handleFilter = searchText =>{
    const {cervezas} = this.state
    const aux = cervezas.filter(cerveza=>{
      return cerveza.nombre.includes(searchText) || cerveza.descripción.includes(searchText)
    })
    this.setState({cervezasfiltradas: aux})
  }

  render() {
    const {cervezas, cervezasfiltradas, error}=this.state
    return (
      <div>
        <Searchbox filter={this.handleFilter}/>
        <CervezasList cervezas={cervezasfiltradas}/>
      </div>
    )
  }
}

/*
export default function CervezasPage() {
  const cervezas = [
    {nombre: 'Ambar', desc: 'Cerveza de Aragón'},
    {nombre: 'Coronita', desc: 'Cerveza mejicana'}
  ]
  return (
    <div>
      <Searchbox />
      <CervezasList cervezas={cervezas}/>
    </div>
  )
}*/
