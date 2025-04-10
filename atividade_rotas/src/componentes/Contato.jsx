import React from 'react'
import './Contato.css'

const Contato = () => {
  return (
    <div className='tudo'>
        <h1>Entre em contato e faça seu orçamento gratuito </h1>
        <p>Pedidos devem ser feitos com <strong>10 dias de antecedência</strong></p>
        <p>Entregamos somente para Grande São Paulo e regiões próximas</p>
        <div className="fundo"><img src="" alt="" /></div>
        <div className="contatos">
      
          <div className="telefone">
            <img src="./whatsapp.png" alt="" /> 
             <div>
          <h2>Whatsapp</h2>
             <p>Entre em contato</p>
          </div>
          </div>
          <div className="email">
            <img src="./o-email.png" alt="" />
          <div>
            <h2>Whatsapp</h2>
            <p>Emailteste@santo.com.br</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Contato