/*
    Reducer Action Keys
    - Reducer Action Keys used by Reducer Actions and Dispatchers
*/

//namespaces reducer action keys to help prevent module name collisions
const nameSpace = 'TrebleLM';

const reducerActionKeys = {
    appendState: `${nameSpace}AppendState`,
    removeBatchState: `${nameSpace}RemoveBatch`,
    editState: `${nameSpace}EditState`,
    orderByState: `${nameSpace}OrderBy`,
    prependState: `${nameSpace}Prepend`,
    removeState: `${nameSpace}Remove`
}

export default reducerActionKeys;