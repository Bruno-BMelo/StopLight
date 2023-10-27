import { useEffect, useState } from 'react'
import './App.css'

type StopLightState = "stop" | "slow" | "go";


export function StopLight( {initialState} : {initialState? : StopLightState}) {

  const [state, setState] = useState<StopLightState>(initialState ?? 'stop')

  function getStoplightClass(light: StopLightState) {
    return `light ${light} ` + (state === light ? "on" : "");
  }

  useEffect(() => {
    if (state === "stop") {
      setTimeout(() => setState('go'), 3000);
    } else if (state === "slow") {
      setTimeout(() => setState('stop'), 2000);
    } else {
      setTimeout(() => setState('slow'), 5000);
    }
  }, [state]);
  

  return (
    <div className='stop-light'>
      <div className={getStoplightClass("stop")}></div>
      <div className={getStoplightClass("slow")}></div>
      <div className={getStoplightClass("go")}></div>
    </div>
  )
}
