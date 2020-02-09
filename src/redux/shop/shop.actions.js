import { shopActionTypes } from './shop.types';
import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utilities';


export const fetchCollectionsStart=()=>({
    type:shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess=collectionsMap=>({
    type:shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
});

export const fetchCollectionsFailure=error=>({
    type:shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:error.message
});

export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        dispatch(fetchCollectionsStart());
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error=>dispatch(fetchCollectionsFailure(error)));
    }
};
