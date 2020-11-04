/*
    Order state
    - Sorts 
*/
import {TrebleGSM} from 'treble-gsm';

interface IOrderBy{
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        targerProp: string,
        orderType: 'asc' | 'desc',
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const orderBy: IOrderBy = (dispatch, action, targetProp, orderType, options) => {
    
    dispatch({
        type: action,
        [action]: targetProp,
        reducerAction: 'orderByTrebleLM',
        orderType: orderType,
        options: {
            ...options
        }
    })
}
export default orderBy;