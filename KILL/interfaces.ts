import { IDispatchActions, IStoreState, IStoreFeatures, ISubscribeType } from 'treble-gsm';

type TExtendSubscribeType = 'append' | 'prepend' | 'remove' | 'orderBy' | 'edit' | 'removeBatch'

interface IExtendDispatchActions extends IDispatchActions<TExtendSubscribeType> {
    orderType?: 'asc' | 'desc'
}

interface IExtendStoreFeatures extends IStoreFeatures {
    keys?: boolean;
}

export interface IRunTrebleListManager {
    (
        moduleData: {
            dispatchValue: any,
            storeItem: {
                action: string,
                state: IStoreState,
                features?: IExtendStoreFeatures
            },
            dispatchActions: IExtendDispatchActions
        }
    ): any
}
