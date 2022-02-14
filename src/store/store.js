import { createStore, combineReducers } from 'redux';
import colorReducer from './reducers/colorReducer';

const appRecucer = combineReducers({
    colorReducer: colorReducer,
});

export default createStore(appRecucer);
