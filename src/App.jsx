import React from 'react'
import "./style/main.css"
import desk from "./assets/desk1.jpeg"
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Education from './Pages/Education'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import { useState } from 'react'

function App() {

    const [toggle,setToggle] = useState(false)
    const [classSet,setClassSet] = useState('header')

    const handleClick =()=>{
        setToggle(!toggle)
    }
    return (
        <>
             

            <Header toggle={toggle}  classSet={classSet}/>
                <div id="menu" class="fas fa-bars" onClick={handleClick}></div>
            <Home/>
            <About/>
            <Education/>
            <Portfolio/>
            <Contact/>
           

        </>
    )
}

export default App
