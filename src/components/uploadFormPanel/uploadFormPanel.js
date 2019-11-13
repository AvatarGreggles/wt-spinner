import React from 'react';
import PropTypes from 'prop-types';

import './uploadFormPanel.scss';

{ /* This component mocks the WeTransfer initial upload panel with the message field. */ }
const UploadFormPanel = (props) =>  {

    const { attachFileTitle, defaultMessagePlaceholder, colorScheme } = props;

        return (
                <div className="UploadFormPanel">
                    <div className="UploadFormPanel__AddFiles">
                        <svg viewBox="0 0 72 72">
                            <path d="M36.493 72C16.118 72 0 55.883 0 36.493 0 16.118 16.118 0 36.493 0 55.882 0 72 16.118 72 36.493 72 55.882 55.883 72 36.493 72zM34 34h-9c-.553 0-1 .452-1 1.01v1.98A1 1 0 0 0 25 38h9v9c0 .553.452 1 1.01 1h1.98A1 1 0 0 0 38 47v-9h9c.553 0 1-.452 1-1.01v-1.98A1 1 0 0 0 47 34h-9v-9c0-.553-.452-1-1.01-1h-1.98A1 1 0 0 0 34 25v9z" fill={ colorScheme } fillRule="nonzero"></path>
                        </svg>
                        <h2>{attachFileTitle}</h2>
                    </div>
                    <div className="UploadFormPanel__Message">
                        <textarea placeholder={defaultMessagePlaceholder} />
                    </div>
                </div>
        );
}

UploadFormPanel.propTypes = {
    colorScheme: PropTypes.string,
    attachFileTitle: PropTypes.string,
    defaultMessagePlaceholder: PropTypes.string
  };

UploadFormPanel.defaultProps = {
    colorScheme: "#409fff",
    attachFileTitle: "Add your files",
    defaultMessagePlaceholder: "Message..."
  };


export default UploadFormPanel;