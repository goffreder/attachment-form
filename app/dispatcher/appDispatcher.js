import { Dispatcher } from 'flux';
import { PayloadSources } from '../constants/constants';
import assign from 'react/lib/Object.assign';

export default assign(new Dispatcher(), {
    handleServerAction(action) {
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    handleUserAction(action) {
        var payload = {
            source: PayloadSources.USER_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
});
