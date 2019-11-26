import React from 'react';
import './inProgressPanel.scss';
import PropTypes from 'prop-types';

import Spinner from '../spinner/spinner';

{ /* This component is shown while a upload is in progress and includes the Spinner and the text for the UI which reflects the upload being in progress */ }
const InProgressPanel = (props) => {

    const { radius, stroke, progressPercentage, colorScheme, inProgressTitle, inProgressDescription } = props;

    return (
        <div>
            <Spinner
                radius={radius}
                stroke={stroke}
                progressPercentage={progressPercentage}
                colorScheme={colorScheme}
            />
            <div className="ProgressPanelInformation">
                <p className="ProgressPanelInformation__Title">{inProgressTitle}</p>
                <p className="ProgressPanelInformation__Description">{inProgressDescription}</p>
            </div>
        </div>
    );
}

InProgressPanel.propTypes = {
    inProgressTitle: PropTypes.string,
    inProgressDescription: PropTypes.string
};

InProgressPanel.defaultProps = {
    inProgressTitle: "Transferring...",
    inProgressDescription: "Your files are being sent, hang in there!"

};

export default InProgressPanel;