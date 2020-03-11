import { takeLatest, all, call, put } from 'redux-saga/effects';
import { auth, googleProvider, createuserProfileDocument, checkIfUserAuthenticated } from '../../firebase/firebase.utilities';
import UserActionTypes from './user.types';
import {
    signInSuccess,
    signInFailure,
    userSignoutSuccess,
    userSignoutFailure,
    signUpFailure,
    signUpSuccess
} from './user.action';

function* createUserSnapshot(userAuth, additionalInfo) {
    try {
        const userRef = yield call(createuserProfileDocument, userAuth, additionalInfo);
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

export function* emailSignInStartAsync({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield createUserSnapshot(user);
    } catch (error) {
        yield put(signInFailure(error));
    }

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

export function* userSignout() {
    try {
        yield auth.signOut();
        yield put(userSignoutSuccess());
    } catch (error) {
        yield put(userSignoutFailure(error));
    }
}

export function* userSignUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess(user, {displayName}))
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({ payload: { createdUser, additionalInfo: displayName } }) {
    yield createUserSnapshot(createdUser, displayName);
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInStartAsync);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInStartAsync);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUp() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, userSignUp);
}

export function* onUserSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, userSignout);
}
export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onUserSignOut),
        call(onSignUp),
        call(onSignUpSuccess)
    ]);
}