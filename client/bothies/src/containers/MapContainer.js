import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../components/Menu/Menu.js';
import { render } from 'react-dom';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';
import '../App.css';
import MainContainer from './MainContainer';

const tiles = 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png';
const attr = 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [56.4907, -4.2026];
const zoomLevel = 7;


class MapContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
          trails: [],
          selectedTrailId: ""


      };
        this.handleUpPanClick = this.handleUpPanClick.bind(this);
        this.handleRightPanClick = this.handleRightPanClick.bind(this);
        this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
        this.handleDownPanClick = this.handleDownPanClick.bind(this);
        this.handleTrailSelected = this.handleTrailSelected.bind(this);

    }

    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.on('zoomend', () => {
            const updatedZoomLevel = leafletMap.getZoom();
            this.handleZoomLevelChange(updatedZoomLevel);
        });

    fetch(
        "https://www.hikingproject.com/data/get-trails?lat=56.8198&lon=-5.1052&maxDistance=200&maxResults=100&key=200690005-4ce565fde2b3431d0b7b6f90cb2e272e"
      )
        .then(response => response.json())
        .then(data => {

          this.setState({ trails : data})
          this.props.trailsFetched(data);
        })
        .catch(err=>console.err)
    }

    handleTrailSelected(trailId){
      this.setState({selectedTrailId: trailId});
    }

    handleZoomLevelChange(newZoomLevel) {
        this.setState({ currentZoomLevel: newZoomLevel });
    }

    handleUpPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([0, -100]);
        window.console.log('Panning up');
    }

    handleRightPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([100, 0]);
        window.console.log('Panning right');
    }

    handleLeftPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([-100, 0]);
        window.console.log('Panning left');
    }

    handleDownPanClick() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.panBy([0, 100]);
        window.console.log('Panning down');
    }

    render(){



      return (

        <div>
          <Map 
            ref={m => { this.leafletMap = m; }}
            center={mapCenter}
            zoom={zoomLevel}
          >
            <TileLayer
              attribution={attr}
              url={tiles}
            />
                {this.state.trails.trails && this.state.trails.trails.map((trail, index)=>(
                  <Marker
                    key={index}
                    position={[
                      trail.latitude,
                      trail.longitude]}>
                      <Popup>
                      {trail.name}
                      <Link to={`/trail/${trail.id}`}> Trail Details</Link>

                      </Popup>
                  </Marker>
                ))}
              <Control position="topright">
                  <div style={{
                    backgroundColor: 'transparent',
                    padding: '5px'}}>
                  </div>


                </Control>
              </Map>
            </div>
        );
    }
}

export default MapContainer
