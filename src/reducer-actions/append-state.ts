/*
    appends dispatched state to state array
*/
import {TrebleGSM} from 'treble-gsm';

const appendState = (middlewareData: TrebleGSM.MiddlewareData) => {
    
    const currentState = middlewareData.currentState;
    const dispatchValue = middlewareData.dispatchValue;
    const appendedStateArray = [...currentState, dispatchValue];

    return appendedStateArray;
}

export default appendState;