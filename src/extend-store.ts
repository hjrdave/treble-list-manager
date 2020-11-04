/*
    Extend Store
    - Can specify Store items that need to be added to host Store
*/
import {createStore} from 'treble-gsm';

const TrebleModuleStore = createStore([
    {
        action: 'updateExample',
        state: {
            example: 'This is an example'
        }
    }
]);

export default TrebleModuleStore