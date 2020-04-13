import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MapContainer from './MapContainer'
import ReviewContainer from './ReviewContainer'
import HomeContainer from './HomeContainer'



class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <Router>
       <Fragment>

         <Switch>

           <Route exact path="/" component={HomeContainer}/>

           <Route exact path="/map" component={MapContainer}/>

           <Route exact path="/reviews" component={ReviewContainer}/>

         </Switch>
       </Fragment>
      </Router>
    )
  }
}

export default MainContainer
