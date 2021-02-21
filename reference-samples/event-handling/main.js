
class ToggleButton extends React.Component {

    // constructor to set default button state and bind onClick function
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true, // set default state of button
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this); // functions must be binded to work
    }

    // handles onClick action for the button in the component
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            // render button with on click action
            <button onClick={this.handleClick}> 
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

class Button extends React.Component {

    // constructor to brind onClick function
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this); // functions must be binded to work
    }

    // handles onClick action for the button in the component
    handleClick() {
        alert("Button was clicked!");
    }

    render() {
        return (
            // render button with on click action
            <button onClick={this.handleClick}>
                Click Me
            </button>
        )
    }
}

// main app component
class App extends React.Component {

    // render app display
    render() {
        return (
            <div>
                <ToggleButton />
                <br />
                <Button />
            </div>
        );
    }
}

// render main component to the root
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
