import React from 'react'

import PropTypes from 'prop-types'

import './pasted-image.css'

const PastedImage = (props) => {
  return (
    <div className="pasted-image-container">
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className="pasted-image-pasted-image"
      />
    </div>
  )
}

PastedImage.defaultProps = {
  pastedImage_alt: 'pastedImage',
  pastedImage_src: '/playground_assets/pastedimage-tyc-400h.png',
}

PastedImage.propTypes = {
  pastedImage_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
}

export default PastedImage
