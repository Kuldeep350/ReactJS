import React , { Component } from 'react';

class Logger extends Component {
        constructor(props){
            super(props);
            console.log('constructor runing')
        }

        componentWillMount() {
            console.log('component will mount method')
        }
        componentDidMount(){
            console.log('componet did mount')
        }
        componentWillReceiveProps(nextProps){
            console.log('nextProps',nextProps)
        }
        shouldComponentUpdate(newProps,newStates){
            console.log('should component update')
            console.log('New Props:', newProps)
            console.log('New State:', newStates)
            return true;
        }
        componentWillUpdate(nextProps,nextState){
            console.log('component will update')
            console.log('next Props:', nextProps)
            console.log('next State:', nextState)
        }
        componentDidUpdate(oldProps,oldState){
            console.log('component did update')
            console.log('old Props',oldProps)
            console.log('old State',oldState)
        }
        componentWillUnmount(){
            console.log('component will un mount')
        }
        
    render(){
        console.log('render method');
        return(
            <h1>{this.props.time}</h1>
        )
    }
}
export default Logger;