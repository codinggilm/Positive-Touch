import React from 'react';
// import simpleParallax from 'simple-parallax-js';
import Navbar from '../../components/Navbar/Navbar';
// import Footer2 from '../../components/Footer/Footer2/Footer2';
import Footer from '../../components/Footer/Footer';
import '../../scss/Ellie2.scss';
import vic from '../../assets/victoria/vic5.jpg';
import vic2 from '../../assets/victoria/vic2.jpg';
import ellie1 from '../../assets/ellie/ellie1.png';
// import dog1 from '../../assets/img/dog7.png';

const Ellie2 = () => {
    return (
        <div>
            <Navbar />
            <main class="main">

                <section id="stickyAndLarge-section">
                <div class="ellie1 sticky section static static-one">

                    <div className="container ellie-container story-card ">
                        <p>I've had always dreamed about working with animals, especially dogs.</p>
                        <div></div>
                        <div></div>
                       
                    </div>
                </div>
                </section>

                <section id="stickyAndLarge-section">
                    <div className="ellie2 sticky">
                        <div className="container story-card ">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, modi? Sint officia expedita cumque doloribus? Ipsa magni ut quos dolor?</p>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>

{/* //***********************************TRYING PARALLAX ***********************/ }
                {/* <section>
                    <div class="ellie1 sticky section static static-one">
                        <div className="container ellie-container story-card ">
                            <p>I've had always dreamed about working with animals, especially dogs.</p>
                            <div></div>
                            <div></div>
                        
                        </div>
                    </div>
                </section>

                <section>
                    <div className="ellie2 sticky">
                        <div className="container story-card ">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, modi? Sint officia expedita cumque doloribus? Ipsa magni ut quos dolor?</p>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section> */}







                {/* <section>
                <div class="sticky section static static-one">

                    <div className="container ellie-container ">
                        <p>I remember as a young adult being glued to the television once a week religiously watching a new Channel 4 show. Victoria Stilwell’s, ‘It's Me or the Dog’. </p> */}
                        {/* <br/>
                        <p>Remembering the dream that I once had to become a dog trainer I looked up Victoria’s website and was amazed to find that she was running her first ever dog training and behaviour course in England...the rest as they say is history!</p> */}
                       
                    {/* </div>
                </div>
                </section> */}



                {/* <section class=" ellie2 section static static-one bg-dark">
                    <div className="container grid-container bg-white ">
                        <div className="meet-content flex-container">
                            <p>I remember as a young adult being glued to the television once a week religiously watching a new Channel 4 show. Victoria Stilwell’s, ‘It's Me or the Dog’. </p>
                        </div>
                        <div className="meet-image bg-pink flex-container">
                            <img src={vic} alt=""/>
                        </div>
                    </div>
                </section> */}

                {/* <section class=" ellie3 section parallax parallax-one">
                    <div className="container grid-container">
                        <div className="meet-content bg-pink flex-container">
                            <p>Remembering the dream that I once had to become a dog trainer I looked up Victoria’s website and was amazed to find that she was running her first ever dog training and behaviour course in England...the rest as they say is history!</p>
                        </div>
                        <div className="meet-image bg-dark flex-container">
                            <img src={vic2} alt=""/>
                        </div>
                    </div>
                </section>

                <section>
                <div class="ellie4 sticky section static static-one">

                    <div className="container ellie-container ">
                        <p>In 2016 i qualified from the Victoria Stilwell Academy with the highest grade of distinction..</p>
                        <div></div>
                        <div></div>
                       
                    </div>
                </div>
                </section>

                <section class="ellie5 section static static-two">
                    <div className="container grid-container">
                        <div className="meet-content bg-pink flex-container">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit praesentium placeat voluptatibus quia illo maiores incidunt hic architecto officia, reprehenderit necessitatibus sunt porro quas magnam est animi facere atque nulla?</p>
                        </div>
                        <div className="meet-image bg-dark flex-container">
                            <img src={ellie1} alt=""/>
                        </div>
                    </div>
                </section> */}

                {/* <section class="section parallax parallax-two"></section>
                <section class="section static static-three">Static</section> */}
            </main>

            {/* <section className="meet1">
                <div className="container">
                    <div className="meet-content bg-dark flex-container">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit praesentium placeat voluptatibus quia illo maiores incidunt hic architecto officia, reprehenderit necessitatibus sunt porro quas magnam est animi facere atque nulla?</p>
                    </div>
                    <div className="meet-image bg-pink flex-container">
                        <img src={vic} alt=""/>
                    </div>
                </div>
            </section> */}
            
            {/* <section className="meet2">
                <div className="container">
                    <div className="meet-content bg-pink flex-container">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit praesentium placeat voluptatibus quia illo maiores incidunt hic architecto officia, reprehenderit necessitatibus sunt porro quas magnam est animi facere atque nulla?</p>
                    </div>
                    <div className="meet-image bg-dark flex-container">
                        <img src={ellie1} alt=""/>
                    </div>
                </div>
            </section> */}
           
            {/* <section className="meet3">
                <div className="container">
                    <div className="meet-content bg-pink flex-container">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit praesentium placeat voluptatibus quia illo maiores incidunt hic architecto officia, reprehenderit necessitatibus sunt porro quas magnam est animi facere atque nulla?</p>
                    </div>
                    <div className="meet-image bg-dark flex-container">
                        <img src={ellie1} alt=""/>
                    </div>
                </div>
            </section> */}
                
            <Footer />

        </div>
    )
};

export default Ellie2;