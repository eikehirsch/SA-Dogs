import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about-wrapper paddings innerWidth flexCenter">
        <div className="left-container flexCenter">
            <h1>Quem somos</h1>
            <span>
            Você está procurando um companheiro fiel e amoroso? O <span className='negrito'>Projeto KeepDog</span> é uma iniciativa que visa encontrar lares amorosos para cães que foram resgatados de situações de abandono, maus-tratos ou simplesmente por terem perdido seus donos.
            </span>

            <span>
            No projeto de adoção de cachorros, você encontrará uma variedade de cães de diferentes tamanhos, idades e personalidades, cada um com sua própria história única. E não se preocupe se você nunca teve um cachorro antes, a equipe de adoção estará disponível para ajudá-lo com todas as suas perguntas e preocupações.</span>

            <span>
            Não perca a oportunidade de <span className='negrito'>mudar a vida de um cachorro</span> e de ganhar um novo companheiro fiel. Faça parte do Projeto KeepDog. Adote um cachorro e encontre o amor incondicional que apenas um cão pode oferecer!
            </span>
        </div>

        <div className="right-container ">
            <img className='adocao-imagem' src="adotar-dog.png" alt="" />
        </div>
    </section>
  )
}

export default About