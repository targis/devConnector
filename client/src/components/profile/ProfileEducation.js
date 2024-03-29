import React from 'react'
import PropTypes from 'prop-types'
import formatDate from '../../utils/formatDate'

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <div>
      <h3 class="text-dark">{school}</h3>
      <p>
        {formatDate(from)} - {!to ? ' Now' : formatDate(to)}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  )
}

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
}

export default ProfileEducation
