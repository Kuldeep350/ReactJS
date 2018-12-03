import React , { Component } from 'react';

class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            allUsers: [],
            radioGroup:{
                MEANstack: false,
                MERNstack: true,
                LAMPstack: false
            },
            checkboxGroup:{
                mongodb: false,
                express: false,
                react: true,
                node:false

            },
            selectValue:'node'
        }
        this.formHandler = this.formHandler.bind(this);
        this.cliclHandler = this.cliclHandler.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
    }

    formHandler(ev){
        // console.log(ev.target.value,'event',ev)
        this.setState({
            username: ev.target.value
        })
    }

    cliclHandler(ev){
        let currentUser = this.state.allUsers;
        currentUser.push(this.state.username);
        this.setState({
            allUsers: currentUser,
            username:''
        })
        console.log(this.state.allUsers)
    }
    radioHandler(ev){
        console.log(ev.target.value)
        let radioGroup = this.state.radioGroup;
        for(var key in radioGroup){
            radioGroup[key] =false
        }
       radioGroup[ev.target.value ] = ev.target.checked;
       this.setState({
           radioGroup: radioGroup
       })
    }
    checkboxHandler(ev){
        console.log(ev.target.value)
        let checkbox = this.state.checkboxGroup;
        checkbox[ev.target.value] = ev.target.checked;
        this.setState({
            checkboxGroup: checkbox
        })
    }
    selectHandler(ev){
        console.log(ev.target.value)
        this.setState({
            selectValue: ev.target.value
        })
    }
    emailHandler(ev){
        console.log(this.refs.sub.value)
    }

    render(){
        return(
                <div>
                    <h1>hello Forms</h1>
                    <label>
                        Email:<input type='email' ref='sub'/>     
                    </label>
                    <button onClick={this.emailHandler}>Subscribe</button>
                    <br/><br/>
                     <input type='text' name='username' value={this.state.username} onChange={this.formHandler}></input>
                    <br/>
                    Developers Category:<br/>
                    <label>
                        MEAN stack <input type='radio' name='devcategory' value='MEANstack'checked={this.state.radioGroup['MEANstack']} onChange={this.radioHandler}/>
                    </label>
                    <br/>
                    <label>
                        MERN stack <input type='radio' name='devcategory' value='MERNstack'checked={this.state.radioGroup['MERNstack']} onChange={this.radioHandler}/>
                    </label>
                    <br/>
                    <label>
                        LAMP stack <input type='radio' name='devcategory' value='LAMPstack' checked={this.state.radioGroup['LAMPstack']} onChange={this.radioHandler}/>
                    </label>
                    <br/>
                    Technologies:<br/>
                    <label>
                       MongoDB <input type='checkbox' name='tech' value='mongodb'checked={this.state.checkboxGroup['mongodb']} onChange={this.checkboxHandler}/>
                    </label>
                    <br/>
                    <label>
                        Express <input type='checkbox' name='tech' value='express'checked={this.state.checkboxGroup['express']} onChange={this.checkboxHandler}/>
                    </label>
                    <br/>
                    <label>
                        React <input type='checkbox' name='tech' value='react' checked={this.state.checkboxGroup['react']} onChange={this.checkboxHandler}/>
                    </label>
                    <br/>
                    <label>
                        Node <input type='checkbox' name='tech' value='node' checked={this.state.checkboxGroup['node']} onChange={this.checkboxHandler}/>
                    </label>
                    <br/> 
                    <select value={this.state.selectValue} onChange={this.selectHandler}>
                        <option value='react'>React</option>
                        <option value='node'>Node</option>
                        <option value='python'>Python</option>
                    </select>
                    <br/><br/>
                    <button onClick={this.cliclHandler}>Save User</button> 

                    {/* <p>{this.state.username}</p> */}
                </div>
        )
    }
}

export default Forms;