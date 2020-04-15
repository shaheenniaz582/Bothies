import React, {Component} from 'react';
import TrailDetail from '../components/TrailDetail';
import CommentBox from "./CommentBox";
import LoginContainer from "./LoginContainer";

class TrailDetailContainer extends Component{

constructor(props){
  super(props)

  this.state = {
    loggedInUser: null
  }

  this.userLoggedIn = this.userLoggedIn.bind(this);
}

userLoggedIn(user){
  this.setState({ loggedInUser: user})
}

  render(){
    return(
      <div>
      <TrailDetail trail={this.props.trail}/>
      <CommentBox trail={this.props.trail} loggedInUser = {this.state.loggedInUser}/>
      <LoginContainer userLoggedIn={this.userLoggedIn}/>
      </div>

    )
  }
}

export default TrailDetailContainer;
