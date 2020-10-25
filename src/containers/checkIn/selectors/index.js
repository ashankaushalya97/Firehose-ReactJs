import {createSelector} from 'reselect';

const checkinReducer = state => state.checkInReducer;

const getCheckIn = createSelector(
    checkinReducer,
    currentState => currentState.checkin_data
);

export {
    getCheckIn
}