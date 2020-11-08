/*
    Order state
    - Sorts 
*/
import {TrebleGSM} from 'treble-gsm';
import reducerActionKeys from '../../reducer-action-keys';

interface IOrderBy{
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        targertProp: string,
        orderType: 'asc' | 'desc',
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const orderBy: IOrderBy = (dispatch, action, targetProp, orderType, options) => {
    
    dispatch({
        type: action,
        [action]: targetProp,
        reducerAction: reducerActionKeys.orderByState,
        orderType: orderType,
        options: {
            ...options
        }
    })
}
export default orderBy;