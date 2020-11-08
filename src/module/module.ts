/*
    Treble List Manager Module
    - Entry point for module data
*/

import {createModule} from 'treble-gsm';
import reducerActionKeys from './reducer-actions/keys';
import {appendState, batchRemoveState, editState, orderState, prependState, removeState} from './reducer-actions';
import {append, edit, orderBy, prepend, removeBatch, remove} from './dispatchers';
import {generateStaticKeys} from './middleware';


const TrebleListManager = createModule({

    name: 'treble-list-manager',
    featureKeys: ['keys'],
    middleware: {
        process: generateStaticKeys
    },
    subscribeAPI: {
        dispatchers: {
           'append': append,
           'edit': edit,
           'orderBy': orderBy,
           'prepend': prepend,
           'remove': remove,
           'removeBatch': removeBatch
        },
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

