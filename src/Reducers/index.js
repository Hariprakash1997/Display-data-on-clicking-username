import {combineReducers} from 'redux';
import UserReducer from './Reducer-users';
import ActiveUserReducer from './Reducer-active-user';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;