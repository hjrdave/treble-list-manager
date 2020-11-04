/*
   Middleware module for handling lists
*/
import { IRunTrebleListManager } from './interfaces';
import {
    prependStateItem,
    appendStateItem,
    batchRemoveStateItems,
    editStateItems,
    orderStateItems,
    removeState
} from './reducer-methods';

const runTrebleListManager: IRunTrebleListManager = (moduleData) => {
    let dispatchValue = moduleData.dispatchValue;
    let objectProp = Object.keys(moduleData.storeItem.state)[0];
    let state = moduleData.storeItem.state;
    let orderType = moduleData.dispatchActions?.orderType;
    let keys = moduleData.storeItem.features?.keys || null;
    let subscribeType = moduleData.dispatchActions.subscribeType;

    let subcribeMethods = {
        prepend: () => prependStateItem(dispatchValue, keys, state, objectProp),
        append: () => appendStateItem(dispatchValue, keys, state, objectProp),
        remove: () => removeState(dispatchValue, state, objectProp),
        removeBatch: () => batchRemoveStateItems(dispatchValue, state, objectProp),
        orderBy: () => orderStateItems(orderType, dispatchValue, state, objectProp),
        edit: () => editStateItems(dispatchValue, state, objectProp)
    }

    return dispatchValue;

}
export default runTrebleListManager;