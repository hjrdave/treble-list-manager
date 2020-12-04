/*
    Prepend state
    - prepends state object to object array 
*/
import { TrebleGSM } from 'treble-gsm';
import reducerActionKeys from '../../reducer-actions/keys';
import { trebleLMConsole } from '../../globals';
interface IPrepend {
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue: any,
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const prepend: IPrepend = (dispatch, action, dispatchValue, options) => {

    try {
        if (typeof action !== 'string') {
            throw TypeError('Action prop must be a string.');
        };
        if (typeof dispatchValue !== 'object' && Array.isArray(dispatchValue)) {
            throw TypeError('Dispatch value property must be an object.');
        };
        dispatch({
            type: action,
            [action]: dispatchValue,
            reducerAction: reducerActionKeys.prepend,
            options: {
                ...options
            }
        });
    } catch (error) {
        console.error(`${trebleLMConsole} ${error}`);
    }

}
export default prepend;