import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
// import RedHeading from 'styles/Headers';
import styled from "styled-components";

const RedHeading = styled.h1`
    color: red;
`;

class App extends Component{
  render(){
    return(
      <div className="App">
        <RedHeading> Hello, World Man Person! </RedHeading>
      </div>
    );
  }
}

export default hot(module)(App);
