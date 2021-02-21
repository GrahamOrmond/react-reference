
// general app button
class Button extends React.Component {

    // need constuctor to bind onclick
    constructor(props){
        super(props);

        // bind login and logout functions
        this.onClick = props.onClick.bind(this);
    }

    // renders button with given onclick function
    render(){
        return (
            <button onClick={this.onClick}>
                {this.props.text}
            </button>
        );
    }
}

// general app header
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    // render header with set text from props
    render () {
        return (
            <h1>{this.props.text}</h1>
        );
    }
}

// Login page
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.loginFunction = props.loginFunction.bind(this); // bind login function to pass to button
    }

    // render all contents of the login page
    render() {
        return (
            <div>
                <Header text="Login Page" />
                <Button key="login_button" onClick={this.loginFunction} text="login"/> 
            </div>
        );
    }
}

// Dashboard page
class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.logoutFunction = props.logoutFunction.bind(this); // bind logout function to pass to button
    }

    // render all contents of dashboard page
    render() {
        return (
            <div>
                <Header text="Dashboard Page" />
                <Button key="logout_button" onClick={this.logoutFunction} text="logout"/> 
            </div>
        );
    }
}

// main app component
class App extends React.Component {

    // add logged in state and button onclick actions
    constructor(props){
        super(props);

        // bind login and logout functions
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {
            isLoggedIn: false, // set user to logged out by default
        };
    }

    // handles user login
    handleLoginClick() {
        this.setState({
            isLoggedIn: true, // set user state to logged in
        });
    }

    // handles user log out
    handleLogoutClick() {
        this.setState({
            isLoggedIn: false, // set user state to logged out
        });
    }

    // render app display
    render() {
        const isLoggedIn = this.state.isLoggedIn; // get the users logged in state
        let pageDisplay;
        if(isLoggedIn) { // show dashboard if user is loged in
            pageDisplay = <Dashboard logoutFunction={this.handleLogoutClick} /> // render dashboard
        } else { // user is logged out
            pageDisplay = <Login loginFunction={this.handleLoginClick} /> // render login page
        }
        
        // display the conditional rendering
        return (
            <div>
                {pageDisplay} 
            </div>
        );
    }
}

// render main component to the root
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
