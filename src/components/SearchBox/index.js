import React, { Component } from 'react'
export default class SearchBox extends Component {
  state={
    disabled:true,
    busqueda: ''
  }

  handleChange=(evento)=>{
    /*if(evento.target.value){
      this.setState({disabled:false})
    }else{
      this.setState({disabled:true})
    }*/
    this.setState({busqueda:evento.target.value})
    this.setState({disabled: evento.target.value ? false:true})
  }

  render() {
    const {disabled}= this.state
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit" disabled={this.state.disabled}>Buscar</button>
        </form>
      </div>
    )
  }
}
