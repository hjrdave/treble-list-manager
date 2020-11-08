/*
    Treble List Manager Module
    - Entry point for module data
*/

import {createModule} from 'treble-gsm';
import reducerActionKeys from './reducer-action-keys';
import generateStaticKeys from './middleware/generate-static-keys';
import {appendState, batchRemoveState, editState, orderState, prependState, removeState, append, edit, orderBy, prepend, removeBatch, remove} from './subscribe-api';

const TrebleListManager = createModule({

    //name of module (name should be the same as the npm package name to prevent collisions)
    name: 'treble-list-manager',

    //Used to add new store items to host Store (state should be namespaced by treble module name)
    //extendStore: TrebleModuleStore,

    //Takes an array of feature keys (These can be used as flags to allow certain Reducer Action functionality)
    featureKeys: ['keys'],

    //middleware
    middleware: {
        process: generateStaticKeys
    },

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
        
    }

});

export default TrebleListManager

