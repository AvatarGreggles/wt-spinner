This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Why I used React

For this assignment I chose to use **React**. Beside the fact we use React at WeTransfer, I am *obsessed* with using it, it is like a digital puzzle, creating and fitting pieces together. I enjoy the idea of resuable components, striving for creating components which are so clean and well made, that you can plug them into other projects and they will work. The idea of building out your own resuable components as a swiss army knife across multiple applications excites me!

## How to use... or not? 

In **src/index.js** you can pass the following props to the App component which will allow you to customize the color, text and sizing/styling of the components. However, to ensure stability in the case where somebody does not pass in these props, the app is made to work by using **default props** within the individual components. 

If you want to get creative, below are examples of props which can be passed through:

These control the size of the spinner wheel as well as the thickness of the loading bar around it
**radius: 100
stroke: 4**

The initial progress percentage and the color scheme you choose
**progressPercentage: 0
colorScheme: "red"**

These are the start, stop and go again button text props
**startButtonText: "Transfer"
cancelButtonText: "Cancel"
restartButtonText: "Send another?"**

This is the default text for adding your files and the placeholder text in the message field
a**ttachFileTitle: "Add your files"
defaultMessagePlaceholder: "Message..."**

This is the default text shown while transfers are uploading
**inProgressTitle: "Transferring...",
inProgressDescription: "Your files are being sent, hang in there!"**

This is the default text shown when your transfer is completed
**successMessageTitle: "You've done it!"
successMessageDescription: "You can find your transfer in the link below."
downloadLink: "https://we.tl/example"**

## How I built the Components

The core components here are the **Spinner and the ActionButton components**. I wanted to showcase their functionality project so I recreated the flow of transferring files on wetransfer.com. 

The idea is I would have a beginning state, transferring state and end state. The **ActionButton** component would then be passed in a prop depending on the current state to either **start the transfer, cancel it, or after it has completed, you can send another!**

For each component, I included default props to handle a scenario where no props were passed in to the component. The propTypes are also set to ensure the correct type of props are passed to the component.

### Spinner

The Spinner component takes the following props: **radius, stroke, progressPercentage and colorScheme.**
These values are passed through to create svg circles using a variety of calculations. 

The radius and the stroke variables are used to set the size and width of the spinner circle. The Spinner has a foreground and background circle. The foreground circle is animated and the **strokeDashOffset grows as the progressPercentage variable grows.**

To ensure the percentage always stayed in a relative size comparison to the spinner wheel, I passed the radius variable to aid in setting the font-size and margins. This allows for different sized radius values to be passed in and the font will be responsive to the spinner size. 

The Spinner component can be plugged into other situations where needed, the progressPercentage prop sets the current 'progress' or size of the stroke around the spinner and when it reaches 100%, it will be 'full'.

### ActionButton

I created the ActionButton as a functional component as it simply took in props and return JSX. 
This component expects several props such as **handleClick (the logic after the button has been clicked), buttonState (the current text which should be displayed on the button) and colorScheme (the background color of the button).**

I kept the ActionButton component as simple as possible allowing it to be reused for other purposes if needed. You can pass any function as one of the props to be handled when the button has been clicked. 

### InProgressPanel

This component is shown during the upload process after the transfer button has been hit. The spinner is displayed and passed props through from the parent component. An in progress information section is populated with a defined **inProgressTitle and inProgressDescription variable.**

### ProgressCompletedPanel

Another functional component that simply takes in props to set a success message on a completion window. There is nothing too crazy here, it simply renders JSX based on the props input. 

### UploadFormPanel

Another functional component that simply takes in props to set an initial UI for before you hit the transfer button. There is nothing too crazy here, it simply renders JSX based on the props input. 


