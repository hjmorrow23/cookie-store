import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import PostContent from "./components/Content";
import Modal from "./components/Modal";
// import RedHeading from 'styles/Headers';
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes);


const theme = {
  white: '#fff',
  grey: '#707070',
  black: '#000'
};

class App extends Component {
  render(){
    return(
      <div className="App">
        <ThemeProvider theme={theme}>
          <div id="app-wrapper" className="app-wrapper">
            <div className="nav-wrapper">
              <Nav></Nav>
              <Cart></Cart>
            </div>
            
            <div className="content">
              <Hero></Hero>
              <PostContent></PostContent>
            </div>
            <Modal></Modal>
          </div>
        </ThemeProvider>
        {/* <RedHeading> Hello, World Man Person! </RedHeading> */}
      </div>
      
    );
  }
}

export default hot(module)(App);


