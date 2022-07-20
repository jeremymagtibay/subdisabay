import React from 'react'

import PropTypes from 'prop-types'

import Question from './question'
import Question1 from './question1'
import Question2 from './question2'
import './questions1.css'

const Questions1 = (props) => {
  return (
    <div className="questions1-questions">
      <span className="questions1-text before-Heading">{props.text}</span>
      <h1 className="questions1-text1">{props.heading}</h1>
      <Question></Question>
      <Question1></Question1>
      <Question2></Question2>
    </div>
  )
}

Questions1.defaultProps = {
  text: 'Forum',
  heading: 'WELCOME TO SUBDI-SAKAY FORUM',
}

Questions1.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default Questions1
