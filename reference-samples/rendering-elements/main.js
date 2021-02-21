// functions that renders an element
function tick() {

    // create the element
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    // render the element
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000); // call function every second *update DOM every second*