import { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

import { MapView, MAP_VIEW } from './views/mapView';
import { GlobeView, GLOBE_VIEW } from './views/globeView';
import geoMappings from './assets/geoMappings.json'
import geoImages from './assets/geoImages.json'

export default function App() {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [currView, setCurrView] = useState<string>(GLOBE_VIEW);

    function swapView(view: string, zoomLvl: number) {
        if (view === GLOBE_VIEW && zoomLvl === 0.8) {
            setCurrView(MAP_VIEW)
        }
        else if (view === MAP_VIEW && zoomLvl == 2) {
            setCurrView(GLOBE_VIEW)
        }
    }


    return (
        <>
            <header className='absolute top-0 left-0 z-20 w-screen bg-transparent'>
                <div className='flex justify-center gap-4 h-[10vh]'>
                    <button onClick={() => setYear((prev) => prev - 1)}><IoMdArrowBack className='size-8 text-charcoal' /></button>
                    <h1 className='text-6xl text-sage-green'>Year: {year}</h1>
                    <button onClick={() => setYear((prev) => prev + 1)}><IoMdArrowForward className='size-8 text-charcoal' /></button>
                </div>
            </header>


            <GlobeView geoMappings={geoMappings} geoImages={geoImages} currView={currView} swapView={swapView} />
            <MapView swapView={swapView} />
        </>
    );
}