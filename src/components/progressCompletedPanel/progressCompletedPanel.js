import React from 'react';
import PropTypes from 'prop-types';

import './progressCompletedPanel.scss';

import CompletedGIF from '../../assets/progressCompleted.gif';

{ /* Upon the progress reaching 100%, a completion window is shown with an animated GIF and a custom success message */ }
const ProgressCompletedPanel = (props) => {
        return (
            <div className="ProgressCompleted">
                <div className="ProgressCompleted__Animation">
                    <img src={ CompletedGIF } alt="success animation"/>
                </div>
                <div className="ProgressCompleted__Details">
                    <div className="ProgressCompleted__Details__Message">
                        <h2>{props.successMessageTitle}</h2>
                        <p>{props.successMessageDescription}</p>
                    </div>
                    <div className="ProgressCompleted__Details__Link">
                        <p>{props.downloadLink}</p>
                    </div>
                </div>
            </div>
        );
    }

ProgressCompletedPanel.propTypes = {
    successMessageTitle: PropTypes.string,
    successMessageDescription: PropTypes.string,
    downloadLink: PropTypes.string,
  };
  
  ProgressCompletedPanel.defaultProps = {
    successMessageTitle: "You've done it!",
    successMessageDescription: "You can find your transfer in the link below.",
    downloadLink: "https://we.tl/example",
  };

export default ProgressCompletedPanel;