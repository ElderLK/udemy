import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, covertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(covertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchColletionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}