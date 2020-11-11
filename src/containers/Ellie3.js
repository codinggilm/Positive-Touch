import React from 'react';
// import simpleParallax from 'simple-parallax-js';
import Navbar from '../components/Navbar/Navbar';
// import Footer2 from '../../components/Footer/Footer2/Footer2';
import Footer from '../components/Footer/Footer';
import FullGallery from '../components/FullGallery';
import '../scss/Ellie3.scss';
import vic from '../assets/victoria/vic5.jpg';
// import vic2 from '../assets/victoria/vic2.jpg';
import ellie1 from '../assets/ellie/ellie1.png';
// import ellie2 from '../assets/ellie/ellie2.png';
import ellie6 from '../assets/ellie/ellie7.png';
// import dog7 from '../assets/img/dog7.jpg';

const Ellie3 = () => {
    return (
        <div>
            <Navbar />
                <main className="container tp" id="stories-container">

                <p className="meet-title">Hi, I'm Ellie.</p>
                    <div id="stories">
                        <div className="story story-left story-container bg-1">
                            <div className="story-text">
                                <p className="story-lead">How it all started..</p>
                                <p>I've had always dreamed about working with animals, especially dogs.!</p>
                                <br/>
                                <p>I remember as a young adult being glued to the television once a week religiously watching a new Channel 4 show. Victoria Stilwell’s, ‘It's Me or the Dog’.</p>
                                <br/>
                                <p>Remembering the dream that I once had to become a dog trainer I looked up Victoria’s website and was amazed to find that she was running her first ever dog training and behaviour course in England...the rest as they say is history!</p>
                            </div>
                            <img src={vic} alt="" className="elliePic"/>
                        </div>
                        {/* <div className="story story-right story-container bg-2">
                            <img src={vic2} alt=""/>
                            <p>Remembering the dream that I once had to become a dog trainer I looked up Victoria’s website and was amazed to find that she was running her first ever dog training and behaviour course in England...the rest as they say is history!</p>
                        </div> */}
                        {/* <div className="story story-left story-container bg-1">
                            <p>In 2016 i qualified from the Victoria Stilwell Academy with the highest grade of distinction.</p>
                            <img src={ellie2} alt=""/>
                        </div> */}
                        <div className="story story-right story-container bg-2">
                            <img src={ellie1} alt="" className="elliePic"/>
                            <div className="story-text">
                                <p className="story-lead">The training</p>
                                <p>In 2016 i qualified from the Victoria Stilwell Academy with the highest grade of distinction.</p>
                                <p>I was assigned my own personal mentor throughout the duration of my course and I had to complete weekly practical assessments and online written exams, the faculty were not wrong when they said the course was intensive.</p>
                                <br/>
                                <p>As stated above, I completed the course with the highest grade of Distinction and have since set up ‘Positive Touch’.</p>
                            </div>
                        </div>
                        <div className="story story-left story-container bg-1">
                            <div className="story-text">
                                <p className="story-lead">Moving forward</p>
                                <p>I had always dreamed about working with animals, especially dogs but sometimes our life choices take us elsewhere or there is no opportunity to fulfil your dreams so up until 2016, when I qualified from the Victoria Stilwell Academy with the highest grade of Distinction, I had worked for over 14 years with disadvantaged children in private children’s homes and then Children’s Services within the Looked After Children’s department.</p>
                            </div>
                            <img src={ellie6} alt="" className="elliePic"/>
                        </div>

                        <hr/>

                        <div id="gallery">
                            <p>See my journey so far:</p>
                            <FullGallery />
                        </div>

                        <div className="vs">
                            <h3 className="vs-text">
                                To find out more about the Victoria Stilwell Academy, please click on the button below
                            </h3>
                            <a href="https://www.vsdogtrainingacademy.com/">Take me there!</a>
                        </div>
                    </div>
                    
                </main>
                
        
 
                
            <Footer />

        </div>
    )
};

export default Ellie3;