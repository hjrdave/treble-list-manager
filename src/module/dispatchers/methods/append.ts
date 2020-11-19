/*
    Append state
    - Appends state object to object array
*/
import { TrebleGSM } from 'treble-gsm';
import reducerActionKeys from '../../reducer-actions/keys';
import { trebleLMConsole } from '../../globals';
interface IAppend {
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue: any,
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const append: IAppend = (dispatch, action, dispatchValue, options) => {
    try {
        if (typeof action !== 'string') {
            throw TypeError('action prop must be a string');
        }
        if (typeof dispatchValue !== 'object' && Array.isArray(dispatchValue)) {
            throw TypeError('dispatch value must be an object')
        }
        dispatch({
            type: action,
            [action]: dispatchValue,
            reducerAction: reducerActionKeys.appendState,
            options: {
                ...options
            }
        });
    } catch (error) {
        console.error(`${trebleLMConsole} ${error}`);
    }
}
export default append;