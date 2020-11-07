/*
    A middleware that assignes static keys to Store object lists
    - Feature.key must be set to true to activate this.
    - Assigns the property trebleKey with an index value
*/
import {TrebleGSM} from 'treble-gsm';

const generateStaticKeys = (data: TrebleGSM.MiddlewareData) => {

    const features  = data.features as TrebleGSM.StoreFeatures & {keys?:boolean};
    const dispatchValue = data.dispatchValue

    if(features?.keys !== false){
        if(Array.isArray(dispatchValue)){
            if(typeof dispatchValue[0] === 'object' && !(Array.isArray(dispatchValue[0])) && dispatchValue[0] !== null){
                const dispatchValueWithKeys = dispatchValue.map((item, index) => {
                    return {
                        trebleKey: index,
                        ...item
                    }
                });

                return dispatchValueWithKeys;
            }
            return dispatchValue;
        }
        return dispatchValue;
    }
    return dispatchValue;
}

export default generateStaticKeys;
