/*
    TrebleGSM Module
    - Entry point for module data
*/

import {createModule} from 'treble-gsm';
import TrebleModuleStore from './extend-store';
import {dispatchSomething} from './dispatchers';
import {runSomeReducerAction} from './reducer-actions';
import {logSomething, checkSomething, runSomething, processSomething, callbackSomething} from './middleware';

const TrebleModule = createModule({

    //name of module (name should be the same as the npm package name to prevent collisions)
    name: 'treble-module',

    //Used to add new store items to host Store (state should be namespaced by treble module name)
    extendStore: TrebleModuleStore,

    //Takes an array of feature keys (These can be used as flags to allow certain Reducer Action functionality)
    featureKeys: ['enableSomething', 'doSomething'],

    //extend the SubscribeAPI
    subscribeAPI: {

        //dispatchers to add
        dispatchers: {
            'exampleDispatcher': dispatchSomething
        },

        //reducer actions to add
        reducerActions: {
            'exampleReducerAction': runSomeReducerAction
        }
        
    },

    //middleware functions
    middleware: {
        //runs a side effect as soon as dispatcher runs
        log: logSomething,

        //checkes a specified criteria (returns false and cancels dispatch pipeline if criteria fails)
        check: checkSomething,

        //runs side effect when check finishes
        run: runSomething,

        //processes dispatch value when check finishes
        process: processSomething,

        //runs sideeffect when process finishes
        callback: callbackSomething
    }

});

export default TrebleModule

