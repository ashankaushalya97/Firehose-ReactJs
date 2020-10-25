import { takeEvery, put, call } from 'redux-saga/effects';
import { 
    getCheckinDataSuccess,
    getCheckinDataFail
} from '../action';
import {
    GET_CHECKIN_DATA
} from '../constant';
import commonApi from '../../../middleware/commonApi';

const sampleData = {
    'date':'2020-10-20',
    'appointments':[
       {
          'date':'2020-10-20',
          'time':'13:45',
          'customer':'CAV',
          'conf_no':'456783',
          'direction':'I',
          'checkin':{
             'checkin_no':'1234',
             'checkin_time':'14:15',
             'checkin_date':'2020-10-20',
             'carrier':'BAYB',
             'truck_no':'2367'
          },
          'booking_party':'Arrow Logistics',
          'booking_contact':'Matt Bowser',
          'contact_phone':'320-123-6789',
          'orders':[
             {
                'order_no':'S930645345',
                'po_no':'',
                'position':'full'
             }
          ]
       }
    ]
 }

function* getCheckinData(action){
    try{
        // const result = yield call(commonApi.getCheckinData);
        // yield put(getCheckinDataSuccess(result.data.response));
        yield put(getCheckinDataSuccess(sampleData));
    }catch(error){
        yield put(getCheckinDataFail(error));
    }    
}

export default function* profileSagas() {
    yield* [
        takeEvery(GET_CHECKIN_DATA, getCheckinData),
      ];
  }