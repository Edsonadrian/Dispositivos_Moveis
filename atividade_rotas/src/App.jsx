import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './componentes/Home'
import Sabores from './componentes/Sabores'
import Contato from './componentes/Contato'
import './app.css'

function App() {

  return (
    <>
     <Router>
       <div>
 
        <nav>
        <div className='logo'>
            <img src="/logo.png" alt="logo" />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sabores">Sabores</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
          
        </nav>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sabores" element={<Sabores />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
     
       </div>
       <div className="footer">
       feito por Edson e Maria Clara
     </div>
     </Router>

    </>
 
  )
}

export default App
