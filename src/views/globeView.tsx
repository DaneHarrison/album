import classNames from 'classnames';
import Globe, { GlobeInstance } from 'globe.gl';
import { useEffect, useRef } from 'react';
import { GeoImage, GeoMappings } from '../types';

interface props {
    currView: string
    swapView: (view: string, zoomLvl: number) => any
    geoMappings: Record<string, GeoMappings>
    geoImages: GeoImage[]
}

export const GLOBE_VIEW = 'globe'
export const MIN_GLOBE_ZOOM = 1.5 // any less, and it has no effect on markers
export const MAX_GLOBE_ZOOM = 0.8 // switches to the map view when reached
export const MIN_X_GROUPS = 360   // i.e each LONG has all its markers grouped
export const MAX_X_GROUPS = 3600  // i.e 0.1th of each LONG has its markers grouped
export const MIN_Y_GROUPS = 180   // i.e each LAT has all its markers grouped
export const MAX_Y_GROUPS = 1800  // i.e 0.1th of each LAT has its markers grouped

export const GlobeView = ({ geoMappings, geoImages, currView, swapView }: props) => {
    const globeDivRef = useRef(null);

    let globe: GlobeInstance;

    useEffect(() => {
        globe = Globe({ animateIn: true, waitForGlobeReady: true })(globeDivRef.current!)
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
            .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
            .backgroundColor('#000000')
            .width(window.innerWidth)
            .height(window.innerHeight)
            .showAtmosphere(true)
            .pointOfView({ lat: 39.6, lng: -98.5, altitude: 1.5 })
            .htmlElementsData(MARKERS())
            .htmlElement(d => {
                const el = document.createElement('div');
                el.innerHTML = markerSvg;
                el.style.width = `16px`;
                el.onclick = () => console.info(d);
                return el;
            }) as GlobeInstance;

        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.4;
        globe.controls().enableZoom = true;
        globe.controls().minDistance = 180;
        globe.controls().maxDistance = 300;

        globe.onZoom((chords) => {
            if (chords.altitude === 0.8) {
                globe.controls().autoRotate = false;
            }

            swapView(GLOBE_VIEW, chords.altitude)
        })
    }, [currView])

    function MARKERS() {
        const markers = [] as any[]

        geoImages.forEach((img) => markers.push({
            lat: 62.8084,
            lng: -92.0853,
            size: 10,
            color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
        }))

        return markers
    }

    const markerSvg = `<img className='w-4 h-4' src='data:image/jpeg;base64,${geoImages[0]['base64Img']}'/>`

    return (
        <div ref={globeDivRef} className={classNames(currView === GLOBE_VIEW && 'z-10', 'fixed top-0 left-0 h-[100vh] w-[100vw]')} />
    )
}
