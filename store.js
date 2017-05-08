var alt = require('../alt');

var MockActions = require('../actions/action');
var DataSource = require('../datasource/source');

module.exports = alt.createStore({
    bindListeners: {
        handleGetSampleData: MockActions.getFilterdata,
        handleOnChangeHeader: MockActions.onChangeHeader,
    },

    state: {
        sampleData: [],
    },

    handleGetSampleData () {
        this.setState({
            sampleData: DataSource.getSampleData()
        });

        var SelectedData = [];
        if(this.state.sampleData.length !== 0) {
            var Data = this.state.sampleData.slice();
            Data.forEach((p) => {
                if(p.isSelected)
                    SelectedData.push(p);
            });
            this.setState({selectedData: SelectedData});
        }
    },

    handleOnChangeHeader (param) {
        if(this.state.sampleData.length !== 0) {
            var Data = this.state.sampleData.slice();
            var SelectedData = [];
            Data.forEach((p) => {
                if(p.id === param.selectedId) {
                    p.isSelected = true;
                    SelectedData.push(p);
                }
                else
                    p.isSelected = false;
            });

            this.setState({
                sampleData: Data,
                selectedData: SelectedData});
        }
    },

});