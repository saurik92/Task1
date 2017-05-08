var React = require('react');
var ReactDOM = require('react-dom');

var Action = require('../../flux/actions/action.js');

require('../../../assets/software.css');

var IconList = React.createClass({
    render: function () {
        return(
            <div className="bg_block_si_margin_02">
                <Icons selectedData={this.props.selectedData}/>
            </div>
        );
    }
});

var Icons = React.createClass({
    render: function () {
        var IconList = [];
        
        if(this.props.selectedData != undefined) {
            this.props.selectedData[0].list.forEach((o, i)=> {
                IconList.push(<EachIcon key={i} id={i} title={o}/>);
            });
        }
        return (<div>
                    {IconList}
                </div>);
    }
});

var EachIcon = React.createClass({
    render: function () {
        return (<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 IconStyle">
                    <i className={this.props.title} style={{fontSize: '4em'}}/>
                </div>);
    }
});

module.exports = IconList;