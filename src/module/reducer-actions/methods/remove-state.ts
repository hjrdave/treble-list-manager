/*
    Remove specific state object from state array
*/
import { TrebleGSM } from 'treble-gsm';

const removeState = (data: TrebleGSM.MiddlewareData) => {

    const currentState: { [key: string]: any }[] = data.currentState;
    const predicate = (item: { [key: string]: any }) => data.dispatchValue(item);
    const filteredState = currentState.filter((item) => (predicate(item)));
    return filteredState;
}

export default removeState;