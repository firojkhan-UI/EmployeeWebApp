import {all, takeEvery, call, put, takeLatest} from 'redux-saga/effects';
import { GET_EMP_LIST } from './type';
import { getageapi } from '../../services';
import { fetchListEmployeeSuccess, listEmployeeFail } from './slice';


function* fetchEmployeeList(action) {
    
    try {
        const response = yield call(getageapi)
        if(response) {
            console.log(response,"HAHA:::saga")
            yield put(fetchListEmployeeSuccess({data: response}))
        }
        else {
            yield put(listEmployeeFail())
        }
        
    }
    catch (e) {
        yield put(listEmployeeFail())
    }
}

export default function* watchEmployeeData() {
    yield all([
        takeEvery(GET_EMP_LIST, fetchEmployeeList)
    ])
}