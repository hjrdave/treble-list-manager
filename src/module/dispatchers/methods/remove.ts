/*
    Remove
    - method for removing an object from an array.
*/
import { TrebleGSM } from 'treble-gsm';
import reducerActionKeys from '../../reducer-actions/keys';
import { trebleLMConsole } from '../../globals';

interface IRemove {
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        predicate: (storeState: { [key: string]: any }) => boolean,
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const remove: IRemove = (dispatch, action, predicate, options) => {

    try {
        if (typeof action !== 'string') {
            throw TypeError('action prop must be a string');
        }
        if (typeof predicate !== 'function') {
            throw TypeError('predicate must be a function')
        }
        dispatch({
            type: action,
            [action]: predicate,
            reducerAction: reducerActionKeys.remove,
            options: {
                ...options
            }
        })
    } catch (error) {
        console.error(`${trebleLMConsole} ${error}`);
    }
}
export default remove;