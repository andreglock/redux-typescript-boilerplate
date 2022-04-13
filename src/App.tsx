import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'
import TicTacToe from './pages/TicTacToe'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/tictactoe" component={TicTacToe} />
      </Switch>
    </HashRouter>
  )
}

export default App
