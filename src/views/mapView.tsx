import 'leaflet/dist/leaflet.css';
import { MapContainer } from 'react-leaflet';
import { MapTiles } from '../components/mapTiles';

interface props {
    swapView: (view: string, zoomLvl: number) => any
}


export const MAP_VIEW = 'map'
export const MAP_MIN_ZOOM = 0

export const MapView = ({ swapView }: props) => {
    return (
        <MapContainer
            className={'fixed top-0 left-0 w-[100vw] h-[100vh]'}
            attributionControl={false}
            center={[55.3, -106.205]}
            zoom={3}
            minZoom={2}
            scrollWheelZoom={true}
        >
            <MapTiles onZoom={(zoom: number) => swapView(MAP_VIEW, zoom)} />
        </MapContainer>
    )
}
