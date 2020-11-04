/*
    Sorts state items
*/
import { IOrderStateItems } from './interfaces';

const orderStateItems: IOrderStateItems = (orderType, state, objectProp, dispatchValue) => {
    let currentState = [...state[objectProp as any]];
    if (orderType === 'asc') {
        //if dispatch value is null it will evaluate as a string array
        let orderedStateArray = (dispatchValue !== null) ? currentState.sort(
            (a: any, b: any) => a[dispatchValue].toString().localeCompare(b[dispatchValue].toString(), undefined, { numeric: true })
        ) : currentState.sort((a: any, b: any) => a.toString().localeCompare(b.toString(), undefined, { numeric: true }));
        return orderedStateArray;
    }
    else if (orderType === 'desc') {
        //if dispatch value is null it will evaluate as a string array
        let orderedStateArray = (dispatchValue !== null) ? currentState.sort(
            (a: any, b: any) => b[dispatchValue].toString().localeCompare(a[dispatchValue].toString(), undefined, { numeric: true })
        ) : currentState.sort((a: any, b: any) => b.toString().localeCompare(a.toString(), undefined, { numeric: true }));
        return orderedStateArray;
    }
}

export default orderStateItems;