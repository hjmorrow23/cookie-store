import React, { Component } from 'react';
import HeroHeader from "./styles/HeroHeader";

class Hero extends Component {
    render() {
        return (
            <HeroHeader className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                       <h1 className="hero-heading">Hero Header</h1>
                        <a href="" className="hero-button">Hero Button</a> 
                    </div>
                    
                </div>  
            </HeroHeader>
        );
    }
}

export default Hero;