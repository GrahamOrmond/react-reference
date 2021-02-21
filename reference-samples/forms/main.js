
// general app input box
class InputBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = props.handleChange.bind(this); // bind on change function
    }

    render() {
        return (
            <label>
                    {this.props.label}
                    <input
                        name={this.props.name} 
                        type={this.props.type} 
                        value={this.props.value} 
                        onChange={this.handleChange} 
                    />
            </label>
        );
    }
}

// general app text area
class TextAreaBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = props.handleChange.bind(this); // bind on change function
    }

    render() {
        return (
            <label>
                    {this.props.label}
                    <textarea 
                    name={this.props.name}
                    value={this.props.value} 
                    onChange={this.handleChange} />
            </label>
        );
    }
}

// general app select option
class SelectOption extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <option value={this.props.value}>{this.props.text}</option>
        );
    }
}

// general app select options
class SelectInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = props.handleChange.bind(this); // bind on change function
    }

    render() {
        return (
             <label>
                {this.props.label}
                <select id={this.props.id} value={this.props.value} onChange={this.handleChange}>
                    <SelectOption value="grapefruit" text="Grapefruit" />
                    <SelectOption value="lime" text="Lime" />
                    <SelectOption value="coconut" text="Coconut" />
                    <SelectOption value="mango" text="Mango" />
                </select>
            </label>
        );
    }
}

// app form
class Form extends React.Component {

    // constructor to set input values and bind form functions
    constructor(props) {
        super(props);
        this.state = {
            name_input: '',
            essay_input: '',
            select_input: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // runs when input changes
    handleChange(event) {
        let inputBox = event.target.name; // get the input name
        this.setState({
            [inputBox]: event.target.value} // use [] to dynamicly set key or else it will use exact variable name
        );
    }

    // runs when select option changes (select box requires Id over Name attribute)
    handleSelectChange(event) {
        let inputBox = event.target.id; // get the select box Id
        this.setState({
            [inputBox]: event.target.value} // use [] to dynamicly set key or else it will use exact variable name
        );
    }

    // runs on form submition
    handleSubmit(event) {
        let alertText = `
            Form was submitted: \n
            name: ${this.state.name_input} \n
            essay: ${this.state.essay_input} \n
            food: ${this.state.select_input} \n
        `
        alert(alertText);
        event.preventDefault(); // prevent default form action of changing URL
    }

    // show the form with custom onSubmit and onChange function
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* render an input box */}
                <InputBox
                    key="name_input"
                    label="Name:"
                    type="text" 
                    name="name_input" 
                    value={this.state.name_input} 
                    handleChange={this.handleChange} 
                />

                <br />

                {/* render an text area */}
                <TextAreaBox
                    key="text_area"
                    label="Essay:"
                    type="text" 
                    name="essay_input" 
                    value={this.state.essay_input} 
                    handleChange={this.handleChange} 
                />

                <br />

                {/* render select options */}
                <SelectInput 
                    id="select_input"
                    key="select_input"
                    label="Food:"
                    value={this.state.select_input}
                    handleChange={this.handleSelectChange}
                />

                <br />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// main app component
class App extends React.Component {

    // render app display
    render() {
        return (
            <div>
                <Form />
            </div>
        );
    }
}

// render main component to the root
ReactDOM.render(
    <App />,
    document.getElementById('root')
);