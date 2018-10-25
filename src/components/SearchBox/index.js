import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBox extends Component {
  static propTypes={
    filter: PropTypes.func.isRequired
  }
  state={
    disabled:true,
    busqueda: '',
    searchText: ''
  }

  handleChange=(evento)=>{
    const texto = evento.target.value
    /*if(evento.target.value){
      this.setState({disabled:false})
    }else{
      this.setState({disabled:true})
    }*/
    //this.setState({busqueda: texto})
    this.setState({disabled: texto ? false:true, busqueda: texto})
    this.props.filter(this.state.busqueda)
  }
  handleSubmit= evento =>{
    //Evitamos que nos envíe a otra URL
    evento.preventDefault();
    this.props.filter(this.state.busqueda)
  }

  render() {
    const {disabled}= this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit" disabled={this.state.disabled}>Buscar</button>
        </form>
      </div>
    )
  }
}
