import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import GalleryModal from './GalleryModal';
import '../scss/Gallery.scss'; 
import picArray from './Pictures.js';


class Gallery extends Component {
        
    state = { 
        show: false,
        pictures: picArray,
        imgsrc: '',
        index: 0
    }

    
    openModal = (src) => {
        this.setState({ show: true, imgsrc: src })
        // this.setState({ show: true })
        // console.log('pic clicked')
        // console.log(this.state.imgsrc)
    }

    hideModal = () => {
        this.setState({ show: false, imgsrc: '' });
    }

    render() {

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
                                    onClick={
                                        ()=>this.setState({ show: true, index: pic.id, imgsrc: pic.src }
                                        ,
                                        console.log(this.state.index)
                                        )
                                        
                                        }
                                    // onClick= { 
                                    //     () => {
                                    //         let src;
                                    //         src = pic.src;
                                    //         (src) => this.openModal
                                    //     }
                                    // }
                                />
                            )
                        })
                        
                    }
                        {/* <img 
                            src={picArray[0].src} 
                            onClick={this.openModal} 
                            key={picArray[0].id}
                            />
                        <img src={picArray[1].src} alt=""/>
                        <img src={picArray[2].src} alt=""/>
                        <img src={picArray[3].src} alt=""/>
                        <img src={picArray[4].src} alt=""/>
                        <img src={picArray[5].src} alt=""/>
                        <img src={picArray[6].src} alt=""/>
                        <img src={picArray[7].src} alt=""/>
                        <img src={picArray[8].src} alt=""/>
                        <img src={picArray[9].src} alt=""/> */}
                    </div> 
                
                {/* { this.state.show ? <GalleryModal /> : null } */}

                <GalleryModal 
                    show={this.state.show} 
                    index={this.state.index}
                    src= {this.state.imgsrc}
                    handleClose={this.hideModal}
                    pictures={this.state.pictures}
                    />
                
                </section>

            </div>
        )
    }
};

export default Gallery;