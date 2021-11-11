import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import UniversalRouter from 'universal-router'

const routes = [
  { path: "/one", action: () => <h1>Page One</h1> },
  { path: "/two", action: () => <h1>Page Two</h1> },
  { path: "(.*)", action: () => <h1>Not Found</h1> }
];

const router = new UniversalRouter(routes)

function App() {
  const [component, setCompoennt] = useState<React.ReactNode>()
  useEffect(() => {
    router.resolve({ pathname: window.location.pathname })
      .then(setCompoennt)
  }, [window.location.pathname, setCompoennt])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <a href="/one"><p>One</p></a>
          <a href="/two"><p>Two</p></a>
          <a href="/404"><p>404</p></a>
        </div>
        <p>{component}</p>
      </header>
    </div>
  )
}

export default App
