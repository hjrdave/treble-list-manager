
export interface IExtendSubscribeAPI {

    remove: (
        action: string,
        targetValue: any,
        options?: {
            disableMiddleware?: boolean
        }
    ) => void,

    append: (
        action: string,
        dispatchValue: any,
        options?: {
            disableMiddleware?: boolean
        }
    ) => void,

    prepend: (
        action: string,
        dispatchValue: any,
        options?: {
            disableMiddleware?: boolean
        }
    ) => void,

    orderBy: (
        action: string,
        dispatchValue: any,
        sortType: 'asc' | 'desc',
        options?: {
            disableMiddleware?: boolean
        }
    ) => void,

    edit: (
        action: string,
        dispatchValue: any,
        options?: {
            disableMiddleware?: boolean
        },
        dispatch?: any,
    ) => void,

    removeBatch: (
        action: string,
        targetBatch: any[],
        options?: {
            disableMiddleware?: boolean
        },
        dispatch?: any
    ) => void,
}

export interface ICreateExtendSubscribeAPI {
    (
        dispatch: any,
        store: any
    ): IExtendSubscribeAPI
}