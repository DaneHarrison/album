import classNames from 'classnames';
import Globe, { GlobeInstance } from 'globe.gl';
import { useEffect, useRef } from 'react';
import { IoMdArrowBack } from "react-icons/io";

interface props {
    currView: string
    swapView: (view: string, zoomLvl: number) => any
    FLOWER: any
}


export const GLOBE_VIEW = 'globe'
export const GLOBE_MAX_ZOOM = 0

export const GlobeView = ({ FLOWER, currView, swapView }: props) => {
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

        MARKERS()

        globe.onZoom((chords) => {
            if (chords.altitude === 0.8) {
                globe.controls().autoRotate = false;
            }

            swapView(GLOBE_VIEW, chords.altitude)
        })
    }, [currView])

    function MARKERS() {
        const markers = [] as any[]

        FLOWER.forEach((flower: any) => markers.push({
            lat: 62.8084,
            lng: -92.0853,
            size: 10,
            color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
        }))

        return markers
    }

    const markerSvg = `<img className='w-4 h-4' src='./photos/barak.jpg'/>`

    return (
        <div ref={globeDivRef} className={classNames(currView === GLOBE_VIEW && 'z-10', 'fixed top-0 left-0 h-[100vh] w-[100vw]')} />
    )
}
