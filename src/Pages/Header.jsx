import React from 'react'
import { useState } from 'react'
import desk from "../assets/desk1.jpeg"

function Header({toggle,classSet}) {
  
    return (
        <>
               <header className='header'>

                        <div class="user">
                            <img src={desk} alt=""/>
                            <h3 class="name">Animesh Awasthi</h3>
                            <p class="post">front end developer</p>
                        </div>
                         

                        <nav class="navbar">
                            <ul>
                                <li><a href="#home">home</a></li>
                                <li><a href="#about">about</a></li>
                                <li><a href="#education">education</a></li>
                                <li><a href="#portfolio">portfolio</a></li>
                                <li><a href="#contact">contact</a></li>
                            </ul>
                            
                        </nav>

                </header>
        </>
    )
}

export default Header
