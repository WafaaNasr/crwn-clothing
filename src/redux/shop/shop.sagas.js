import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utilities';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import  shopActionTypes  from './shop.types';


export function* fetchCollectionsStartAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}


export function* fetchCollectionStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START
        , fetchCollectionsStartAsync);

}