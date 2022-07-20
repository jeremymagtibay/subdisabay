import React from 'react'

import PropTypes from 'prop-types'

import './graphic-top.css'

const GraphicTop = (props) => {
  return (
    <div className={`graphic-top-container ${props.rootClassName} `}>
      <img
        alt={props.graphic - top_alt}
        src={props.graphic - top_src}
        className="graphic-top-graphic-top"
      />
    </div>
  )
}

GraphicTop.defaultProps = {
  rootClassName: '',
  'graphic-top_alt': 'image',
  'graphic-top_src': '/playground_assets/union-400h.png',
}

GraphicTop.propTypes = {
  rootClassName: PropTypes.string,
  'graphic-top_alt': PropTypes.string,
  'graphic-top_src': PropTypes.string,
}

export default GraphicTop
