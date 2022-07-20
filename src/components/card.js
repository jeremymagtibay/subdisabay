import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <div className={`card-card ${props.rootClassName} `}>
      <div className="card-info">
        <span className="card-text">{props.text}</span>
        <span className="card-text1">{props.text1}</span>
      </div>
      <div className="card-container">
        <div className="card-container1">
          <img
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="card-pasted-image"
          />
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  rootClassName: '',
  text: 'Business',
  text1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
  pastedImage_alt: 'pastedImage',
  pastedImage_src: '/playground_assets/pastedimage-tyc-400h.png',
}

Card.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
}

export default Card
