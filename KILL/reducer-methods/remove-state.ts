/*
    Remove specific state object from state array
*/
import { IRemoveState } from './interfaces';

const removeState: IRemoveState = (dispatchValue, state, objectProp) => {
    let filteredStateArray = state[objectProp].filter((item: any) => { return item !== dispatchValue });
    return filteredStateArray;
}

export default removeState;