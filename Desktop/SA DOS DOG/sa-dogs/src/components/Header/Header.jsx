import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className='flexCenter innerWidth nav-container'>
        <div className="flexCenter slogan-container">
            <img className="imagem-nav" src="./dog-logo.png" alt="" />
        </div>

        <div className="links-container">
            <ul className='flexCenter paddings link-items'>
                <li className='link-item'><a className='link' href=''>Sobre</a></li>
                <li className='link-item'><a className='link' href=''>Teste 1</a></li>
                <li className='link-item'><a className='link' href=''>Teste 1</a></li>
                <li className='link-item'><a className='link' href=''>Teste 1</a></li>
                <li className='link-item'><a className='link' href=''>Teste 1</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header