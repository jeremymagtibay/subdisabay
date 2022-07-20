import React from 'react'

import PropTypes from 'prop-types'

import './question1.css'

const Question1 = (props) => {
  return (
    <div data-role="Accordion" className="question1-question question">
      <div data-type="accordion-header" className="question1-trigger">
        <span className="question1-text">{props.text}</span>
        <svg viewBox="0 0 1024 1024" className="question1-icon">
          <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
        </svg>
      </div>
      <div data-type="accordion-content" className="question-content">
        <span className="question1-text1">{props.text1}</span>
      </div>
    </div>
  )
}

Question1.defaultProps = {
  text: 'Community',
  text1: 'gg',
}

Question1.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Question1
