/*
    Edit state objects in place in state arrays
*/
import { IEditStateItem } from './interfaces';

const editStateItem: IEditStateItem = (dispatchValue, state, objectProp) => {
    let currentState = [...state[objectProp]];
    let editedState = currentState?.map((item) => {
        if (dispatchValue.trebleKey === item.trebleKey) {
            return dispatchValue;
        }
        return item;
    })
    return editedState;
}

export default editStateItem;