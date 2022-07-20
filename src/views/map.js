import React from 'react'

import { Helmet } from 'react-helmet'

import './map.css'

const Map = (props) => {
  return (
    <div className="map-container">
      <Helmet>
        <title>Map - Subdi-Sabay(Final)</title>
        <meta property="og:title" content="Map - Subdi-Sabay(Final)" />
      </Helmet>
    </div>
  )
}

export default Map
