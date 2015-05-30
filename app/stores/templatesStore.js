import appDispatcher from '../dispatcher/appDispatcher';
import { EventEmitter } from 'events';
import { ServerActionTypes } from '../constants/constants';
import assign from 'react/lib/Object.assign';

const CHANGE_EVENT = 'CHANGE';
var events = new EventEmitter();

var __state = {};

var updateState = (newState) => {
    assign(__state, newState);
    events.emit(CHANGE_EVENT);
};

var replaceState = () => {
    __state = newState;
    events.emit(CHANGE_EVENT);
};

var clearState = () => {
    replaceState({});
};

var templatesStore = {
    addChangeListener(fn) {
        events.addListener(CHANGE_EVENT, fn);
    },

    removeChangeListener(fn) {
        events.removeListener(CHANGE_EVENT, fn);
    },

    getState() {
        return __state;
    }
};

templatesStore.dispatchToken = appDispatcher.register((payload) => {
    var { action } = payload;

    switch(action.type) {
        case ServerActionTypes.SERVER_LOAD_TEMPLATES_SUCCESS:
            updateState({
                templates: action.templates
            });
            break;
        default:
            console.log(action);
            break;
    }
});

export default templatesStore;
