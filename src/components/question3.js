import React from 'react'

import PropTypes from 'prop-types'

import './question3.css'

const Question3 = (props) => {
  return (
    <div data-role="Accordion" className="question3-question question">
      <div data-type="accordion-header" className="question3-trigger">
        <span className="question3-text">{props.text}</span>
        <svg viewBox="0 0 1024 1024" className="question3-icon">
          <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
        </svg>
      </div>
      <div data-type="accordion-content" className="question-content">
        <span className="question3-text1">{props.text1}</span>
      </div>
    </div>
  )
}

Question3.defaultProps = {
  text: 'Announcements',
  text1:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
}

Question3.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Question3
