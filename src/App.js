import React, { Component, useState } from 'react'
import './App.css';

import MemoComponent from './components/memo/MemoComponent'
import ClickComponent from './components/hoc/ClickComponent';
import HoverComponent from './components/hoc/HoverComponent';
import RefComponent from './components/refs/RefComponent';
import PortalComponents from './components/portals/PortalComponents';
import ParentComponent from './components/forwardRef/ParentComponent';

// import AComponent from './components/context/AComponent';
// import { UserProvider } from './components/context/userContext';

// import HooksCounter from './components/hooks/HooksCounter';
// import HooksCounterEffect from './components/hooks/HooksCounterEffect';
// import ClickComponent2 from './components/hoc/ClickComponent2';
// import FileUpload from './components/files/FileUpload';

// import UseStateComponent from './hooks/UseStateComponent'
// import ObjectStateComponent from './hooks/ObjectStateComponent';
// import ArrayStateComponent from './hooks/ArrayStateComponent';
// import CComponent from './components/context/CComponent';

// import AComponent from './nested/AComponent';
// import BComponent from './nested/BComponent'
 import ParentInput from './components/passmethod/ParentInput';


export class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: 'Guest'
    }

    this.fRef = React.createRef();
  }

  // componentDidMount(){
  //   setInterval(() => {
  //     this.setState({name:"User"})
  //   }, 2000);
  // }

  componentDidMount(){
    console.log(this.fRef)
  }

  render() {
    return (
      <div className="App">
        {/* <MemoComponent name={this.state.name}/> */}
        {/* <ClickComponent /> */}
        {/* <HoverComponent /> */}
        {/* <RefComponent /> */}
        {/* <PortalComponents /> */}
        {/* <UserProvider value="Shakti">
            <AComponent />
        </UserProvider> 
        <HooksCounter />*/}
        {/* <HooksCounterEffect /> 

        <ClickComponent2 /> */}

        {/* <FileUpload /> */}


        {/* Hooks */}

        {/* <UseStateComponent /> */}
        {/* <ObjectStateComponent /> */}
        {/* <ArrayStateComponent /> */}
        {/* <UserProvider value="shakti">
          <CComponent />
        </UserProvider> */}

        {/* <AComponent name="A">
            <BComponent name="B1" ref={this.fRef}/>
            <BComponent name="B2" />
            <BComponent name="B3">B3 Component Child</BComponent>
        </AComponent> */}
        <ParentInput />
        <ParentComponent />
      </div>
    )
  }
}

export default App

