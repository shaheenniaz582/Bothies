import React, {Component} from 'react';
import CommentBox from "./CommentBox";
import LoginContainer from "./LoginContainer";

class ReviewContainer extends Component{
  render(){
  //   if(!this.state.user){
  //   return null
  // }
    return(
      <div>
      <CommentBox/>
      <LoginContainer/>
      </div>
    )

  }
}

export default ReviewContainer;
