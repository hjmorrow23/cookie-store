import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Modal extends Component {

    closeModal(e) {
        e.preventDefault();
        const overlay = document.querySelector(".overlay");
        overlay.style.display = "none";
    }

    render() {
        return (
            <div className="overlay">
                <div className="modal">
                <a href="" className="close-modal" onClick={(e) => this.closeModal(e)}><FontAwesomeIcon icon="times" /></a>
                <p>Some Content</p>
                <p>Some Content</p>
                <p>Some Content</p>
                <p>Some Content</p>
                <p>Some Content</p>
                </div>
            </div>
        );
    }
};

export default Modal;