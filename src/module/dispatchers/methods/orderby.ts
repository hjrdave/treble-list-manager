/*
    Order state
    - Sorts 
*/
import { TrebleGSM } from 'treble-gsm';
import reducerActionKeys from '../../reducer-actions/keys';
import { trebleLMConsole } from '../../globals';

interface IOrderBy {
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => void,
        action: string,
        targertProp: string,
        orderType: 'asc' | 'desc',
        options?: TrebleGSM.DispatcherOptions
    ): void
}

const orderBy: IOrderBy = (dispatch, action, targetProp, orderType, options) => {

    try {
        if (typeof action !== 'string') {
            throw TypeError('action prop must be a string');
        }
        if (typeof targetProp !== 'string') {
            throw TypeError('target prop must be a string');
        }
        if (orderType) {
            throw Error('orderType must be "asc" or "desc"');
        }
        dispatch({
            type: action,
            [action]: targetProp,
            reducerAction: reducerActionKeys.orderByState,
            orderType: orderType,
            options: {
                ...options
            }
        })
    } catch (error) {
        console.error(`${trebleLMConsole} ${error}`);
    }
}
export default orderBy;