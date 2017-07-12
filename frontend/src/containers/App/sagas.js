import { takeLatest, call, put } from 'redux-saga/effects';

import { getAPIDataLoaded, getAPIDataError } from './actions';

import {
  GET_API_DATA,
  GET_API_DATA_WITH_PROFILE,
} from './constants';

/**
  Data downloading using pure JS fetch
  @type: JS object
  { result: resultObj, error: errorObj }
**/
const fetchData = (url, options) => {
  const fetchRequest = new Request(url, options);

  return fetch(fetchRequest)
  .then((response) => (
    response.json().then((result) => ({ result }))
  ))
  .catch((error) => ({ error }));
};

function* getApiData() {
  const { result, error } = yield call(fetchData, 'http://0.0.0.0:4000/data', { method: 'get' });
  if (error) { yield put(getAPIDataError(error)); }
  yield put(getAPIDataLoaded(result));
}

function* getAPIDataWithProfile(params) {
  const { result, error } = yield call(fetchData, 'http://0.0.0.0:4000/data/' + params.id, { method: 'get' });
  if (error) { yield put(getAPIDataError(error)); }
  yield put(getAPIDataLoaded(result));
}

function* apiData() {
  yield takeLatest(GET_API_DATA, getApiData);
  yield takeLatest(GET_API_DATA_WITH_PROFILE, getAPIDataWithProfile);
}

export default apiData;
