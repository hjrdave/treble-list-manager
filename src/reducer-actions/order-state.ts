/*
    Sorts state items
*/
import {TrebleGSM} from 'treble-gsm';

const orderState = (data: TrebleGSM.MiddlewareData) => {

    const currentState:{[key:string]: any}[] = data.currentState;
    const targetProp: string | null = data.dispatchValue;
    const orderType: 'asc' | 'desc' = data.dispatchPayload?.orderType;

    if(orderType === 'asc'){

        const orderedState = (targetProp !== null) ? currentState.sort(

            (a: any, b: any) => a[targetProp].toString().localeCompare(b[targetProp].toString(), undefined, { numeric: true })

        ) : currentState.sort(

            (a: any, b: any) => a.toString().localeCompare(b.toString(), undefined, { numeric: true })

        );
        
        return orderedState;
    }
    if(orderType === 'desc'){

        const orderedState = (targetProp !== null) ? currentState.sort(

            (a: any, b: any) => b[targetProp].toString().localeCompare(a[targetProp].toString(), undefined, { numeric: true })

        ) : currentState.sort(
            (a: any, b: any) => b.toString().localeCompare(a.toString(), undefined, { numeric: true })
        );
        return orderedState;

    }


}

export default orderState;