/*
    Edit state
    - Appends state object to object array
*/
import {TrebleGSM} from 'treble-gsm';
import reducerActionKeys from '../../reducer-action-keys';

interface IEdit{
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue: any,
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const edit: IEdit = (dispatch, action, dispatchValue, options) => {
    try {
        if (dispatchValue.trebleKey === undefined) {
            throw Error(`Treble SubscribeAPI: ${action}: features.keys must be set to true.`)
        }
    } catch (error) {
        throw error
    }
    dispatch({
        type: action,
        [action]: dispatchValue,
        reducerAction: reducerActionKeys.editState,
        options: {
            ...options
        }
    })
}
export default edit;