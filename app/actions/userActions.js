import axios from 'axios';

import { UserActionTypes } from '../constants/constants';
import serverActions from './serverActions';
import appDispatcher from '../dispatcher/appDispatcher';

const baseURL = 'http://localhost:3000';

export default {
    userLoadTemplates() {
        const url = `${baseURL}/templates`;

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
    },

    userSaveObject(type, data) {
        const url = `${baseURL}/${type}`;

        axios.post(url, data).then((res) => {
            console.log('then', res);
        }).catch((res) => {
            console.log('catch', res);
        });
    }
};
