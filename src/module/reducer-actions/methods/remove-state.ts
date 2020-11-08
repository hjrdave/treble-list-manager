/*
    Remove specific state object from state array
*/
import {TrebleGSM} from 'treble-gsm';

const removeState = (data: TrebleGSM.MiddlewareData) => {
    
    const currentState: {[key:string]: any}[] = data.currentState;
    const dispatchValue: {[key:string]:any} = data.dispatchValue;
    const filteredState = currentState.filter((item) => {
        return item !== dispatchValue;
    });
    return filteredState;
}

export default removeState;