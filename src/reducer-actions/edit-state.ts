/*
    Edit state objects in place in state arrays
*/

import {TrebleGSM} from 'treble-gsm';

const editState = (data: TrebleGSM.MiddlewareData) => {

    const currentState: {[key:string]: any, trebleKey: number}[] = data.currentState;
    const dispatchValue: {[key:string]: any, trebleKey: number} = data.dispatchValue;
    const editedState = currentState?.map((item) => {
        if(dispatchValue.trebleKey === item.trebleKey){
            return dispatchValue;
        }
        return item
    });
    
    return editedState;
}

export default editState;