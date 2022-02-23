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
        dispatchValue: (storeState: { [key: string]: any, trebleKey: number }) => boolean | { [key: string]: any, trebleKey: number },
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const remove: IRemove = (dispatch, action, dispatchValue, options) => {
    try {
        if (typeof action !== 'string') {
            throw TypeError('action prop must be a string');
        }
        if (typeof dispatchValue !== 'function' && typeof dispatchValue !== 'object' && Array.isArray(dispatchValue)) {
            throw TypeError('dispatchValue must be an object or a predicate function');
        }
        if (typeof dispatchValue === 'object' && (dispatchValue as any)?.trebleKey === undefined) {
            throw TypeError('dispatchValue must have a trebleKey property that matches the trebleKey property in the Store');
        }
        dispatch({
            type: action,
            [action]: dispatchValue,
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