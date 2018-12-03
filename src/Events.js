import React, { Component } from 'react';
import Counter from './Counter';

class MyEvents extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
        // this.incrementCounter = this.incrementCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }
    // clickHandler(){
    //     console.log('Click Press');
    //}
    // incrementCounter(param,ev){
    //    console.log(ev,'ev');
    //    console.log(param,'param');
    //     this.setState({
    //         counter: this.state.counter +1
    //     })
    //}
    incrementCounter(){
        // console.log('increment');
        if(this.state.counter < 11){
            this.setState({counter: this.state.counter + 1}); 
        }
            console.log('already reached maximum count')
    }
    decrementCounter(){
        //  console.log('decrement'); 
         if(this.state.counter === 0){
            console.log('already reached minimum count');
         }else{
            this.setState({counter: this.state.counter - 1});
         }
    }
    render() {
        return(
            <div>
                {/* <h1>hello</h1> */}
                {/* <button onClick={function(){
                    console.log('first button');
                }}>First button </button>
                <button onClick={this.clickHandler}>Second button </button> */}
                {/* <button onClick={this.incrementCounter.bind(this,'hello')}>+</button>
                            <span>{this.state.counter}</span>
                <button onClick={this.incrementCounter.bind(this,'Events')}>+</button> */}
                <br/>
                <Counter counter= {this.state.counter} increment = {this.incrementCounter} decrement = {this.decrementCounter} />
            </div>
            )
    }
}

export default MyEvents;