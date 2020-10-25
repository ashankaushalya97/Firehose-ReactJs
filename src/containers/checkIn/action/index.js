import {
    GET_CHECKIN_DATA,
    GET_CHECKIN_DATA_SUCCESS,
    GET_CHECKIN_DATA_FAIL
} from '../constant';

export const getCheckinData = () => {
    return{
        type: GET_CHECKIN_DATA
    }
}
export const getCheckinDataSuccess = (payload) => {
    return{
        type: GET_CHECKIN_DATA_SUCCESS,
        payload
    }
}
export const getCheckinDataFail = (error) => {
    return{
        type: GET_CHECKIN_DATA_FAIL,
        error
    }
}