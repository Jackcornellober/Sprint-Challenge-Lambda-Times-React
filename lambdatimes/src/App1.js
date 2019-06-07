import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

const App1 = (props) => {
    return (
      <div className="App">
        <TopBar logout = {props.logout}/>
        <Header />
        <Content />
      </div>
    );
  }
  
  export default App1;