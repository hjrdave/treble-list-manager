/*
    TrebleGSM Module
    - Entry point for module data
*/

import {createModule} from 'treble-gsm';
import {} from './reducer-actions';
import {append, edit, orderBy, prepend, remove, removeBatch} from './dispatchers';
import {appendState, batchRemoveState, editState, orderState, prependState, removeState} from './reducer-actions';

const TrebleListManager = createModule({

    //name of module (name should be the same as the npm package name to prevent collisions)
    name: 'treble-list-manager',

    //Used to add new store items to host Store (state should be namespaced by treble module name)
    //extendStore: TrebleModuleStore,

    //Takes an array of feature keys (These can be used as flags to allow certain Reducer Action functionality)
    //featureKeys: ['enableSomething', 'doSomething'],

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
            'TrebleLMAppendState': appendState,
            'removeBatchTrebleLM': batchRemoveState,
            'editStateTrebleLM': editState,
            'orderByTrebleLM': orderState,
            'prependTrebleLM': prependState,
            'removeTrebleLM': removeState,
        }
        
    },

    

});

export default TrebleListManager

