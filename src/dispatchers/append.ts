/*
    Append state
    - Appends state object to object array
*/
import {TrebleGSM} from 'treble-gsm';

interface IAppend{
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue: any,
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const append: IAppend = (dispatch, action, dispatchValue, options) => {
    dispatch({
        type: action,
        [action]: dispatchValue,
        reducerAction: 'TrebleLMAppendState',
        options: {
            ...options
        }
    })
}
export default append;