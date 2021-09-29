import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congragulatory messages
 * @function
 * @param {object} - React props
 * @returns  {JSX.Element}
 */
function Congrats(props) {
  console.log(props.success);
  if (props.success) {
    return (
      <div data-test='component-congrats' className='alert alert-success'>
        <span data-test='congrats-message'>
          Congragulations, you guessed the word!
        </span>
      </div>
    );
  }
  return <div data-test='component-congrats' />;
}

Congrats.propTypes = {};

export default Congrats;
