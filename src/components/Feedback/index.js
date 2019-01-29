import React from 'react'

class Survey_feedback extends React.Component {
  render() {
    return (
      <div className="p-3 feedback">
        <div className="fbwrap">
          <p className="fdback">Your feedback is important to us!</p>
          <p>
            Please take a quick survey to provide helpful insight about our
            materials
          </p>
        </div>
        <a
          className="givefeedback"
          href="https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_ctCQjtaTDWxNCHr"
          target="_blank"
        >
          Give Feedback
        </a>
      </div>
    )
  }
}

export default Survey_feedback
