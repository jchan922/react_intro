var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
    render: function(){
        // return React.createElement('h1', null, "headline!")
        return <h1>headline!</h1>
    }
})

ReactDOM.render(<MyComponent />, document.getElementById('app'));

console.log("HELLO!");
