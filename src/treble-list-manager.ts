/*
    TrebleGSM Module
    - Entry point for module data
*/

import {createModule} from 'treble-gsm';
import {} from './reducer-actions';
import {} from './dispatchers';

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
           // 'exampleDispatcher': dispatchSomething
        },

        //reducer actions to add
        reducerActions: {
            //'exampleReducerAction': runSomeReducerAction
        }
        
    },

    

});

export default TrebleListManager

