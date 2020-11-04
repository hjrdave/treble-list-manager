/*
    Treble Core Reducer Actions
    - Reducer Actions are middleware functions that are targeted by a dispatcher and perform side effects and process data before the dispatchValue updates the Store.
*/
import {TrebleGSM} from 'treble-gsm';

export const runSomeReducerAction = (middlewareData: TrebleGSM.MiddlewareData) => {

    return middlewareData.dispatchValue;
}
