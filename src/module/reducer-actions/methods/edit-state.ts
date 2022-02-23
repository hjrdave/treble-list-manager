/*
    Edit state objects in place in state arrays
*/

import { TrebleGSM } from 'treble-gsm';

const editState = (data: TrebleGSM.MiddlewareData) => {

    const currentState: { [key: string]: any }[] = data.currentState;
    const dispatchValue = data.dispatchValue;
    const editedState = currentState?.map((item) => {
        if (typeof dispatchValue === 'object') {
            if (dispatchValue.trebleKey === item.trebleKey) {
                return dispatchValue;
            }
            return item;
        }
        else if (typeof dispatchValue === 'function') {
            const isEdited = dispatchValue(item);
            if (isEdited) {
                return isEdited;
            }
            return item;
        }
        return item
    });

    return editedState;
}

export default editState;