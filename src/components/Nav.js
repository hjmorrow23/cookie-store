import React, { Component } from 'react';
import styled from "styled-components";
import MainNav from "./styles/MainNav";



class Nav extends Component {
    closeNav(e) {
        // e.preventDefault();
        // const appWrapper = document.querySelector(".app-wrapper");
        // const navWrapper = document.querySelector(".nav-wrapper");
        // appWrapper.classList.add('full-screen');
        // navWrapper.style.display = "none";
        // console.log(appWrapper);
    }

    toggleCart(e) {
        e.preventDefault();
        const cartWrapper = document.querySelector('.cart-wrapper');
        cartWrapper.classList.toggle('cart-active');
    }

    showModal(e) {
        e.preventDefault();
        const overlay = document.querySelector('.overlay');
        const modal = document.querySelector('.modal');
        overlay.style.display = "block";
        let modalWidth = "calc(50% - " + (modal.offsetWidth/2) + "px)";
        let modalHeight = "calc(50% - " + (modal.offsetHeight/2) + "px)";
        modal.style.left = modalWidth;
        modal.style.top = modalHeight;
    }

    render() {
        return (
            <MainNav className="main-nav">
                <div className="logo">
                    {/* <img src={require("../assets/images/cookie.png")} /> */}
                </div>
                <ul>
                    <li>
                        <a href="">Shop</a>
                    </li>
                    <li>
                        <a href="" onClick={(e) => this.toggleCart(e)}>Cart</a>
                    </li>
                    <li>
                        <a href="">Orders</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="" onClick={(e) => this.showModal(e)}>Log In</a>
                    </li>
                </ul>
            </MainNav>
        );
    }
}

export default Nav;