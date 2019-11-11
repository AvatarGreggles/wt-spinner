import React from 'react';

import UploadFormPanel from './components/uploadFormPanel/uploadFormPanel';
import ActionButton from './components/actionButton/actionButton';
import InProgressPanel from './components/inProgressPanel/inProgressPanel';
import ProgressCompletedPanel from './components/progressCompletedPanel/progressCompletedPanel';

import './app.scss';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentlyInProgress : false,
            progressPercentage : 0, 
            buttonState : this.props.startButtonText
        }
    }

    // This function is used to emulate an upload being processed and the progress wheel updating 
    emulateProgress = () => {
        { /* Depending on the current state of the buttonState variable, the switch statement will start, cancel and restart the process */ }
        switch(this.state.buttonState){
            case this.props.startButtonText:
            this.setState({currentlyInProgress : true, buttonState : this.props.cancelButtonText})
            const interval = setInterval(() => {
                const uploadChunk = Math.floor(Math.random() * 10) + 1; 
                this.setState({progressPercentage : this.state.progressPercentage + uploadChunk})
                console.log(this.state.progressPercentage);
                if (this.state.progressPercentage >= 100){
                    this.setState({currentlyInProgress: false, progressPercentage : 100 , buttonState: this.props.restartButtonText})
                    clearInterval(interval);
                }else if(this.state.buttonState === this.props.startButtonText){
                    clearInterval(interval);
                    console.log('stop');
                }
            }, 500);
            break;
            case this.props.cancelButtonText:
            console.log("cancel");
            this.setState({currentlyInProgress: false, progressPercentage : 0 , buttonState: this.props.startButtonText})
            break;
            case this.props.restartButtonText:
            console.log("restart");
            this.setState({progressPercentage : 0 , buttonState: this.props.startButtonText})
            break;
            default:
            console.log("default");
            this.setState({progressPercentage : 0 , buttonState: this.props.startButtonText})
            break;
        }
    }

    render(){
        return (
                <div className="UploadWindow">

                    {/* Conditional rendering is used to display the correct upload window component
                        from the initial state, in progress and progress completed */}

                    <div className="UploadWindow__UploadSection">
                        {this.state.currentlyInProgress === false && this.state.progressPercentage !== 100 &&
                                <UploadFormPanel 
                                attachFileTitle={this.props.attachFileTitle}
                                colorScheme={this.props.colorScheme}
                                defaultMessagePlaceholder={this.props.defaultMessagePlaceholder}
                                />      
                        }

                       {this.state.currentlyInProgress === true &&
                                 <InProgressPanel 
                                radius={ this.props.radius }
                                stroke={ this.props.stroke }
                                progressPercentage={ this.state.progressPercentage }
                                colorScheme={ this.props.colorScheme }
                                inProgressTitle={this.props.inProgressTitle}
                                inProgressDescription={this.props.inProgressDescription}
                                />
                        }

                        {this.state.progressPercentage === 100 &&
                                <ProgressCompletedPanel 
                                successMessageTitle={this.props.successMessageTitle}
                                successMessageDescription={this.props.successMessageDescription}
                                downloadLink={this.props.downloadLink}
                               /> 
                        } 
                    </div>
                    <div className="UploadWindow__ButtonSection">
                          <ActionButton 
                            handleClick={this.emulateProgress} 
                            buttonState={this.state.buttonState}
                            colorScheme={this.props.colorScheme}
                          />
                    </div> 
                </div>
        );
    }
}
  


App.defaultProps = {
  startButtonText: "Transfer",
  restartButtonText: "Send another?",
  cancelButtonText: "Cancel"
};



export default App;
