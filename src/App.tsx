import { useState, useEffect } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

import Globe from 'globe.gl';


function App() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear())

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight * 0.9;

    const world = Globe({ animateIn: true, waitForGlobeReady: true })
      (document.getElementById('globe')!)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('#9FE2BF')
        .width(viewportWidth)
        .height(viewportHeight)
        .pointOfView({ lat: 39.6, lng: -98.5, altitude: 1.5 });
  
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.35;
  }, [])


  function changeYear(adjustment: any) {
    setYear((prev: any) => prev + adjustment)
  }


  return (
    <>
      <header className='flex justify-center gap-4 border-b-2 border-black h-[10vh]'>
        <button onClick={() => changeYear(-1)}><IoMdArrowBack className='size-8 text-charcoal'/></button>
        <h1 className= 'text-6xl text-sage-green'>Year: {year}</h1>
        <button onClick={() => changeYear(1)}><IoMdArrowForward className= 'size-8 text-charcoal'/></button>
      </header>
      
      <div id="globe"/>
    </>
  );
}

export default App;