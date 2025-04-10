import React from 'react'
import './Sabores.css'

const Sobre = () => {
  return (
    <div>
       <div className='inicio'>
          <img src="./img3.png" alt="" />
          <div className='text1'>
    <h2>Sabores</h2>
    <p>Trabalhamos com vários sabores e recheios.
    A disponibilidade dos sabores dependem do tipo de bolo.</p>
          </div>
        </div>
       <div className='sabores'>
         <div className='barra'>
           <div>
             <h1>Barra Recheada</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae modi fugit rerum saepe! Dolore aut eveniet ex vel a, molestiae vitae assumenda eius officiis cupiditate ducimus sit, necessitatibus repellendus.</p>
           </div>
            <div className='text1'>
            <ul>
                <li>Barra de Cenoura</li>
                <li>Red Velvet</li>
                <li>Brownie</li>
              </ul>
            </div>
          </div>
         <div className='bolo'>
           <div>
             <h1>Bolo de Pote</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae modi fugit rerum saepe! Dolore aut eveniet ex vel a, molestiae vitae assumenda eius officiis cupiditate ducimus sit, necessitatibus repellendus.</p>
           </div>
            <div className='text1'>
              <ul>
                <li>Red Velvet</li>
                <li>Ninho</li>
                <li>Brigadeiro</li>
                <li>Cenoura</li>
                <li>Bolo Indiano</li>
              </ul>
            </div>
          </div>
         <div className='torta'>
            <div>
              <h1>Tortinha</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae modi fugit rerum saepe! Dolore aut eveniet ex vel a, molestiae vitae assumenda eius officiis cupiditate ducimus sit, necessitatibus repellendus.</p>
            </div>
            <div className='text1'>
         <ul>
           <li>Morango</li>
           <li>Ferreto</li>
           <li>Limão</li>
         </ul>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Sobre