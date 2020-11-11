import React, { Component } from 'react';
import '../scss/GalleryModal.scss'; 
import picArray from './Pictures.js';


class GalleryModal extends Component {
// const GalleryModal = ({ show, handleClose, index, src }) => {
    constructor(props) {
        super();

        this.state = {
            pictureChanged: false,
            // currentPicture: [],
            // counter: 0,
            currentIndex: props.index
        }
        
        // this.prevPicture = this.prevPicture.bind(this);
        // this.nextPicture = this.nextPicture.bind(this);
    }


    

    
    // nextPicture = () => {
    //     const {currentIndex} = this.state;
    //     let newIndex = currentIndex + 1
    //     // let currentSrc = this.props.src;
    //     // let counter = this.state.counter;
    //     this.setState({
    //         pictureChanged: true,
    //         currentIndex: newIndex
    //     })
    //     // console.log(`current index is ${currentIndex}`)
    //     // console.log(this.state.index)
    // }

    // nextPicture = () => {
    //     const {currentIndex} = this.state;
    //     // const newIndex = currentIndex === this.picArray.length - 1 ? 0 : currentIndex + 1;
    //     const newIndex = currentIndex + 1;
    //     this.setState({currentIndex: newIndex});
    // }
    
    render() {

        // this.props = { show, handleClose, index, src };
        
        // const showHideClassName = props.show ? "display-block" : "display-none";
        const showHideClassName = this.props.show ? "display-block" : "display-none";
        // const pics = {picArray};
        // const counter
        
        

        return (
            // show ?
                <div className={showHideClassName}>
                    <div className="pic-modal">
                        <div className="close-icon-wrapper" onClick={this.props.handleClose}>
                        {/* <div className="close-icon-wrapper" onClick={handleClose}> */}
                                <i className="far fa-window-close fa-2x"></i>
                        </div>
                        <div className="modal-content">
                            <i 
                            className="fas fa-chevron-left fa-2x"
                            // onClick={() => {this.prevPicture(1)} }
                            ></i>
                                {/* {
                                    !this.state.pictureChanged ? 
                                    <img src={this.props.src} alt="" /> 
                                    :
                                    <img src={picArray[this.state.currentIndex].src} alt="" />
                                } */}
                                    
                                {/* <img src={picArray[this.state.currentIndex].src} alt="" /> */}
                                <img src={this.props.src} alt="" />
                                {/* <img src={this.state.galleryImage} alt="" /> */}
                            <i 
                            className="fas fa-chevron-right fa-2x"
                            onClick={this.nextPicture}
                            
                            ></i>
                        </div>
                    </div>
                </div>
            // : null
        ) 
    }

    
};

export default GalleryModal;