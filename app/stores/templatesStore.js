import appDispatcher from '../dispatcher/appDispatcher';
import { EventEmitter } from 'events';
import { ServerActionTypes, UserActionTypes } from '../constants/constants';
import assign from 'react/lib/Object.assign';

const CHANGE_EVENT = 'CHANGE';
const events = new EventEmitter();

let state = {};

const updateState = (newState) => {
    assign(state, newState);
    events.emit(CHANGE_EVENT);
};

// const replaceState = (newState) => {
//     state = newState;
//     events.emit(CHANGE_EVENT);
// };

// const clearState = () => {
//     replaceState({});
// };

const templatesStore = {
    addChangeListener(fn) {
        events.addListener(CHANGE_EVENT, fn);
    },

    removeChangeListener(fn) {
        events.removeListener(CHANGE_EVENT, fn);
    },

    getState() {
        return state;
    }
};

templatesStore.dispatchToken = appDispatcher.register((payload) => {
    const { action } = payload;

    switch (action.type) {
        case ServerActionTypes.SERVER_LOAD_TEMPLATES_SUCCESS:
            updateState({
                templates: action.templates
            });
            break;

        case UserActionTypes.USER_SELECTED_TEMPLATE:
            updateState({
                selectedTemplate: state.templates.filter((template) => {
                    return template.name === action.templateId;
                }).pop()
            });
            break;

        default:
            console.log(action);
            break;
    }
});

export default templatesStore;
