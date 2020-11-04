export interface ISubscribeTypeMethod {
    (
        dispatchValue: any,
        keys: boolean | null,
        state: {
            [key: string]: any
        },
        objectProp: string
    ): any[] | null
}

export interface IAppendStateItem {
    (
        dispatchValue: any,
        keys: boolean | null,
        state: {
            [key: string]: any
        },
        objectProp: string
    ): any[] | null
}

export interface IBatchRemoveStateItems {
    (
        dispatchValue: any,
        state: {
            [key: string]: any
        },
        objectProp: string
    ): any[] | null
}

export interface IEditStateItem {
    (
        dispatchValue: any,
        state: {
            [key: string]: any
        },
        objectProp: string
    ): any[] | null
}


export interface IOrderStateItems {
    (
        orderType: 'asc' | 'desc' | undefined,
        dispatchValue: any,
        state: {
            [key: string]: any
        },
        objectProp: string
    ): void
}


export interface IPrependStateItem {
    (
        dispatchValue: any,
        keys: boolean | null,
        state: {
            [key: string]: any
        },
        objectProp: string
    ): any[] | null
}

export interface IRemoveState {
    (
        dispatchValue: any,
        state: {
            [key: string]: any
        },
        objectProp: string
    ): any[] | null
}
