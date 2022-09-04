import { put, takeEvery } from 'redux-saga/effects';
import {
  PRODUCT_LIST,
  SEARCH_PRODUCT_LIST,
  SET_PRODUCT_LIST,
} from './actionType';

function* getProducts() {
  let data = yield fetch('http://localhost:3500/product');
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* getSearchList(data) {
  let searchData = yield fetch(`http://localhost:3500/product?q=${data.query}`);
  searchData = yield searchData.json();
  yield put({ type: SET_PRODUCT_LIST, data: searchData });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT_LIST, getSearchList);
}

export default productSaga;
