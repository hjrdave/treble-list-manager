/*
    Remove specific state object from state array
*/
import { TrebleGSM } from 'treble-gsm';

const removeState = (data: TrebleGSM.MiddlewareData) => {

    const currentState: { [key: string]: any }[] = data.currentState;
    const dispatchValue = data.dispatchValue;
    const createPredicate = (typeof dispatchValue === 'object') ?
        (item: { [key: string]: any }) => (dispatchValue?.trebleKey !== item?.trebleKey) : (item: { [key: string]: any }) => !(dispatchValue(item));

    const filteredState = currentState.filter(createPredicate);
    return filteredState;
}

export default removeState;