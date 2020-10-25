import {
    GET_CHECKIN_DATA_SUCCESS,
    GET_CHECKIN_DATA_FAIL
  } from '../constant';

  const initialState = {
    checkin_data: {}
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CHECKIN_DATA_SUCCESS: 
        return { ...initialState, checkin_data : action.payload };
      case GET_CHECKIN_DATA_FAIL: 
        return { ...initialState, checkin_fail : action.error };
      
      default:
        return state;
    }
  };
  
  export default profileReducer;