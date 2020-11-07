/*
    TrebleGSM Module
    - Entry point for module data
*/

import {createModule} from 'treble-gsm';
import reducerActionKeys from './reducer-action-keys';
import {append, edit, orderBy, prepend, remove, removeBatch} from './dispatchers';
import {appendState, batchRemoveState, editState, orderState, prependState, removeState} from './reducer-actions';
import { generateStateKeys } from './middleware';

const TrebleListManager = createModule({

    //name of module (name should be the same as the npm package name to prevent collisions)
    name: 'treble-list-manager',

    //Used to add new store items to host Store (state should be namespaced by treble module name)
    //extendStore: TrebleModuleStore,

    //Takes an array of feature keys (These can be used as flags to allow certain Reducer Action functionality)
    featureKeys: ['keys'],

    //extend the SubscribeAPI
    subscribeAPI: {

        //dispatchers to add
        dispatchers: {
           'append': append,
           'edit': edit,
           'orderBy': orderBy,
           'prepend': prepend,
           'remove': remove,
           'removeBatch': removeBatch
        },

        //reducer actions to add
        reducerActions: {
            [reducerActionKeys.appendState]: appendState,
            [reducerActionKeys.removeBatchState]: batchRemoveState,
            [reducerActionKeys.editState]: editState,
            [reducerActionKeys.orderByState]: orderState,
            [reducerActionKeys.prependState]: prependState,
            [reducerActionKeys.removeState]: removeState,
        }
        
    },
    middleware: {
        process: (data) => generateStateKeys(data)
    }
    

});

export default TrebleListManager

