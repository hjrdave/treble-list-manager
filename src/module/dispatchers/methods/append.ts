/*
    Append state
    - Appends state object to object array
*/
import {TrebleGSM} from 'treble-gsm';
import reducerActionKeys from '../../reducer-actions/keys';

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
        reducerAction: reducerActionKeys.appendState,
        options: {
            ...options
        }
    });
}
export default append;