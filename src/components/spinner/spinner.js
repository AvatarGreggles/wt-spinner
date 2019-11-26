import React from 'react';
import PropTypes from 'prop-types';

import './spinner.scss';

class Spinner extends React.Component {
  constructor(props) {
    super(props);

    { /* The radius and stroke size is used to set the size of the spinner wheel */ }
    const { radius, stroke } = this.props;
    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {

    const { radius, stroke, progressPercentage, colorScheme } = this.props;
    const strokeDashoffset = this.circumference - progressPercentage / 100 * this.circumference;

    { /* The spinner component has a background and a foreground circle. The foreground uses the strokeDashArray variable which is updated each time the progress increases  */ }
    return (
      <div className="Spinner">
        <svg
          height={radius * 2}
          width={radius * 2}
        >
          <circle className="Spinner_Background"
            stroke="rgb(232, 235, 237)"
            fill="transparent"
            strokeWidth={stroke}
            r={this.normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle className="Spinner_Foreground"
            stroke={colorScheme}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={this.circumference + ' ' + this.circumference}
            style={{ strokeDashoffset }}
            r={this.normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        { /* The text within the spinner wheel is responsive depending on the size of the spinner itself, using a mixture of font-size and margin css styles */}
        <div className="Spinner__ProgressPercentage" style={{ fontSize: radius / 2, marginTop: radius / 1.5 }}>
          {progressPercentage}<sup className="Spinner__ProgressPercentage__Symbol">%</sup>
        </div>
      </div>
    );
  };
}

Spinner.propTypes = {
  radius: PropTypes.number,
  stroke: PropTypes.number,
  progressPercentage: PropTypes.number
}

Spinner.defaultProps = {
  radius: 100,
  stroke: 4,
  progressPercentage: 0,
  colorScheme: "#409fff",
};

export default Spinner;
