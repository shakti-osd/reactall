import React, { Component } from 'react'

const withCounter2 = WrappedComponent => {

class WithCounter2 extends Component {
    constructor(props){
        super(props)

        this.state = {
            count:0
        }
    }

    incrementCount = () => {
        this.setState((prevState) =>{
            return { count: prevState.count + 1}
        })
    }

    decrementCount = () => {
        this.setState((prevState) =>{      

                if(prevState.count <= 0 ){
                    alert("Can't reduce below 0");
                    return {count: prevState.count}
                }                  
                
                return  {count: prevState.count - 1}            
        })
    }



    render() {
        return (
            <WrappedComponent 
                count={this.state.count}
                incrementCount={this.incrementCount}
                decrementCount={this.decrementCount}
                {...this.props}
            />
        )
    }
}

return WithCounter2

}

export default withCounter2