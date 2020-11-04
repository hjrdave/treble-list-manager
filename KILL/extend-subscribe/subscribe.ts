/*
    Treble List Manager SubscribeAPI methods
    Extend TrebleGSM SubscribeAPI with new methods
*/

import { ICreateExtendSubscribeAPI, IExtendSubscribeAPI } from './interface';
import { append, edit, orderBy, prepend, remove, removeBatch } from './methods';

const extendSubscribeAPI: ICreateExtendSubscribeAPI = (dispatch: any, store: any) => {

    //subscribeAPI methods
    let subscribeMethods: IExtendSubscribeAPI = {

        //targets a list item in Store and removes it from the list
        remove: (action, targetValue, options) => remove(action, targetValue, options, dispatch),

        //appends a state item to a Store list
        append: (action, dispatchValue, options) => append(action, dispatchValue, options, dispatch),

        //prepends a state item to a Store list
        prepend: (action, dispatchValue, options) => prepend(action, dispatchValue, options, dispatch),

        //orders a Store list by descending or ascending order
        orderBy: (action, targetProp, sortType, options) => orderBy(action, targetProp, sortType, options, dispatch),

        //allows for a Store list item to be edited and then resaved to the Store with the rest intact. Features.keys must be set to true.
        edit: (action, targetValue, options) => edit(action, targetValue, options, dispatch),

        //removes a group of list items at one time
        removeBatch: (action, targetBatch, options) => removeBatch(action, targetBatch, options, dispatch),

    };

    return subscribeMethods
}

export default extendSubscribeAPI;