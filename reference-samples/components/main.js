
// create clock element to render
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}; // state to be updated
    }

    // when a component is first added to the DOM this function runs
    componentDidMount() {
        this.timerID = setInterval( // set the timer interval on when it should update
            () => this.tick(), // run tick function
            1000 // 1 second
        );
    }
    
    // when the component is removed from the DOM this function runs
    componentWillUnmount() {
        clearInterval(this.timerID) // clear the set timer
    }

    // clock tick function that changes the time
    tick() {
        this.setState({ // set state re-renders the component changes
            date: new Date() // update date time
        });
    }

    // render the clock
    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

// general app header component 
class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome, {this.props.name}!</h1>   
            </div>
        );
    }
}


// main app component
class App extends React.Component {

    // render app display
    render() {
        return (
            <div>
                <Header name="Graham" />
                <Clock />
            </div>
        );
    }
}

// render main component to the root
ReactDOM.render(
    <App />,
    document.getElementById('root')
);