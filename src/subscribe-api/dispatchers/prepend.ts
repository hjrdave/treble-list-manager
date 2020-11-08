/*
    Prepend state
    - prepends state object to object array 
*/
import {TrebleGSM} from 'treble-gsm';
import reducerActionKeys from '../../reducer-action-keys';

interface IPrepend{
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue: any,
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const prepend: IPrepend = (dispatch, action, dispatchValue, options) => {
    
    dispatch({
        type: action,
        [action]: dispatchValue,
        reducerAction: reducerActionKeys.prependState,
        options: {
            ...options
        }
    })
}
export default prepend;