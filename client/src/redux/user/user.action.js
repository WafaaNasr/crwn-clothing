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

export const checkUserSesssion = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const userSignoutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const userSignoutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});
export const userSignoutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = userCredential => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredential
});
export const signUpSuccess = (createdUser, additionalInfo) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {createdUser, additionalInfo}
});
export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});