
import UserActionTypes from './user.types';


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = usernameAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: usernameAndPassword
});
export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FALIURE,
    payload: error
});

