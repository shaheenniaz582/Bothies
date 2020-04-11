import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Control from 'react-leaflet-control';




const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [56.7008, -4.1897];
const zoomLevel = 6.5;



class MapContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
        currentZoomLevel: zoomLevel,
        trails: [],


      };
        this.handleUpPanClick = this.handleUpPanClick.bind(this);
        this.handleRightPanClick = this.handleRightPanClick.bind(this);
        this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
        this.handleDownPanClick = this.handleDownPanClick.bind(this);
        this.state.trails = this.trails;
    }






    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.on('zoomend', () => {
            const updatedZoomLevel = leafletMap.getZoom();
            this.handleZoomLevelChange(updatedZoomLevel);
        });
    }

    componentDidMount(){
      fetch(
        "https://www.hikingproject.com/data/get-trails?lat=56.8198&lon=-5.1052&maxDistance=200&maxResults=100&key=200690005-4ce565fde2b3431d0b7b6f90cb2e272e"
      )
        .then(response => response.json())
        .then(data => this.setState({ trails : data}))
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


        window.console.log('this.state.currentZoomLevel ->', this.state.currentZoomLevel);

        return (
            <div>
              
                <Map
                    ref={m => { this.leafletMap = m; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />




                    <Control position="topright">
                        <div
                            style={{
                                backgroundColor: 'black',
                                padding: '5px',
                            }}
                        >
                            <div style={{ marginLeft: '37px' }}>
                                <button onClick={this.handleUpPanClick}>
                                    Pan up
                                </button>
                            </div>
                            <div>
                                <button onClick={this.handleLeftPanClick}>
                                    Pan left
                                </button>
                                <button onClick={this.handleRightPanClick}>
                                    Pan right
                                </button>
                            </div>
                            <div style={{ marginLeft: '30px' }}>
                                <button onClick={this.handleDownPanClick}>
                                    Pan down
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
