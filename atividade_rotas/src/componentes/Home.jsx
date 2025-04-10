import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
         <div className='banner'>
         </div>
          <div className='textbanner'>
            <h1>Transformamos seus Desejos
            em Deliciosas Realidades</h1>
            <p>Chocolate caseiro,Bolos no pote e ovos de páscoa</p>
          </div>
     
        <div className='Cards'>
          <div className='card' >
            <img src="./boloPote.png" alt="" />
              <div >
                 <h5 >Card title</h5>
                  <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
          <div className='card' >
            <img src="./barra.png" alt="" />
              <div >
                 <h5 >Card title</h5>
                  <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
          <div className='card' >
            <img src="./torta.png" alt="" />
              <div >
                 <h5 >Card title</h5>
                  <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div className='qualidade'>
          <img src="./img2.png" alt="" />
          <div className='text1'>
            <h2>Nossa Qualidade</h2>
            <p> A Santo Cacau trabalha exclusivamente com produtos importados e de 1ª linha para garantir a qualidade em seu resultado;</p>
            <p>Os recheios têm, em sua grande maioria, a adição de produtos da linha Rich's® e Callebaut®, que garantem cremosidade e sabor incomparáveis;</p>
            <p>Produtos como os originais Nutella®, Rich's®, Callebaut®, Belcolade®, Nestle® e outros são alguns dos nossos ingredientes;</p>
            <p>A Massa Chiffon garante maciez e sabor, entre várias camadas profusas de recheio</p>
            <p>Além disso todo o Bolo é blindado com uma generosa camada de ganache meio amargo ou branco, antes de ser decorado.</p>
          </div>
        </div>
  </div>
  )
}

export default Home