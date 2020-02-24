import { takeLatest, all, call, put } from 'redux-saga/effects';
import { auth, googleProvider, createuserProfileDocument, checkIfUserAuthenticated } from '../../firebase/firebase.utilities';
import UserActionTypes from './user.types';
import { signInSuccess, signInFailure } from './user.action';

function* createUserSnapshot(userAuth) {
    try {
        const userRef = yield call(createuserProfileDocument, userAuth);
        const snapshot = yield userRef.get();
        yield put(signInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        }));
    } catch (error) {
        /// TODO: ADD Logger Like Sentry
        yield put(signInFailure(error));
    }
}

export function* googleSignInStartAsync() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield createUserSnapshot(user);
    } catch (error) {
        yield put(signInFailure(error));
    }

}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInStartAsync);
}

export function* emailSignInStartAsync({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield createUserSnapshot(user);
    } catch (error) {
        yield put(signInFailure(error));
    }

}
export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInStartAsync);
}

export function* isUserAuthenticated() {
    try {
        const user = yield checkIfUserAuthenticated();
        if (!user) return;
        yield createUserSnapshot(user);
    } catch (error) {
        yield put(signInFailure(error));
    }

}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession)]);
}