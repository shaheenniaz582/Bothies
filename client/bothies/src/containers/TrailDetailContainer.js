import React, {Component} from 'react';
import TrailDetail from '../components/TrailDetail';

class TrailDetailContainer extends Component{
  render(){
    return(
      <TrailDetail trail={this.props.trail}>
      </TrailDetail>
    )
  }
}

export default TrailDetailContainer;
