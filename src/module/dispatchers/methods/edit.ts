/*
    Edit state
    - Appends state object to object array
*/
import { TrebleGSM } from 'treble-gsm';
import reducerActionKeys from '../../reducer-actions/keys';
import { trebleLMConsole } from '../../globals';

interface IEdit {
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue: any,
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const edit: IEdit = (dispatch, action, dispatchValue, options) => {
    try {
        if (typeof action !== 'string') {
            throw TypeError('Action prop must be a string');
        }
        if (typeof dispatchValue !== 'object' && Array.isArray(dispatchValue)) {
            throw TypeError('Dispatch value property must be an object');
        }
        if (dispatchValue.trebleKey === undefined) {
            throw Error(`${action} - features.keys must be set to true`);
        }

        dispatch({
            type: action,
            [action]: dispatchValue,
            reducerAction: reducerActionKeys.editState,
            options: {
                ...options
            }
        });
    } catch (error) {
        console.error(`${trebleLMConsole} ${error}`);
    }
}
export default edit;