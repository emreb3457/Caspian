import React from 'react'
import PropTypes from 'prop-types'
const Validate = props => {
    return (
        <div id="textarea-valid" className="validate">
              {props.message}
        </div>
    )
}
Validate.propTypes = {
    message: PropTypes.string.isRequired
}
export default Validate
