import React from 'react';
import PropTypes from 'prop-types';

import './actionButton.scss';

const ActionButton = (props) => {

    const { colorScheme, handleClick, buttonState } = props;

    return (
        //The Button pulls its styling from the colorScheme properties set on the root component
        //The Buttons text is dependent on the current state of buttonState
        <div className="ActionButton">
            <button style={{ background: colorScheme }} onClick={handleClick}>{buttonState}</button>
        </div>
    );
}

ActionButton.propTypes = {
    handleClick: PropTypes.func,
    buttonState: PropTypes.string,
    colorScheme: PropTypes.string,
};

ActionButton.defaultProps = {
    handleClick: () => { console.log('Button is clicked but no method has been passed to this component') },
    buttonState: "Transfer",
    colorScheme: "#409fff"
};

export default ActionButton;