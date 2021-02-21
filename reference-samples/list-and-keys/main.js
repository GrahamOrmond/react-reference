
class ToDoList extends React.Component {

    render() {

        const numbers = [1, 2, 3, 4, 5]; // list contents

        // create a list with the numbers
        // *keys must be added to each element to identify changes between the multiple same elements*
        // *Keys help React identify which items have changed, are added, or are removed.*
        // *Keys should be given to the elements inside the array to give the elements a stable identity*
        const listItems = numbers.map((number) => // for each number
            // create list item
            <li key={number.toString()} // add key to element to identify changes that happen
            >
                {number}
            </li>
        );
        return (
            listItems
        );
    }
}

// main app component
class App extends React.Component {

    // render app display
    render() {
        return (
            <div>
                <ToDoList /> 
            </div>
        );
    }
}

// render main component to the root
ReactDOM.render(
    <App />,
    document.getElementById('root')
);