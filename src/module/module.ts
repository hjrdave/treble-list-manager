/*
    Treble List Manager Module
    - Entry point for module data
*/

import { createModule } from 'treble-gsm';
import { appendState, batchRemoveState, editState, orderState, prependState, removeState, reducerActionKeys } from './reducer-actions';
import { append, edit, orderBy, prepend, removeBatch, remove } from './dispatchers';
import { generateStaticKeys } from './middleware';


const TrebleListManager = createModule({

    name: 'treble-list-manager',
    featureKeys: ['keys'],
    middleware: {
        process: generateStaticKeys
    },
    dispatchers: {
        'append': append,
        'edit': edit,
        'orderBy': orderBy,
        'prepend': prepend,
        'remove': remove,
        'removeBatch': removeBatch
    },
    reducerActions: {
        [reducerActionKeys.append]: appendState,
        [reducerActionKeys.removeBatch]: batchRemoveState,
        [reducerActionKeys.edit]: editState,
        [reducerActionKeys.orderBy]: orderState,
        [reducerActionKeys.prepend]: prependState,
        [reducerActionKeys.remove]: removeState,
    }

});

export { reducerActionKeys }
export default TrebleListManager

