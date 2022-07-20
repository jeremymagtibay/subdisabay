import React from 'react'

import PropTypes from 'prop-types'

import './hero-image.css'

const HeroImage = (props) => {
  return (
    <div className="hero-image-container">
      <img
        alt={props.hero - image_alt}
        src={props.hero - image_src}
        className="hero-image-hero-image"
      />
    </div>
  )
}

HeroImage.defaultProps = {
  'hero-image_alt': 'image',
  'hero-image_src':
    '/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-200h.png',
}

HeroImage.propTypes = {
  'hero-image_alt': PropTypes.string,
  'hero-image_src': PropTypes.string,
}

export default HeroImage
