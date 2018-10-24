import React from 'react'
import Searchbox from '../components/SearchBox'
import CervezasList from '../containers/CervezasList'

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
}
