import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Control from 'react-leaflet-control';

const tiles = 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png';
const attr = 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [56.4907, -4.2026];
const zoomLevel = 7;

class MapContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
        currentZoomLevel: zoomLevel,
        hikes: [],


      };
        this.handleUpPanClick = this.handleUpPanClick.bind(this);
        this.handleRightPanClick = this.handleRightPanClick.bind(this);
        this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
        this.handleDownPanClick = this.handleDownPanClick.bind(this);
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
          .then(
          (result) => {
            this.setState({
              isLoaded: true,
              hikes: result
            });
          },
          // error handler
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
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

        const {hikes} = this.state;
        console.log(hikes.trails && hikes.trails[0].name)

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
                <Control position="topright">
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            padding: '5px',
                        }}
                    >
                        <div style={{ marginLeft: '0px' }}>
                            <button onClick={this.handleUpPanClick}>
                            <span role="img" aria-label="up">⬆️</span>
                            </button>
                        </div>
                        <div>
                            <button onClick={this.handleLeftPanClick}>
                            <span role="img" aria-label="left">⬅️</span>
                            </button>
                            <button onClick={this.handleRightPanClick}>
                            <span role="img" aria-label="right">➡️</span>
                            </button>
                        </div>
                        <div style={{ marginLeft: '0px' }}>
                            <button onClick={this.handleDownPanClick}>
                            <span role="img" aria-label="down">⬇️</span>
                            </button>
                        </div>
                    </div>
                </Control>
            </Map>
            </div>
        );
    }
}

export default MapContainer
