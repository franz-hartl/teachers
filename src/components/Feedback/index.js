import React from 'react'
const path = require('path')

class Survey_feedback extends React.Component {
  render() {
	const { navData } = this.props
	const unitName = path.basename(navData[1].path, '.x.html')
	const survey_link = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_82laE4orr3rVY0J?UnitID=" + unitName
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
          href={survey_link}
          target="_blank"
        >
          Give Feedback
        </a>
      </div>
    )
  }
}

export default Survey_feedback
