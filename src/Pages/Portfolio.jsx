import React from 'react'
import desk from "../assets/desk1.jpeg"

function Portfolio() {
    return (
        <>
                   <section class="portfolio" id="portfolio">

                              <h1 class="heading"> my <span>portfolio</span> </h1>

                                    <div class="box-container">

                                            <div class="box">
                                               <img src={desk} alt=""/>
                                            </div>

                                            <div class="box">
                                                <img src={desk} alt=""/>
                                            </div>

                                            <div class="box">
                                                <img src={desk} alt=""/>
                                            </div>

                                            <div class="box">
                                                <img src={desk} alt=""/>
                                            </div>

                                            <div class="box">
                                                     <img src={desk} alt=""/>
                                            </div>

                                            <div class="box">
                                                    <img src={desk} alt=""/>
                                            </div>

                                    </div>

                  </section>

        </>
    )
}

export default Portfolio
