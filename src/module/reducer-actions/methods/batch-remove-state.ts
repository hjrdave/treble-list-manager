/*
    Remove Batch Items
    - removes an array of items from state object array
*/
import {TrebleGSM} from 'treble-gsm'

const batchRemoveState = (middlewareData: TrebleGSM.MiddlewareData) => {

    const currentState: {[key:string]: any}[] = middlewareData.currentState;
    const dispatchValue: {[key:string]: any} = middlewareData.dispatchValue;
    const filteredState = currentState.filter((item) => {
        if(!(dispatchValue.includes(item))){
            return item;
        }
    });

    return filteredState;

}

export default batchRemoveState;