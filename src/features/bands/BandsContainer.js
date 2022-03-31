import React from "react";
import { useSelector, useDispatch } from "react-redux"
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice"
//act as connection to store

import Band from "./Band"

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities)

  const dispatch = useDispatch()

  function onBandSubmit(band) {
    dispatch(bandAdded(band))
  }

  const bandsList = bands.map((band, index) => <Band key={index} text={band}/> )
  return (
    <div>
      <BandInput onBandSubmit={onBandSubmit}/>
      <ul>{bandsList}</ul>
    </div>
  );
}

export default BandsContainer;
