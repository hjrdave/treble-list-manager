/*
    Reducer Action Keys
    - Reducer Action Keys used by Reducer Actions and Dispatchers
*/

//namespaces reducer action keys to help prevent module name collisions
const nameSpace = 'TREBLE_LIST_MANAGER_';

const reducerActionKeys = {
    append: `${nameSpace}append`,
    removeBatch: `${nameSpace}remove`,
    edit: `${nameSpace}edit`,
    orderBy: `${nameSpace}orderBy`,
    prepend: `${nameSpace}prepend`,
    remove: `${nameSpace}remove`
}

export default reducerActionKeys;