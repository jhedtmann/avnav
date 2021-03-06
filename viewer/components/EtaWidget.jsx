/**
 * Created by andreas on 23.02.16.
 */

var React=require("react");

var EtaWidget=React.createClass({
    propTypes:{
        //formatter: React.PropTypes.func,
        onClick: React.PropTypes.func,
        store: React.PropTypes.object.isRequired,
        classes: React.PropTypes.string
    },
    _getValues:function(){
        return{
            eta:this.props.store.getData('markerEta'),
            name:this.props.store.getData('markerName')
        };
    },
    getInitialState: function(){
        return this._getValues();
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState(this._getValues());
    },
    render: function(){
        var self=this;
        var classes="avn_widget avn_etaWidget "+this.props.classes||""+ " "+this.props.className||"";
        return (
        <div className={classes} onClick={this.props.onClick} style={this.props.style||{}}>
            <div className='avn_widgetInfoLeft'>{this.props.caption}</div>
            <div className="avn_widgetData avn_markerEta">{this.state.eta}</div>
            <div className="avn_widgetData avn_markerName" >{this.state.name}</div>
        </div>
        );
    }

});

module.exports=EtaWidget;