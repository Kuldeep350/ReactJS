import React, { Component } from 'react';

class Method extends Component {
    myFaceBookLink(){
        return'https://www.facebook.com '
    }
    facebookUser(){
        return 'kuldeep singh'
    }
    render(){
        return(
            <div>
                <p>My Facebook ID:<a href={this.myFaceBookLink()}>{this.facebookUser()}</a></p>
            </div>
        )
    }
}
export default Method;