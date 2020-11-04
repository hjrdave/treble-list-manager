/*
    Remove
    - method for removing an object from an array.
*/
import {TrebleGSM} from 'treble-gsm';

interface IRemove{
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue: any,
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const remove: IRemove = (dispatch, action, dispatchValue, options) => {

  
    dispatch({
        type: action,
        [action]: dispatchValue,
        reducerAction: 'removeTrebleLM',
        options: {
            ...options
        }
    })
 
}
export default remove;