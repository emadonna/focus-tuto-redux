import {reducerBuilder} from 'focus-redux/reducers/reducer-builder';
import {loadUserTypes} from '../actions/user-actions';
import {saveUserTypes} from '../actions/user-actions';

//types to use
// question here is should loadUserTypes be more like {request, receive} instead of {REQUEST_LOAD_USER, RESPONSE_LOAD_USER}
// I prefer the things as they are now but I would like your opinion @BernardStanislas and @Tommass
const {REQUEST_LOAD_USER, RESPONSE_LOAD_USER, ERROR_LOAD_USER} = loadUserTypes;
const {REQUEST_SAVE_USER, RESPONSE_SAVE_USER, ERROR_SAVE_USER} = saveUserTypes;

// default data
const DEFAULT_DATA = {
    firstName:'UserYolo'
};

// Reducer for the user entity with a state modification on load and save.
const userReducer = reducerBuilder({
    types: {
        load: {request: REQUEST_LOAD_USER, response: RESPONSE_LOAD_USER, error: ERROR_LOAD_USER},
        save: {request: REQUEST_SAVE_USER, response: RESPONSE_SAVE_USER, error: ERROR_SAVE_USER}
    },
    defaultData: DEFAULT_DATA
});

export default userReducer;
