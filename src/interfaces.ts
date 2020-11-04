/*
    Exported Interfaces for module
*/
import {TrebleGSM} from 'treble-gsm';
export declare namespace TrebleLM{

    export interface DispatcherOptions extends TrebleGSM.DispatcherOptions{
        //someOption?: boolean
    }
    export interface Dispatchers{

        dispatchSomething: (action: string, dispatchValue: any, options?: DispatcherOptions) => void

    }
}