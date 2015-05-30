import axios from 'axios';

import { UserActionTypes } from '../constants/constants';
import serverActions from './serverActions';
import appDispatcher from '../dispatcher/appDispatcher';

const baseURL = 'http://localhost:3000';

export default {
    userLoadTemplates() {
        var url = `${baseURL}/templates`;

        axios.get(url).then((res) => {
            serverActions.serverLoadedTemplates(res.data);
        }).catch((res) => {
            console.log(res);
        });
    },

    userSelectTemplate(templateId) {
        appDispatcher.handleUserAction({
            type: UserActionTypes.USER_SELECTED_TEMPLATE,
            templateId
        });
    }
};
