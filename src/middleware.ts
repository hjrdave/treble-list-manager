/*
    Middleware functions
    - middleware that can be added to reducer (follows the Store Feature Middleware family)
*/
import {TrebleGSM} from 'treble-gsm';

//side effect that runs as soon as dispatcher dispatches
export const logSomething = (data: TrebleGSM.MiddlewareData) => console.log('logging...');

//checks middleware data (dispatch value) agianst specified criteria (returns false to cancel dispatch pipeline)
export const checkSomething = (data: TrebleGSM.MiddlewareData) => {
    if(data.dispatchValue === 'foo'){
        return false
    }
    return true
}

//after check passes true runs a side effect
export const runSomething = (data: TrebleGSM.MiddlewareData) => console.log('running...');

//after check passes true this processes dispatch value and returns a new one
export const processSomething = (data: TrebleGSM.MiddlewareData) => {
    return `${data.dispatchValue} is a foo`
}

//side effect thats runs after processes middleware finishes
export const callbackSomething = () => console.log('fire some function')