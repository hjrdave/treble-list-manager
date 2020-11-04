/*
    prepends dispatched state to state array
*/
import { generateStaticKeys } from '../middleware-methods';
import { IPrependStateItem } from './interfaces';

const prependStateItem: IPrependStateItem = (dispatchValue, keys, state, objectProp) => {
    //creates new array with prepended state. If features.keys is set to true will create a static key for each
    let prependedStateArray = (keys) ? generateStaticKeys([dispatchValue, ...state[objectProp]], keys) : [dispatchValue, ...state[objectProp]];

    return prependedStateArray;
}

export default prependStateItem;