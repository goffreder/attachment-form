import keyMirror from 'keymirror';

export default {
    PayloadSources: keyMirror({
        USER_ACTION: null,
        SERVER_ACTION: null
    }),

    ServerActionTypes: keyMirror({
        SERVER_LOAD_TEMPLATES_SUCCESS: null
    }),

    UserActionTypes: keyMirror({
        USER_SELECTED_TEMPLATE: null
    })
};
