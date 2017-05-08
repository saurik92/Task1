var alt = require('../alt');

class actions {

    getFilterdata () {
        return {};
    }

    onChangeHeader (selectedId) {
        return {selectedId};
    }

}

module.exports = alt.createActions(actions);