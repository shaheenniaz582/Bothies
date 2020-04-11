import React, { Component } from 'react';
import BothyContainer from './containers/BothyContainer';
import MapContainer from './containers/MapContainer'


  class App extends Component {
      render() {
        return (
          <>
          <BothyContainer />
          <MapContainer />
          </>
        );
      }
    }

export default App;
