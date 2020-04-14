import React, {Component} from 'react';
import TrailDetail from '../components/TrailDetail';
import CommentBox from "./CommentBox";
import LoginContainer from "./LoginContainer";

class TrailDetailContainer extends Component{
  render(){
    return(
      <div>
      <TrailDetail trail={this.props.trail}/>
      <CommentBox />
      <LoginContainer />
      </div>

    )
  }
}

export default TrailDetailContainer;
