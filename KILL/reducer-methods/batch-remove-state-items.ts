/*
    Remove Batch Items
    - removes an array of items from state object array
*/
import { IBatchRemoveStateItems } from './interfaces';

const batchRemoveStateItems: IBatchRemoveStateItems = (dispatchValue, state, objectProp) => {
    let filteredStateArray = state[objectProp].filter((item: any) => {
        if (!(dispatchValue.includes(item))) {
            return item
        }
    });
    return filteredStateArray;
}

export default batchRemoveStateItems;