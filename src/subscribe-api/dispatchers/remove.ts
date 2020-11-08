/*
    Remove
    - method for removing an object from an array.
*/
import {TrebleGSM} from 'treble-gsm';
import reducerActionKeys from '../../reducer-action-keys';

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
        reducerAction: reducerActionKeys.removeState,
        options: {
            ...options
        }
    })
 
}
export default remove;