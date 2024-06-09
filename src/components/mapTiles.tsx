import { useMapEvents, TileLayer } from 'react-leaflet'

interface props {
    onZoom?: (zoomLvl: number) => void
}


export const MapTiles = ({onZoom}: props) => {
    const mapEvents = useMapEvents({
        zoomend: () => onZoom && onZoom(mapEvents.getZoom())
    });

    return (
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
    )
}