import React from 'react'

function Contact() {
    return (
        <>
               <section class="contact" id="contact">

                    <h1 class="heading"> <span>contact</span> me </h1>

                            <div class="row">

                                <div class="content">

                                    <h3 class="title">contact info</h3>

                                    <div class="info">
                                        <h3> <i class="fas fa-envelope"></i> infoani7@gmail.com </h3>
                                        <h3> <i class="fas fa-phone"></i> +9686733974 </h3>
                                        <h3> <i class="fas fa-phone"></i> +9686733974 </h3>
                                        <h3> <i class="fas fa-map-marker-alt"></i> Bengaluru,BTM LAYOUT 2nd stage </h3>
                                    </div>

                                </div>

                                <form action="">

                                    <input type="text" placeholder="name" class="box"/>
                                    <input type="email" placeholder="email" class="box"/>
                                    <input type="text" placeholder="project" class="box"/>
                                    <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textarea>
                                    <button type="submit" class="btn"> send <i class="fas fa-paper-plane"></i> </button>

                                </form>

                    </div>

            </section>
        </>
    )
}

export default Contact
