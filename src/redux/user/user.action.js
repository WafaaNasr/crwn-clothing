
import UserActionTypes from './user.types';


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});
export const googleSignInSuccess = user => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});
export const googleSignInFailure = error => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FALIURE,
    payload: error
});

export const emailSignInStart = usernameAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: usernameAndPassword
});
export const emailSignInSuccess = user => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
});
export const emailSignInFailure = error => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FALIURE,
    payload: error
});


export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});