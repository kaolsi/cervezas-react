import React, { Component } from 'react'

export default class Contactar extends Component {
  render() {
    return (
      <div>
        <form>
          <p>Nombre:</p><input type="text"/>
          <p>Mensaje:</p><input type="text"/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
