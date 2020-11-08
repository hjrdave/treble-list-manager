/*
    Remove Batch
    - method for removing a group of list items at a time.
*/
import {TrebleGSM} from 'treble-gsm';
import reducerActionKeys from '../../reducer-actions/keys';

interface IRemoveBatch{
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue: any[],
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const removeBatch: IRemoveBatch = (dispatch, action, dispatchValue, options) => {

    try{
        if(dispatchValue.length === undefined){
            throw TypeError('Treble SubscribeAPI: targetBatch must be an array.')
        }
    
    dispatch({
        type: action,
        [action]: dispatchValue,
        reducerAction: reducerActionKeys.removeBatchState,
        options: {
            ...options
        }
    })
    }
    catch(Errors){
        throw Errors
    }
}
export default removeBatch;