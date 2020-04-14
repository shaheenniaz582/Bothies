import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MapContainer from './MapContainer'
import ReviewContainer from './ReviewContainer'
import HomeContainer from './HomeContainer'
import TrailDetailContainer from './TrailDetailContainer';



class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trails: []

    };

    this.trailsFetched = this.trailsFetched.bind(this);

  }

  trailsFetched(trails){

    this.setState({trails : trails.trails})
  }

  render(){



    return(
      <Router>
       <Fragment>

         <Switch>

           <Route exact path="/" component={HomeContainer}/>

           <Route exact path="/map" render={() => {
             return <MapContainer trailsFetched = {this.trailsFetched}/>
            }
           }/>


           <Route exact path="/reviews" component={ReviewContainer}/>

           <Route exact path="/trail" component={TrailDetailContainer}/>

           <Route exact path="/trail/:id" render={(props) => {

             const trail = this.state.trails.find((trail) => {
               return trail.id == props.match.params.id
             })
             debugger

             return <TrailDetailContainer trail = {trail}/>
           } }/>

         </Switch>
       </Fragment>
      </Router>
    )
  }
}

export default MainContainer
