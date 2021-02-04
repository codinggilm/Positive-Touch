import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import '../scss/FullGallery.scss'; 
import picArray from './Pictures.js';


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
    }

    
    render() {
        
        const showHideClassName = this.state.showModal ? "display-block" : "display-none";
        let currIndex = this.state.index;
        
        return (
            <div>
                <Navbar />
                <section className="container tp">
                    <div className="gallery-grid pic-grid">
                    {
                        this.state.pictures.map(pic => {
                            return (
                                <img 
                                    src={pic.src}
                                    key={pic.id}
                                    onClick={ () => { this.setState({ 
                                        showModal: true, 
                                        index: pic.id })
                                        }
                                    } 
                                />
                            )
                        })
                    }
                    </div> 

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

                                { 
                                    this.state.index === 3 || this.state.index === 4 || this.state.index === 6 ?
                                    <div className="resized">
                                        <img src={picArray[this.state.index].src} alt="" />
                                    </div>
                                :   (
                                        this.state.index === 2 ? 
                                        <div className="resized-small">
                                            <img src={picArray[this.state.index].src} alt="" />
                                        </div>  
                                        :
                                        <img src={picArray[this.state.index].src} alt="" />
                                    )
                                
                                }
                                
                                <i 
                                    className="fas fa-chevron-right fa-2x" 
                                    onClick={() =>  this.nextPicture(currIndex)}>
                                </i>
                            </div>
                        </div>
                    </div>
                
                </section>

            </div>
        )
    }
};

export default FullGallery;