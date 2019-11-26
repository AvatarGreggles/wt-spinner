import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

/* You can pass the following props to the App component to customize the look of each child component 

Below are examples
radius: 100,
stroke: 4,
progressPercentage: 0,
colorScheme: "red",
startButtonText: "Transfer",
cancelButtonText: "Cancel",
restartButtonText: "Send another?",
attachFileTitle: "Add your files",
inProgressTitle: "Transferring...",
inProgressDescription: "Your files are being sent, hang in there!",
defaultMessagePlaceholder: "Message...",
successMessageTitle: "You've done it!",
successMessageDescription: "You can find your transfer in the link below.",
downloadLink: "https://we.tl/example"

*/

ReactDOM.render(<App stroke={10} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
