import React, { Component } from 'react'
import './App.css';

import MemoComponent from './components/memo/MemoComponent'
import ClickComponent from './components/hoc/ClickComponent';
import HoverComponent from './components/hoc/HoverComponent';
import RefComponent from './components/refs/RefComponent';
import PortalComponents from './components/portals/PortalComponents';

import AComponent from './components/context/AComponent';
import { UserProvider } from './components/context/userContext';
import HooksCounter from './components/hooks/HooksCounter';
import HooksCounterEffect from './components/hooks/HooksCounterEffect';




export class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: 'Guest'
    }
  }

  // componentDidMount(){
  //   setInterval(() => {
  //     this.setState({name:"User"})
  //   }, 2000);
  // }

  render() {
    return (
      <div className="App">
        {/* <MemoComponent name={this.state.name}/> */}
        {/* <ClickComponent /> */}
        {/* <HoverComponent /> */}
        {/* <RefComponent /> */}
        {/* <PortalComponents /> */}
        <UserProvider value="Shakti">
            <AComponent />
        </UserProvider> 
        <HooksCounter />
        <HooksCounterEffect />
      </div>
    )
  }
}

export default App

