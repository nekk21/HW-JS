import { call, put, takeEvery } from 'redux-saga/effects'

export function* sagaWatcher() {
  yield takeEvery('REQUEST_POSTS', sagaWorker)
}

function* sagaWorker() {
  try {
    const payload = yield call(getUsers)
    yield put({ type: 'RECIVED', payload })
  } catch (e) {
    throw console.error(e)
  }
}

async function getUsers() {
  const response = await fetch('https://api.github.com/users')
  return await response.json()
}
