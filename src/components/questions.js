import React from 'react'

import PropTypes from 'prop-types'

import Question from './question'
import './questions.css'

const Questions = (props) => {
  return (
    <div className="questions-questions">
      <span className="questions-text before-Heading">{props.text}</span>
      <h1 className="questions-text1">{props.heading}</h1>
      <Question text1="gggg sample"></Question>
      <div data-role="Accordion" className="question">
        <div data-type="accordion-header" className="questions-trigger">
          <span className="questions-text2">{props.text1}</span>
          <svg viewBox="0 0 1024 1024" className="questions-icon">
            <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
          </svg>
        </div>
        <div data-type="accordion-content" className="question-content">
          <span className="questions-text3">{props.text2}</span>
        </div>
      </div>
      <div data-role="Accordion" className="question">
        <div data-type="accordion-header" className="questions-trigger1">
          <span className="questions-text4">{props.text3}</span>
          <svg viewBox="0 0 1024 1024" className="questions-icon2">
            <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
          </svg>
        </div>
        <div data-type="accordion-content" className="question-content">
          <span className="questions-text5">{props.text4}</span>
        </div>
      </div>
    </div>
  )
}

Questions.defaultProps = {
  text3: 'Subdi-Sabay Products',
  text: 'Forum',
  text4:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading: 'WELCOME TO SUBDI-SAKAY FORUM',
  text2:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text1: 'Community',
}

Questions.propTypes = {
  text3: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default Questions
