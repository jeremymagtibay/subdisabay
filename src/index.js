import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Howtoride from './views/howtoride'
import Howtodrive from './views/howtodrive'
import Location from './views/location'
import Getstarted from './views/getstarted'
import Contactus from './views/contactus'
import Map from './views/map'
import Download from './views/download'
import Home from './views/home'
import Contact from './views/contact'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Howtoride} path="/howtoride" />
        <Route exact component={Howtodrive} path="/howtodrive" />
        <Route exact component={Location} path="/location" />
        <Route exact component={Getstarted} path="/getstarted" />
        <Route exact component={Contactus} path="/contactus" />
        <Route exact component={Map} path="/map" />
        <Route exact component={Download} path="/download" />
        <Route exact component={Home} path="/" />
        <Route exact component={Contact} path="/contact" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
