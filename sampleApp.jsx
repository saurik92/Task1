var React = require('react');
var ReactDOM = require('react-dom');
import ReactPlayer from 'react-player';

var SampleTask = require('./src/sampleTask');

var BasicContainer = React.createClass({

    getInitialState: function () {
        return {
            pageName: '',
        };
    },

    componentDidMount: function () {
        this.setState({ route: SampleTask });
    },

    render: function () {
        var page;
        if (this.state.route != null) {

            switch (this.state.route.displayName) {
                case 'SampleTask':
                    page = <SampleTask/>
                    break;
                default:
                    page = <SampleTask/>
                    break;
            }
        }



        return (

            <div className="container-fluid">
                {page}
            </div>
        );
    }
});

ReactDOM.render(<BasicContainer />, document.getElementById('extension'));
