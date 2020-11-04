/*
    Prepend state
    - prepends state object to object array 
*/
import {TrebleGSM} from 'treble-gsm';

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
        reducerAction: 'prependTrebleLM',
        options: {
            ...options
        }
    })
}
export default orderBy;