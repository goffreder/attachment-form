import appDispatcher from '../dispatcher/appDispatcher';

import { ServerActionTypes } from '../constants/constants';

export default {
    serverLoadedTemplates(templates) {
        appDispatcher.handleServerAction({
            type: ServerActionTypes.SERVER_LOAD_TEMPLATES_SUCCESS,
            templates
        });
    }
};
