import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import Control from 'react-leaflet-control';

const tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attr = 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [56.4907, -4.2026];
const zoomLevel = 6.4;

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { currentZoomLevel: zoomLevel };
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

    render() {

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
                                ⬆️
                                </button>
                            </div>
                            <div>
                                <button onClick={this.handleLeftPanClick}>
                                ⬅️
                                </button>
                                <button onClick={this.handleRightPanClick}>
                                ➡️
                                </button>
                            </div>
                            <div style={{ marginLeft: '0px' }}>
                                <button onClick={this.handleDownPanClick}>
                                ⬇️
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
