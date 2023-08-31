import React from 'react'
import state from '../store'
import { snapshot, useSnapshot } from 'valtio'
const Tab=({tab,Filter,Active,handelclick})=> {
  const snap=snapshot(state);
  const activ=Active && Filter?{backgroundColor:snap.color,opacity:0.5}:{backgroundColor:"tranparent",opacity:1}
  return (
    <div key={tab.name}
        className={`tab-btn ${Filter? 'rounded-full glassmorhism':'rounded-4' }`}
        onClick={handelclick}
        style={Active}

    >
      <img src={tab.icon} alt={tab.name} />
    </div>
  )
}

export default Tab