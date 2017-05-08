var React = require('react');
var ReactDOM = require('react-dom');

var Actions = require('./flux/actions/action.js');
var Store = require('./flux/stores/store.js');

var SampleTaskIconList = require('./components/libraryList/sampleTask_IconList');
require('../assets/software.css');

var StoreInsightScenarios = React.createClass({

    getInitialState: function () {
        return Store.getState();
    },

    componentDidMount: function () {
        Store.listen(this.onChange);
        this.initializeAllActions();
    },

    initializeAllActions: function () {
        Actions.getFilterdata();
    },

    componentWillUnmount: function () {
        Store.unlisten(this.onChange);
    },

    onChange: function (state) {
        this.setState(state);
    },

    onClickHeader: function (selectedId) {
        Actions.onChangeHeader(selectedId);
    },

    render: function () {
       return (<div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 linkpath_01">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12"/>
                            <Headers data={this.state.sampleData} onClick={this.onClickHeader}/>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12"/>
                        </div>
                    </div>
                    <div className="row bg_block_margin_02">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                            <SampleTaskIconList selectedData={this.state.selectedData}/>
                        </div>
                    </div>
               </div>);
    }
});

var Headers = React.createClass({
    onClick: function (selectedId) {
        this.props.onClick(selectedId);
    },
    render: function () {
        if(this.props.data.length !== 0) {
            var Data = this.props.data.slice();
            var Header = [];
            Data.forEach((p) => {
                var Selected = false;
                if(p.isSelected)
                    Selected = true
                Header.push(<EachHeader eachData={p} keys={p.id} isSelected={Selected} onClick={this.onClick}/>);
            });
        }
    return(
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            {Header}
        </div>);
    }
});

var EachHeader = React.createClass({
    onClick: function () {
        this.props.onClick(this.props.eachData.id)
    },
    render: function () {
        var ClassName = "";
        (this.props.isSelected) ? ClassName = "header_selected" : ClassName = "";
            
    return(
        <span style={{cursor: 'pointer'}} className={ClassName} onClick={this.onClick}>
            {this.props.eachData.name} &nbsp;
        </span>);
    }
});


module.exports = StoreInsightScenarios;



