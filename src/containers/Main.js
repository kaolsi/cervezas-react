import React from 'react'
import { Switch,Route } from 'react-router-dom'
import IndexPage from '../views/IndexPage'
import CervezasPage from '../views/CervezasPage'
import ContactPage from '../views/ContactPage'
import NoMatch from '../views/NoMatch'

/*import './Main.css'
import Searchbox from './SearchBox'
import CervezasList from './CervezasList'
import Clock from './Clock'*/


export class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/cervezas" component={CervezasPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NoMatch} />
        </Switch>
      </main>
    )
  }
}

export default Main



//FUNCION
//const Main = ()=>{
//function Main() {
 /* return (
    <main>
      <Searchbox />
      <CervezasList />
      <Clock />
    </main>
  )
}*/

// CLASE
/* import React from 'react'
export class Main extends Component {
  render() {
    return (
      <main>
        <Searchbox />
        <CervezasList />
        <Clock />
      </main>
    )
  }
}*/
