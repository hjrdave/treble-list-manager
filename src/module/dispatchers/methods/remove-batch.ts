/*
    Remove Batch
    - method for removing a group of list items at a time.
*/
import { TrebleGSM } from 'treble-gsm';
import reducerActionKeys from '../../reducer-actions/keys';
import { trebleLMConsole } from '../../globals';

interface IRemoveBatch {
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue: any[],
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const removeBatch: IRemoveBatch = (dispatch, action, dispatchValue, options) => {

    try {
        if (!Array.isArray(dispatchValue)) {
            throw TypeError('Treble SubscribeAPI: targetBatch must be an array')
        }

        dispatch({
            type: action,
            [action]: dispatchValue,
            reducerAction: reducerActionKeys.removeBatch,
            options: {
                ...options
            }
        })
    }
    catch (error) {
        console.error(`${trebleLMConsole} ${error}`);
    }
}
export default removeBatch;