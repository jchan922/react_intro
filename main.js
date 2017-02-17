var myReactComponent = React.createClass({
    render: function(){
        console.log(this.props);
        var coloredHeadlines = this.props.colors.map( function(color, idx){
            return React.createElement('h1', {style: {color: color}, key: idx}, color + " Headline")
        })
        return React.createElement('div', null, coloredHeadlines);
    }
})

var actualDOMNode = document.getElementById('app');

ReactDOM.render(React.createElement(myReactComponent, {colors: ['blue', 'red', 'green']}), actualDOMNode);
