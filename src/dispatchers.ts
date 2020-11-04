/*
    Dispatchers
    - Dispatcher methods that can be added to SubscribeAPI
*/
import {TrebleGSM} from 'treble-gsm';

interface IDispatcher{
    (
        dispatch: (data: TrebleGSM.DispatchPayload) => TrebleGSM.DispatchPayload,
        action: any,
        dispatchValue: any,
        options: TrebleGSM.DispatcherOptions
    ): void
}
export const dispatchSomething:IDispatcher = (dispatch, action, dispatchValue, options) => {
    
    //dispatch payload
    dispatch({

        //default dispatch api key values
        type: action,
        [action]: dispatchValue,

        //targets a reducer action type
        reducerAction: 'processDispatchExample',

        //default and custom options that can be passed to reducer actions and other middleware
        options: {
            ...options
        }

    });
}