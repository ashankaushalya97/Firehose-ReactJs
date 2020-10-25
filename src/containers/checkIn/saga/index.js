import { takeEvery, put, call } from 'redux-saga/effects';
import { 
    getCheckinDataSuccess,
    getCheckinDataFail,
    saveCheckinSuccess,
    saveCheckinFail
} from '../action';
import {
    GET_CHECKIN_DATA,
    SAVE_CHECKIN_DATA
} from '../constant';
import commonApi from '../../../middleware/commonApi';

function* getCheckinData(action){
    try{
        const result = yield call(commonApi.getCheckinData);
        if(result.status == '200'){
            yield put(getCheckinDataSuccess(result.data.response));
        }
    }catch(error){
        yield put(getCheckinDataFail(error));
    }    
}
function* saveCheckin(action){
    try{
        const result = yield call(commonApi.saveCheckinData,action.payload);
        if(result.status == '200'){
            yield put(saveCheckinSuccess());
        }
    }catch(error){
        yield put(saveCheckinFail(error));
    }    
}

export default function* profileSagas() {
    yield* [
        takeEvery(GET_CHECKIN_DATA, getCheckinData),
        takeEvery(SAVE_CHECKIN_DATA, saveCheckin),
      ];
  }