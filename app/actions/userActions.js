import axios from 'axios';

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
    }
};
