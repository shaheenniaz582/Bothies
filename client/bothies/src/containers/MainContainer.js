import React, {Fragment} from 'react';
import NavBar from '../NavBar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MapContainer from './MapContainer'
import ReviewContainer from './ReviewContainer'
import HomeContainer from './HomeContainer'
import BothyContainer from './BothyContainer'


class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bothies: []
    };
  }


  componentDidMount(){
    const url = "https://www.hikingproject.com/data/get-trails?lat=56.8198&lon=-5.1052&maxDistance=200&maxResults=100&key=200690005-4ce565fde2b3431d0b7b6f90cb2e272e"



    fetch(url)
    .then(res => res.json())
    .then(bothies => this.setState({bothies: bothies}))
    .catch(err => console.error);
  }
  render(){
    return(
      <Router>
      <Fragment>
      <NavBar />
      <Switch>
      <Route path="/" component={HomeContainer}/>
      <Route path="/map" component={MapContainer}/>
      <Route path="/reviews" component={ReviewContainer}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default MainContainer
