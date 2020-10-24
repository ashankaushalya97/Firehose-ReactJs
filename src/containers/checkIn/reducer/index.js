import {
  } from '../constant';
  
  const initialState = {
    
    inProgress: false,
    status: false,
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    //   case GET_USER_DETAILS_INPROGRESS: 
    //     return { ...initialState, inProgress : true };
    //   case GET_USER_DETAILS_SUCCESS: 
    //     return { ...initialState, status : true , userData : action.payload};
    //   case GET_USER_DETAILS_FAIL: 
    //     return { ...initialState, error : action.error };
    //   case SAVE_PROFILE_PIC_SUCCESS:
    //     return {...initialState, saveProfilePic_Success : true}
    //   case SAVE_PROFILE_PIC_FAIL:
    //     return {...initialState, saveProfilePic_Fail : action.error}
    //   case Update_PROFILE_SUCCESS:
    //     return {...initialState, updateProfile_Success : true}
    //   case SAVE_PROFILE_PIC_FAIL:
    //     return {...initialState, updateProfile_Fail : action.error}
    //   case DO_LOGOUT_FAILED:
    //     return {...initialState, logout_Fail : 'failed'}
      
      default:
        return state;
    }
  };
  
  export default profileReducer;