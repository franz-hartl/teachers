import React from 'react'

class Survey_feedback extends React.Component {
  render() {
    return (
      <div className="p-3 feedback">
        <div className="fbwrap">
          <p className="fdback">Your feedback is important to us!</p>
          <p>
          After viewing our curriculum units, please take a few minutes to help us understand how 
          the units, which were created by public school teachers, may be useful to others.
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
