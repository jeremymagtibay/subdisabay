import React from 'react'

import PropTypes from 'prop-types'

import './question2.css'

const Question2 = (props) => {
  return (
    <div data-role="Accordion" className="question2-question question">
      <div data-type="accordion-header" className="question2-trigger">
        <span className="question2-text">{props.text}</span>
        <svg viewBox="0 0 1024 1024" className="question2-icon">
          <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
        </svg>
      </div>
      <div data-type="accordion-content" className="question-content">
        <span className="question2-text1">{props.text1}</span>
      </div>
    </div>
  )
}

Question2.defaultProps = {
  text1: 'gg',
  text: 'Subdi-Sabay Products',
}

Question2.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Question2
