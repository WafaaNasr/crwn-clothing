import { takeLatest, all, call, put } from 'redux-saga/effects';
import { auth, googleProvider, createuserProfileDocument } from '../../firebase/firebase.utilities';
import UserActionTypes from './user.types';
import { googleSignInSuccess, googleSignInFailure } from './user.action';

export function* googleSignInStartAsync() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createuserProfileDocument, user);
        const snapshot = yield userRef.get();
        yield put(googleSignInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        }));
    } catch (error) {
        yield put(googleSignInFailure(error));
    }

}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInStartAsync);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)]);
}