import { all, put, call, takeLatest } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.action';



export function* onClearCart() {
    yield put(clearCart());
}

export function* clearCartOnSignout() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, onClearCart);
}

export function* cartSagas() {
    yield all([call(clearCartOnSignout)]);
}
