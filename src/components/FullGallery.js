import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Media from 'react-media';
import picArray from './Pictures.js';
import '../scss/FullGallery.scss'; 

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';


SwiperCore.use([Navigation, Pagination]);

 
class FullGallery extends Component {

    state = { 
        showModal: false,
        pictures: picArray,
        index: 0    
    }

    hideModal = () => {
        this.setState({ 
            showModal: false,
            index: this.state.index
        })
    }

    previousPicture = (currIndex) => {
        let newIndex;
        currIndex === 0 ? newIndex = 9 : newIndex = currIndex - 1;
        this.setState({ index: newIndex });
    }

    nextPicture = (currIndex) => {
        let newIndex;
        currIndex === 9 ? newIndex = 0 : newIndex = currIndex + 1;
        this.setState({ index: newIndex });
    };


    render() { 
        const showHideClassName = this.state.showModal ? "display-block" : "display-none";
        let currIndex = this.state.index;
        
        const slides = [];
        for (let i=0; i < picArray.length; i++) {
            slides.push(
                <SwiperSlide tag="li" key={`slide-${i}`}>
                    <img src={picArray[i].src} alt=""/>
                </SwiperSlide>
            )
        }

        
        
        return (
            <div>
                <section className="container tp">
                    <div className="gallery-grid pic-grid">
                    {
                        this.state.pictures.map(pic => {
                            return (
                                <img 
                                    src={pic.src}
                                    alt="pic"
                                    key={pic.id}
                                    onClick={ () => {this.setState({ showModal: true, index: pic.id })}} 
                                />
                            )
                        })
                    } 
                    </div>

                    {/* Mobile ************************************************************************************** */}
                    <Media query="(max-width: 599px)" render={() =>
                        (   <div className={showHideClassName}>
                                <div className="pic-modal">
                                    <div className="modal-content">
                                        <div className="close-icon-wrapper" onClick={this.hideModal}>
                                                <i className="far fa-window-close fa-2x"></i>
                                        </div>
                                        <Swiper id="main" tag="section" wrapperTag="ul" pagination navigation>
                                            {slides}
                                        </Swiper>                                        
                                    </div>  
                                </div>
                            </div>
                        )}
                    />

                    {/* Web ************************************************************************************** */}
                    <Media query="(min-width: 599px)" render={() =>
                        (
                            <div className={showHideClassName}>
                                <div className="pic-modal">
                                    <div className="close-icon-wrapper" onClick={this.hideModal}>
                                            <i className="far fa-window-close fa-2x"></i>
                                    </div>
                                    <div className="modal-content">
                                        <i 
                                            className="fas fa-chevron-left fa-2x" 
                                            onClick={() => this.previousPicture(currIndex)}>
                                        </i>
                                            <img 
                                                src={picArray[this.state.index].src} 
                                                alt="pic" 
                                                onClick={() => this.nextPicture(currIndex)} 
                                            />
                                        <i 
                                            className="fas fa-chevron-right fa-2x" 
                                            onClick={() =>  this.nextPicture(currIndex)}>
                                        </i>
 
                                        {/* { 
                                            this.state.index === 3 || this.state.index === 4 || this.state.index === 6 ?
                                            <div className="resized">
                                                <img 
                                                    src={picArray[this.state.index].src} 
                                                    alt="" 
                                                    onClick={() =>  this.nextPicture(currIndex)}    
                                                />
                                            </div>
                                        :   (
                                                this.state.index === 2 ? 
                                                <div className="resized-small">
                                                    <img 
                                                        src={picArray[this.state.index].src} 
                                                        alt="" 
                                                        onClick={() => this.nextPicture(currIndex)}    
                                                    />
                                                </div>  
                                                :
                                                <img 
                                                    src={picArray[this.state.index].src} 
                                                    alt="" 
                                                    onClick={() => this.nextPicture(currIndex)}    
                                                />
                                            )
                                        
                                        } */}
                                        
                                    </div>
                                </div>
                            </div>
                        )}
                    /> 
                
                </section>

            </div>
        )
    }
};

export default FullGallery;